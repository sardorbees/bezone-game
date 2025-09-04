import React, { useEffect, useState } from 'react';
import axios from 'axios';
import "../assets/css/app.min.css";
import "../assets/css/style.css";

function Match() {
    const [matches, setMatches] = useState([]);
    const [filter, setFilter] = useState('all');

    useEffect(() => {
        const fetchMatches = async () => {
            try {
                let url = 'http://127.0.0.1:8000/api/turnir_section/matches/';
                if (filter !== 'all') url += `${filter}/`;
                const res = await axios.get(url);
                setMatches(res.data);
            } catch (err) {
                console.error(err);
            }
        };

        fetchMatches();
    }, [filter]);

    // возвращает класс для фильтра и live анимации
    const getCardClass = (status) => {
        let cls = '';
        if (status === 'upcoming') cls = 'cat1';
        else if (status === 'finished') cls = 'cat2';
        else if (status === 'live') cls = 'cat3 live';
        return cls;
    };

    return (
        <section className="tournament-sec-5 space overflow-hidden">
            <div className="container">
                {/* filter buttons */}
                <div className="game-filter-btn style2 filter-menu filter-menu-active text-center mb-6">
                    {['all', 'upcoming', 'live', 'finished'].map(f => (
                        <button
                            key={f}
                            className={`tab-btn th-btn style-border3 ${filter === f ? 'active' : ''}`}
                            onClick={() => setFilter(f)}
                        >
                            <span className="btn-border">{f.toUpperCase()} MATCH</span>
                        </button>
                    ))}
                </div>

                {/* matches */}
                <div className="row gy-4">
                    {matches.map((match) => (
                        <div key={match.id} className="col-lg-6 col-md-12">
                            <div className={`tournament-card style5 style5-2 ${match.status === 'live' ? 'live' : ''}`}>
                                <div
                                    className="tournament-card-shape"
                                    data-bg-src="assets/img/tournament/tournament-card6-bg.png"
                                ></div>
                                <div
                                    className="tournament-card-shape2"
                                    data-bg-src="assets/img/tournament/tournament-card6-2-bg.png"
                                ></div>

                                {/* Team 1 */}
                                <div className="tournament-player-wrap">
                                    <div
                                        className="tournament-card-img"
                                        data-bg-src="assets/img/tournament/logo-bg4.png"
                                    >
                                        <img src={match.team1.img} alt={match.team1.name} />
                                    </div>
                                    <div className="card-title-wrap">
                                        <h6 className="tournament-card-subtitle">Online Game</h6>
                                        <h3 className="tournament-card-title">
                                            <a href="#">{match.team1.name}</a>
                                        </h3>
                                    </div>
                                </div>

                                {/* VS */}
                                <div className="tournament-card-versus">
                                    <img src="assets/img/tournament/game-vs2.svg" alt="vs" />
                                </div>

                                {/* Team 2 */}
                                <div className="tournament-player-wrap style2">
                                    <div
                                        className="tournament-card-img"
                                        data-bg-src="assets/img/tournament/logo-bg4.png"
                                    >
                                        <img src={match.team2.img} alt={match.team2.name} />
                                    </div>
                                    <div className="card-title-wrap">
                                        <h6 className="tournament-card-subtitle">Online Game</h6>
                                        <h3 className="tournament-card-title">
                                            <a href="#">{match.team2.name}</a>
                                        </h3>
                                    </div>
                                </div>

                                {/* Time & Date + Status */}
                                <div className="tournament-card-content">
                                    <div className="tournament-card-details">
                                        <h6 className="tournament-card-time">
                                            {new Date(match.date).toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' })}
                                        </h6>
                                        <p className="tournament-card-date">
                                            {new Date(match.date).toLocaleDateString()}
                                        </p>
                                    </div>
                                    <div className="tournament-card-meta">
                                        <span
                                            className={`tournament-card-tag gradient-border ${match.status === 'live' ? 'live' : ''}`}
                                        >
                                            {match.status.charAt(0).toUpperCase() + match.status.slice(1)}
                                        </span>
                                        <span className="tournament-card-score gradient-border">
                                            {match.score_team1} / {match.score_team2}
                                        </span>
                                    </div>
                                    <div className="btn-wrap">
                                        <a href="tournament-details.html" className="th-btn style-border3">
                                            <span className="btn-border">
                                                WATCH STREAM <i className="fa-solid fa-arrow-right ms-2"></i>
                                            </span>
                                        </a>
                                    </div>
                                </div>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
}

export default Match;