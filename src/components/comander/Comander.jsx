import React, { useEffect, useState } from "react";
import axios from "axios";
import { FaStar } from "react-icons/fa";
import '../assets/css/style.css'
import win from '../assets/img/game-icon/commando-icon1-1.svg'
import draw from '../assets/img/game-icon/commando-icon1-2.svg'
import lase from '../assets/img/game-icon/commando-icon1-3.svg'

function Comander() {
    const [players, setPlayers] = useState([]);

    // Функция загрузки игроков
    const fetchPlayers = () => {
        axios
            .get("http://127.0.0.1:8000/api/player/players/")
            .then((res) => setPlayers(res.data))
            .catch((err) => console.error("Ошибка загрузки игроков:", err));
    };

    // Загружаем при первом рендере + автообновление каждую секунду
    useEffect(() => {
        fetchPlayers(); // первая загрузка сразу

        const interval = setInterval(() => {
            fetchPlayers();
        }, 1000); // обновление каждую секунду

        return () => clearInterval(interval); // очищаем таймер при размонтировании
    }, []);

    return (
        <section className="commando-area-1 space">
            <div className="container">
                <div className="row justify-content-center">
                    <div className="col-xl-7">
                        <div className="title-area text-center">
                            <span className="sub-title style3">
                                <span className="sub-title-shape icon-masking">
                                </span>
                                Наш Командир
                            </span>
                            <h2 className="sec-title">Выберите своего любимого командира</h2>
                            <div className="shadow-title">Командир</div>
                            <p>
                                Геймеры могут присоединиться к местным игровым встречам, принять
                                участие в игровых мероприятиях или познакомиться с
                                единомышленниками
                            </p>
                        </div>
                    </div>
                </div>

                <div className="row gy-30 justify-content-center">
                    {players.map((player) => (
                        <div class="col-xl-4 col-lg-6" key={player.id}>
                            <div class="commando-card">
                                <div class="commando-card-bg-shape" data-bg-src="assets/img/commando/commando-card-bg.png"></div>
                                <div class="commando-card-content">
                                    <div class="commando-thumb">
                                        <img
                                            src={player.image}
                                            alt={player.nickname}
                                            className="img-one"
                                        />
                                    </div>
                                    <div class="commando-card-details">
                                        <h4 class="commando-card-title">{player.name}</h4>
                                        <div class="star-ratting">
                                            {[1, 2, 3, 4, 5].map((star) => (
                                                <FaStar
                                                    key={star}
                                                    className={
                                                        star <= player.stars
                                                            ? "text-yellow-500"
                                                            : "text-gray-400"
                                                    }
                                                />
                                            ))}
                                        </div>
                                        <p class="commando-card-text"><span style={{fontSize: '15px'}}>Позиция_Игрока</span>: <span style={{fontSize: '15px'}}>{player.player_position}</span></p>
                                        <p class="commando-card-text">{player.nickname}</p>
                                        <p class="commando-card-text">{player.nickname}</p>
                                    </div>
                                </div>
                                <ul class="commando-list-wrap">
                                    <li class="commando-single-list">
                                        <div class="icon">
                                            <img src={win} alt="icon" className="icon-one" />
                                        </div>
                                        <div class="text">{player.wins}</div>
                                    </li>
                                    <li class="commando-single-list">
                                        <div class="icon">
                                            <img src={draw} alt="icon" className="icon-one" />
                                        </div>
                                        <div class="text">{player.draws}</div>
                                    </li>
                                    <li class="commando-single-list">
                                        <div class="icon">
                                            <img src={lase} alt="icon" className="icon-one" />
                                        </div>
                                        <div class="text">{player.losses}</div>
                                    </li>
                                </ul>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
}

export default Comander;