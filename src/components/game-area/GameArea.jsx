import React, { useState, useEffect } from "react";
import axios from "axios";
import "../assets/css/app.min.css";
import "../assets/css/style.css";
import game from "../assets/img/icon/game-award-icon.svg";
import last from '../assets/img/game-icon/section-title-bg.svg'

function GameArea() {
    const [tournaments, setTournaments] = useState([]);

    const fetchTournaments = async () => {
        try {
            const res = await axios.get(
                "http://127.0.0.1:8000/api/best_tournaments/tournaments/"
            );
            setTournaments(res.data);
        } catch (error) {
            console.error("Ошибка загрузки турниров:", error);
        }
    };

    useEffect(() => {
        fetchTournaments(); // первый запрос сразу при загрузке

        const interval = setInterval(() => {
            fetchTournaments();
        }, 1000); // каждые 1 секунду

        return () => clearInterval(interval); // очистка при размонтировании
    }, []);

    return (
        <section className="game-area-3 space overflow-hidden">
            <div className="container">
                <div className="row justify-content-between align-items-center">
                    <div className="col-md-auto">
                        <div className="title-area">
                            <span className="sub-title style3">
                                <span className="sub-title-shape icon-masking">
                                    <img src={last} alt="" />
                                </span>
                                Наша последняя игра
                            </span>
                            <h2 className="sec-title">Лучшие турниры</h2>
                            <div className="shadow-title">Турниры</div>
                        </div>
                    </div>
                    <div className="col-md-auto">
                        <div className="sec-btn text-start">
                            <a href="game.html" className="th-btn">
                                СМОТРЕТЬ ВСЮ ИГРУ <i className="fas fa-arrow-right ms-2"></i>
                            </a>
                        </div>
                    </div>
                </div>

                <div className="row gy-4">
                    {tournaments.map((tournament) => (
                        <div className="col-lg-3 col-md-6" key={tournament.id}>
                            <div className="game-card style4">
                                <div
                                    className="game-card-img"
                                    data-mask-src="assets/img/game/game_card4_img-shape.jpg"
                                >
                                    <a href={`tournament/${tournament.id}`}>
                                        <img
                                            src={tournament.image}
                                            alt={tournament.name}
                                            className="w-100"
                                        />
                                    </a>
                                </div>
                                <div className="game-card-details">
                                    <h3 className="box-title">
                                        <a href={`tournament/${tournament.id}`}>
                                            {tournament.name}
                                        </a>
                                    </h3>
                                    <p className="game-content">
                                        <img src={game} alt="Icon" /> {tournament.description}
                                    </p>
                                </div>
                            </div>
                        </div>
                    ))}

                    {tournaments.length === 0 && (
                        <p className="text-center">Нет турниров для отображения</p>
                    )}
                </div>
            </div>
        </section>
    );
}

export default GameArea;