// src/components/Tournament.js
import React, { useEffect, useState } from 'react';
import axios from 'axios';
import '../assets/css/app.min.css';
import '../assets/css/style.css';
import '../assets/css/tournament.css';
import vs from '../assets/img/flag/game-vs2.svg';

function Tournament() {
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
        <div>
            <div className="breadcumb-wrapper" data-bg-src="assets/img/bg/breadcumb-bg.jpg">
                <div className="container">
                    <div className="breadcumb-content">
                        <br />
                        <h1 className="breadcumb-title">ТУРНИРНЫЙ МАТЧ</h1>
                    </div>
                </div>
            </div>

            <section className="tournament-sec-v2 space-top space-extra2-bottom" data-bg-src="assets/img/bg/tournament-sec2-bg.png">
                <div className="container">
                    <div className="row justify-content-between">
                        <div className="col-lg-12">
                            <div className="title-area text-center">
                                <span className="sub-title style2"># Игровая трансляция Битва</span>
                                <h2 className="sec-title">
                                    Наши игровые турниры <span className="text-theme">!</span>
                                </h2>
                            </div>
                        </div>

                        <div className="col-lg-12">
                            <div className="tournament-filter-btn2 filter-menu filter-menu-active">
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
                        </div>
                    </div>

                    <div className="row gy-40 filter-active">
                            {matches.map(match => (
                                <div key={match.id} className={`col-12 filter-item ${getCardClass(match.status)}`}>
                                    <div className={`tournament-card style2 ${match.status === 'live' ? 'live' : ''}`}>
                                        {/* Команда 1 */}
                                        <div className="tournament-card-img">
                                            <img src={match.team1.img} alt={match.team1.name} />
                                        </div>

                                        {/* VS */}
                                        <div className="tournament-card-versus">
                                            <img src={vs} alt="vs" />
                                        </div>

                                        {/* Контент */}
                                        <div className="tournament-card-content">
                                            <div className="tournament-card-details">
                                                <div className="card-title-wrap text-md-end">
                                                    <h6 className="tournament-card-subtitle">{match.team1.name}</h6>
                                                    <h3 className="tournament-card-title">
                                                        <a href="#">{match.team1.name}</a>
                                                    </h3>
                                                </div>

                                                <div className="tournament-card-date-wrap">
                                                    <h2 className="tournament-card-time">
                                                        {new Date(match.date).toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' })}
                                                    </h2>
                                                    <p className="tournament-card-date">{new Date(match.date).toLocaleDateString()}</p>
                                                </div>

                                                <div className="card-title-wrap">
                                                    <h6 className="tournament-card-subtitle">{match.team2.name}</h6>
                                                    <h3 className="tournament-card-title">
                                                        <a href="#">{match.team2.name}</a>
                                                    </h3>
                                                </div>
                                            </div>

                                            <div className="tournament-card-meta">
                                                <span className={`tournament-card-tag gradient-border ${match.status === 'live' ? 'live' : ''}`}>
                                                    {match.status.charAt(0).toUpperCase() + match.status.slice(1)}
                                                </span>
                                                <span className="tournament-card-score gradient-border">
                                                    {match.score_team1} / {match.score_team2}
                                                </span>
                                            </div>
                                        </div>

                                        {/* Команда 2 */}
                                        <div className="tournament-card-img">
                                            <img src={match.team2.img} alt={match.team2.name} />
                                        </div>
                                    </div>
                                </div>
                            ))}
                    </div>
                </div>
            </section>
        </div>
    );
}

export default Tournament;