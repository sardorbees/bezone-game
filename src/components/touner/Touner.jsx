import React, { useEffect, useState } from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation, Autoplay } from 'swiper/modules';
import axios from 'axios';
import vs from '../assets/img/flag/game-vs2.svg';

import 'swiper/css';
import 'swiper/css/navigation';
import logo from '../assets/img/product-img/hero-bg4-1.png';
import hero from '../assets/img/product-img/hero-4-1.png';

import { FaAngleLeft } from "react-icons/fa6";
import { FaChevronRight } from "react-icons/fa";
import { FaArrowRight } from "react-icons/fa";

import '../assets/css/app.min.css';
import '../assets/css/style.css';

function Touner() {
    const [matches, setMatches] = useState([]);

    useEffect(() => {
        // функция для получения матчей
        const fetchMatches = () => {
            axios.get('http://127.0.0.1:8000/api/turnir/matches/')
                .then(res => setMatches(res.data))
                .catch(err => console.log(err));
        };

        fetchMatches();

        const interval = setInterval(() => {
            fetchMatches();
        }, 1000);

        return () => clearInterval(interval);
    }, []);

    return (
        <div className="th-hero-wrapper hero-4" id="hero">
            <div className="container th-container5">
                <div className="hero-style4 text-center">
                    <h1 className="hero-title custom-anim-top wow" data-wow-duration="1.2s" data-wow-delay="0.2s">Skarlet</h1>
                    <div className="hero-thumb4-1 custom-anim-top wow" data-wow-duration="1.2s" data-wow-delay="0.2s">
                        <div className="character">
                            <img src={hero} alt="hero" />
                        </div>
                    </div>
                </div>
            </div>

            <div className="container">
                <div className="row justify-content-center">
                    <div className="col-lg-11">
                        <div className="slider-area hero-game-slider4-1">
                            <Swiper
                                modules={[Navigation, Autoplay]}
                                loop={true}
                                autoplay={{ delay: 15000, disableOnInteraction: false }}
                                speed={800}
                                navigation={{ nextEl: '.slider-next', prevEl: '.slider-prev' }}
                                slidesPerView={1}
                                className="th-slider"
                            >
                                {matches.map(match => (
                                    <SwiperSlide key={match.id}>
                                        <div className="tournament-card style5">
                                            <div className="tournament-card-shape" data-bg-src={logo}></div>

                                            <div className="tournament-player-wrap">
                                                <img src={match.team1.img} alt={match.team1.name} className='gfggfaa' />
                                                <div className="card-title-wrap">
                                                    <h6 className="tournament-card-subtitle">Online Game</h6>
                                                    <h3 className="tournament-card-title" style={{ color: 'white' }}>
                                                        {match.team1.name}
                                                    </h3>
                                                </div>
                                            </div>

                                            <div className="tournament-card-versus">
                                                <img src={vs} alt="vs" />
                                            </div>

                                            <div className="tournament-player-wrap style2">
                                                <img src={match.team2.img} alt={match.team2.name} className='gfggfaa' />
                                                <div className="card-title-wrap">
                                                    <h6 className="tournament-card-subtitle">Online Game</h6>
                                                    <h3 className="tournament-card-title" style={{ color: 'white' }}>
                                                        {match.team2.name}
                                                    </h3>
                                                </div>
                                            </div>

                                            <div className="tournament-card-content">
                                                <div className="tournament-card-details">
                                                    <h6 className="tournament-card-time">{match.match_time}</h6>
                                                    <p className="tournament-card-date">{match.match_date}</p>
                                                </div>
                                            </div>
                                        </div>
                                    </SwiperSlide>
                                ))}
                            </Swiper>

                            <button className="slider-arrow style3 slider-prev">
                                <FaAngleLeft />
                            </button>
                            <button className="slider-arrow style3 slider-next">
                                <FaChevronRight />
                            </button>
                        </div>

                        <div className="btn-wrap mt-40 justify-content-center">
                            <a href="/tournament" className="th-btn">
                                <span className='play'>СМОТРЕТЬ ИГРУ</span> <FaArrowRight />
                            </a>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Touner;