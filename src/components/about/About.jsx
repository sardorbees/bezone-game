import React from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation, Autoplay } from 'swiper/modules';

import 'swiper/css';
import 'swiper/css/navigation';
import logo from '../assets/img/product-img/hero-bg4-1.png'
import '../assets/css/app.min.css';
import '../assets/css/style.css';
import about from '../assets/img/game-icon/about2-1.png'
import { Mousewheel } from "swiper/modules";
import "swiper/css";
import "swiper/css/mousewheel";

function About() {
    const features = [
        {
            id: 1,
            icon: "assets/img/icon/about_feature_2_1.svg",
            title: "Live Streaming",
            text: "Integration with popular streaming platforms for live coverage of esports.",
        },
        {
            id: 2,
            icon: "assets/img/icon/about_feature_2_2.svg",
            title: "Gaming News",
            text: "Keep users informed about the gaming industry with news articles.",
        },
        {
            id: 3,
            icon: "assets/img/icon/about_feature_2_3.svg",
            title: "Great Tournament",
            text: "Display a calendar of upcoming tournament with dates, times, and game.",
        },
        {
            id: 4,
            icon: "assets/img/icon/about_feature_2_1.svg",
            title: "Live Streaming",
            text: "Integration with popular streaming platforms for live coverage of esports.",
        },
        {
            id: 5,
            icon: "assets/img/icon/about_feature_2_2.svg",
            title: "Gaming News",
            text: "Keep users informed about the gaming industry with news articles.",
        },
        {
            id: 6,
            icon: "assets/img/icon/about_feature_2_3.svg",
            title: "Great Tournament",
            text: "Display a calendar of upcoming tournament with dates, times, and game.",
        },
    ];
    return (
        <div>
            <div class="breadcumb-wrapper" data-bg-src="assets/img/bg/breadcumb-bg.jpg">
                <div class="container">
                    <div class="breadcumb-content">
                        <br />
                        <h1 class="breadcumb-title">О нас</h1>
                    </div>
                </div>
            </div>
            <div className="overflow-hidden space relative z-[1]">
                <div className="gr-bg1 overlay"></div>
                <div className="container">
                    <div className="title-area text-center">
                        <span className="sub-title style2">
                            # Добро пожаловать на сайт киберспорта и игры
                        </span>
                        <h2 className="sec-title text-white">
                            Создание легенд в игровой вселенной
                        </h2>
                    </div>

                    <div className="row">
                        {/* Левое изображение */}
                        <div className="col-xl-7 mb-50 mb-xl-0">
                            <div className="img-box2">
                                <div className="img1">
                                    <img src={about} alt="About" />
                                </div>
                            </div>
                        </div>

                        {/* Вертикальный Swiper */}
                        <div className="col-xl-5">
                            <div className="about-feature-wrap">
                                <Swiper
                                    direction="vertical"
                                    slidesPerView={3}
                                    spaceBetween={20}
                                    mousewheel={true}
                                    modules={[Mousewheel]}
                                    className="about-feature-slider1"
                                >
                                    {features.map((item) => (
                                        <SwiperSlide key={item.id}>
                                            <div className="about-feature flex gap-4 items-center p-4 bg-white rounded-xl shadow">
                                                <div className="about-feature-icon w-14 h-14">
                                                    <img src={item.icon} alt={item.title} />
                                                </div>
                                                <div className="about-feature-content">
                                                    <h3 className="about-feature-title font-bold text-lg">
                                                        {item.title}
                                                    </h3>
                                                    <p className="about-feature-text text-gray-600 text-sm">
                                                        {item.text}
                                                    </p>
                                                </div>
                                            </div>
                                        </SwiperSlide>
                                    ))}
                                </Swiper>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div class="space-bottom counter-area-1">
                <div class="container">
                    <div class="counter-card-wrap">
                        <div class="counter-card">
                            <div class="media-body">
                                <h2 class="box-number">
                                    <span class="counter-number">1.6</span>
                                    K<span class="text-theme fw-medium">+</span>
                                </h2>
                                <p class="box-text">Наши ежедневные пользователи игр</p>
                            </div>
                        </div>
                        <div class="counter-card">
                            <div class="media-body">
                                <h2 class="box-number">
                                    <span class="counter-number">50</span>
                                    M
                                </h2>
                                <p class="box-text">Загрузки игр</p>
                            </div>
                        </div>
                        <div class="counter-card">
                            <div class="media-body">
                                <h2 class="box-number">
                                    <span class="counter-number">200</span>
                                    <span class="text-theme fw-medium">+</span>
                                </h2>
                                <p class="box-text">Игра запущена</p>
                            </div>
                        </div>
                        <div class="counter-card">
                            <div class="media-body">
                                <h2 class="box-number">
                                    <span class="counter-number">3.6</span>
                                    M
                                </h2>
                                <p class="box-text">Игровой проект завершен</p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <section class="tournament-sec-v3 space bg-black3" data-mask-src="assets/img/bg/tournament-sec3-bg.png">
                <div class="container">
                    <div class="row justify-content-between">
                        <div class="col-lg-12">
                            <div class="title-area text-center custom-anim-top wow animated" data-wow-duration="1.5s" data-wow-delay="0.2s">
                                <span class="sub-title style2"># History of Bame Trophy</span>
                                <h2 class="sec-title">
                                    Our All Tournaments History <span class="text-theme">!</span>
                                </h2>
                            </div>
                        </div>
                    </div>
                    <div class="row gy-30">
                        <div class="col-12">
                            <div class="tournament-card style3">
                                <div class="tournament-card-content">
                                    <div class="tournament-card-details">
                                        <p class="tournament-year">2015-2016</p>
                                        <img src="assets/img/tournament/cup.png" alt="img" />
                                        <p class="tournament-tag">CHAMPION CUP</p>
                                    </div>
                                </div>
                                <div class="tournament-card-inner">
                                    <div class="tournament-card-img">
                                        <img src="assets/img/tournament/1-1.png" alt="tournament image" />
                                        <div class="card-title-wrap">
                                            <h3 class="tournament-card-title">
                                                <a href="tournament-details.html">Pro Player</a>
                                            </h3>
                                            <h6 class="tournament-card-subtitle">Runner Up Team</h6>
                                        </div>
                                    </div>
                                    <div class="tournament-card-img">
                                        <div class="card-title-wrap text-md-end">
                                            <h3 class="tournament-card-title">
                                                <a href="tournament-details.html">The Lion King</a>
                                            </h3>
                                            <h6 class="tournament-card-subtitle">Champion Team</h6>
                                        </div>
                                        <img src="assets/img/tournament/1-2.png" alt="tournament image" />
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div class="col-12">
                            <div class="tournament-card style3">
                                <div class="tournament-card-content">
                                    <div class="tournament-card-details">
                                        <p class="tournament-year">2017-2018</p>
                                        <img src="assets/img/tournament/cup.png" alt="img" />
                                        <p class="tournament-tag">CHAMPION CUP</p>
                                    </div>
                                </div>
                                <div class="tournament-card-inner">
                                    <div class="tournament-card-img">
                                        <img src="assets/img/tournament/1-3.png" alt="tournament image" />
                                        <div class="card-title-wrap">
                                            <h3 class="tournament-card-title">
                                                <a href="tournament-details.html">Assassin Team</a>
                                            </h3>
                                            <h6 class="tournament-card-subtitle">Champion Team</h6>
                                        </div>
                                    </div>
                                    <div class="tournament-card-img">
                                        <div class="card-title-wrap text-md-end">
                                            <h3 class="tournament-card-title">
                                                <a href="tournament-details.html">Cyberpunk King</a>
                                            </h3>
                                            <h6 class="tournament-card-subtitle">Runner Up Team</h6>
                                        </div>
                                        <img src="assets/img/tournament/1-4.png" alt="tournament image" />
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div class="col-12">
                            <div class="tournament-card style3">
                                <div class="tournament-card-content">
                                    <div class="tournament-card-details">
                                        <p class="tournament-year">2019-2020</p>
                                        <img src="assets/img/tournament/cup.png" alt="img" />
                                        <p class="tournament-tag">CHAMPION CUP</p>
                                    </div>
                                </div>
                                <div class="tournament-card-inner">
                                    <div class="tournament-card-img">
                                        <img src="assets/img/tournament/1-12.png" alt="tournament image" />
                                        <div class="card-title-wrap">
                                            <h3 class="tournament-card-title">
                                                <a href="tournament-details.html">Cools Gamer</a>
                                            </h3>
                                            <h6 class="tournament-card-subtitle">Runner Up Team</h6>
                                        </div>
                                    </div>
                                    <div class="tournament-card-img">
                                        <div class="card-title-wrap text-md-end">
                                            <h3 class="tournament-card-title">
                                                <a href="tournament-details.html">X-XBO Ninja</a>
                                            </h3>
                                            <h6 class="tournament-card-subtitle">Champion Team</h6>
                                        </div>
                                        <img src="assets/img/tournament/1-7.png" alt="tournament image" />
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
            <div class="about-sec-3 overflow-hidden space-top position-relative z-index-common" data-bg-src="assets/img/bg/about-bg2.png">
                <div class="gr-bg1 overlay"></div>
                <div class="container">
                    <div class="about-wrap3">
                        <div class="row gy-40">
                            <div class="col-xl-6">
                                <div class="title-area custom-anim-left wow animated" data-wow-duration="1.5s" data-wow-delay="0.2s">
                                    <span class="sub-title"># Why Choose Our Gaming Site</span>
                                    <h2 class="sec-title">
                                        Our Values Inspire And Drive Our Every Move <span class="text-theme">!</span>
                                    </h2>
                                    <div class="checklist">
                                        <ul>
                                            <li>
                                                <i class="fas fa-circle-check"></i>
                                                Duis scelerisque nunc ac massa efficitur pulvinar.
                                            </li>
                                            <li>
                                                <i class="fas fa-circle-check"></i>
                                                Vivamus eget nisi scelerisque, iaculis risus vel, molestie risus.
                                            </li>
                                            <li>
                                                <i class="fas fa-circle-check"></i>
                                                Aliquam nec sapien vitae dui dapibus blandit.
                                            </li>
                                            <li>
                                                <i class="fas fa-circle-check"></i>
                                                Sed non ipsum ut mauris dictum ullamcorper ac at nibh.
                                            </li>
                                        </ul>
                                    </div>
                                </div>
                                <div class="img-box3">
                                    <div class="img1">
                                        <img src="assets/img/normal/about3-2.png" alt="About" />
                                    </div>
                                </div>
                            </div>
                            <div class="col-xl-6">
                                <div class="img-box3">
                                    <div class="img1">
                                        <img src="assets/img/normal/about3-1.png" alt="About" />
                                    </div>
                                </div>
                                <div class="about-content custom-anim-left wow animated" data-wow-duration="1.5s" data-wow-delay="0.2s">
                                    <p>Gamers can join local gaming meetups, participate in gaming events, or connect with like-minded individuals through online forums and social media groups. Engaging with the community helps build connections and creates opportunities for collaborative gaming experiences.</p>
                                    <p class="mb-0">Storytelling is a crucial element in modern video game design, creating immersive and engaging experiences. Games with compelling narratives often resonate more with players, adding depth to the overall gaming experience.</p>
                                </div>
                            </div>
                        </div>
                        <div class="about-tag">
                            <div class="about-experience-tag">
                                <span class="circle-title-anime">24 YEARS EXPERIENCE OF GAMING</span>
                            </div>
                            <div class="about-tag-icon">
                                <img src="assets/img/logo-icon.svg" alt="img" />
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <section class="team-sec-1 space-top">
                <div class="team-shape1-1 shape-mockup" data-top="0" data-right="0">
                    <img src="assets/img/bg/team-sec1-bg.png" alt="img" />
                </div>
                <div class="container th-container3">
                    <div class="row justify-content-center">
                        <div class="col-xl-6 col-lg-7 col-md-8">
                            <div class="title-area text-center custom-anim-top wow animated" data-wow-duration="1.5s" data-wow-delay="0.2s">
                                <span class="sub-title"># Top World Class Gamer</span>
                                <h2 class="sec-title">Let’s See Our Pro Players</h2>
                            </div>
                        </div>
                    </div>
                    <div class="slider-area team-slider1">
                        <div class="swiper th-slider has-shadow" id="teamSlider1" data-slider-options='{"breakpoints":{"0":{"slidesPerView":1},"576":{"slidesPerView":"2"},"768":{"slidesPerView":"3"},"992":{"slidesPerView":"4"},"1200":{"slidesPerView":"5"}}}'>
                            <div class="swiper-wrapper">
                                <div class="swiper-slide">
                                    <div class="th-team team-card">
                                        <div class="team-card-corner team-card-corner1"></div>
                                        <div class="team-card-corner team-card-corner2"></div>
                                        <div class="team-card-corner team-card-corner3"></div>
                                        <div class="team-card-corner team-card-corner4"></div>
                                        <div class="img-wrap">
                                            <div class="team-img">
                                                <img src="assets/img/team/1-1.png" alt="Team" />
                                            </div>
                                            <img class="game-logo" src="assets/img/team/game-logo1-1.png" alt="Team" />
                                        </div>
                                        <div class="team-card-content">
                                            <h3 class="box-title">
                                                <a href="team-details.html">Max Alexis</a>
                                            </h3>
                                        </div>
                                    </div>
                                </div>
                                <div class="swiper-slide">
                                    <div class="th-team team-card">
                                        <div class="team-card-corner team-card-corner1"></div>
                                        <div class="team-card-corner team-card-corner2"></div>
                                        <div class="team-card-corner team-card-corner3"></div>
                                        <div class="team-card-corner team-card-corner4"></div>
                                        <div class="img-wrap">
                                            <div class="team-img">
                                                <img src="assets/img/team/1-2.png" alt="Team" />
                                            </div>
                                            <img class="game-logo" src="assets/img/team/game-logo1-2.png" alt="Team" />
                                        </div>
                                        <div class="team-card-content">
                                            <h3 class="box-title">
                                                <a href="team-details.html">Wilium Lili</a>
                                            </h3>
                                        </div>
                                    </div>
                                </div>
                                <div class="swiper-slide">
                                    <div class="th-team team-card">
                                        <div class="team-card-corner team-card-corner1"></div>
                                        <div class="team-card-corner team-card-corner2"></div>
                                        <div class="team-card-corner team-card-corner3"></div>
                                        <div class="team-card-corner team-card-corner4"></div>
                                        <div class="img-wrap">
                                            <div class="team-img">
                                                <img src="assets/img/team/1-3.png" alt="Team" />
                                            </div>
                                            <img class="game-logo" src="assets/img/team/game-logo1-3.png" alt="Team" />
                                        </div>
                                        <div class="team-card-content">
                                            <h3 class="box-title">
                                                <a href="team-details.html">Mac Marsh</a>
                                            </h3>
                                        </div>
                                    </div>
                                </div>
                                <div class="swiper-slide">
                                    <div class="th-team team-card">
                                        <div class="team-card-corner team-card-corner1"></div>
                                        <div class="team-card-corner team-card-corner2"></div>
                                        <div class="team-card-corner team-card-corner3"></div>
                                        <div class="team-card-corner team-card-corner4"></div>
                                        <div class="img-wrap">
                                            <div class="team-img">
                                                <img src="assets/img/team/1-4.png" alt="Team" />
                                            </div>
                                            <img class="game-logo" src="assets/img/team/game-logo1-4.png" alt="Team" />
                                        </div>
                                        <div class="team-card-content">
                                            <h3 class="box-title">
                                                <a href="team-details.html">Eva Raina</a>
                                            </h3>
                                        </div>
                                    </div>
                                </div>
                                <div class="swiper-slide">
                                    <div class="th-team team-card">
                                        <div class="team-card-corner team-card-corner1"></div>
                                        <div class="team-card-corner team-card-corner2"></div>
                                        <div class="team-card-corner team-card-corner3"></div>
                                        <div class="team-card-corner team-card-corner4"></div>
                                        <div class="img-wrap">
                                            <div class="team-img">
                                                <img src="assets/img/team/1-5.png" alt="Team" />
                                            </div>
                                            <img class="game-logo" src="assets/img/team/game-logo1-5.png" alt="Team" />
                                        </div>
                                        <div class="team-card-content">
                                            <h3 class="box-title">
                                                <a href="team-details.html">Robin Cloth</a>
                                            </h3>
                                        </div>
                                    </div>
                                </div>
                                <div class="swiper-slide">
                                    <div class="th-team team-card">
                                        <div class="team-card-corner team-card-corner1"></div>
                                        <div class="team-card-corner team-card-corner2"></div>
                                        <div class="team-card-corner team-card-corner3"></div>
                                        <div class="team-card-corner team-card-corner4"></div>
                                        <div class="img-wrap">
                                            <div class="team-img">
                                                <img src="assets/img/team/1-1.png" alt="Team" />
                                            </div>
                                            <img class="game-logo" src="assets/img/team/game-logo1-1.png" alt="Team" />
                                        </div>
                                        <div class="team-card-content">
                                            <h3 class="box-title">
                                                <a href="team-details.html">Max Alexis</a>
                                            </h3>
                                        </div>
                                    </div>
                                </div>
                                <div class="swiper-slide">
                                    <div class="th-team team-card">
                                        <div class="team-card-corner team-card-corner1"></div>
                                        <div class="team-card-corner team-card-corner2"></div>
                                        <div class="team-card-corner team-card-corner3"></div>
                                        <div class="team-card-corner team-card-corner4"></div>
                                        <div class="img-wrap">
                                            <div class="team-img">
                                                <img src="assets/img/team/1-2.png" alt="Team" />
                                            </div>
                                            <img class="game-logo" src="assets/img/team/game-logo1-2.png" alt="Team" />
                                        </div>
                                        <div class="team-card-content">
                                            <h3 class="box-title">
                                                <a href="team-details.html">Wilium Lili</a>
                                            </h3>
                                        </div>
                                    </div>
                                </div>
                                <div class="swiper-slide">
                                    <div class="th-team team-card">
                                        <div class="team-card-corner team-card-corner1"></div>
                                        <div class="team-card-corner team-card-corner2"></div>
                                        <div class="team-card-corner team-card-corner3"></div>
                                        <div class="team-card-corner team-card-corner4"></div>
                                        <div class="img-wrap">
                                            <div class="team-img">
                                                <img src="assets/img/team/1-3.png" alt="Team" />
                                            </div>
                                            <img class="game-logo" src="assets/img/team/game-logo1-3.png" alt="Team" />
                                        </div>
                                        <div class="team-card-content">
                                            <h3 class="box-title">
                                                <a href="team-details.html">Mac Marsh</a>
                                            </h3>
                                        </div>
                                    </div>
                                </div>
                                <div class="swiper-slide">
                                    <div class="th-team team-card">
                                        <div class="team-card-corner team-card-corner1"></div>
                                        <div class="team-card-corner team-card-corner2"></div>
                                        <div class="team-card-corner team-card-corner3"></div>
                                        <div class="team-card-corner team-card-corner4"></div>
                                        <div class="img-wrap">
                                            <div class="team-img">
                                                <img src="assets/img/team/1-4.png" alt="Team" />
                                            </div>
                                            <img class="game-logo" src="assets/img/team/game-logo1-4.png" alt="Team" />
                                        </div>
                                        <div class="team-card-content">
                                            <h3 class="box-title">
                                                <a href="team-details.html">Eva Raina</a>
                                            </h3>
                                        </div>
                                    </div>
                                </div>
                                <div class="swiper-slide">
                                    <div class="th-team team-card">
                                        <div class="team-card-corner team-card-corner1"></div>
                                        <div class="team-card-corner team-card-corner2"></div>
                                        <div class="team-card-corner team-card-corner3"></div>
                                        <div class="team-card-corner team-card-corner4"></div>
                                        <div class="img-wrap">
                                            <div class="team-img">
                                                <img src="assets/img/team/1-5.png" alt="Team" />
                                            </div>
                                            <img class="game-logo" src="assets/img/team/game-logo1-5.png" alt="Team" />
                                        </div>
                                        <div class="team-card-content">
                                            <h3 class="box-title">
                                                <a href="team-details.html">Robin Cloth</a>
                                            </h3>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <button data-slider-prev="#teamSlider1" class="slider-arrow slider-prev">
                            <i class="far fa-arrow-left"></i>
                        </button>
                        <button data-slider-next="#teamSlider1" class="slider-arrow slider-next">
                            <i class="far fa-arrow-right"></i>
                        </button>
                    </div>
                </div>
            </section>
            <div class="client-area-1 overflow-hidden space">
                <div class="container-fluid p-0">
                    <div class="swiper th-slider client-slider1" data-slider-options='{"breakpoints":{"0":{"slidesPerView":2},"400":{"slidesPerView":"2"},"768":{"slidesPerView":"3"},"992":{"slidesPerView":"4"},"1200":{"slidesPerView":"7"},"1300":{"slidesPerView":"9"}}, "spaceBetween": "0", "loop": "true"}'>
                        <div class="swiper-wrapper">
                            <div class="swiper-slide">
                                <a href="#" class="client-card">
                                    <img src="assets/img/client/1-1.png" alt="Image" />
                                </a>
                            </div>
                            <div class="swiper-slide">
                                <a href="#" class="client-card">
                                    <img src="assets/img/client/1-2.png" alt="Image" />
                                </a>
                            </div>
                            <div class="swiper-slide">
                                <a href="#" class="client-card">
                                    <img src="assets/img/client/1-3.png" alt="Image" />
                                </a>
                            </div>
                            <div class="swiper-slide">
                                <a href="#" class="client-card">
                                    <img src="assets/img/client/1-4.png" alt="Image" />
                                </a>
                            </div>
                            <div class="swiper-slide">
                                <a href="#" class="client-card">
                                    <img src="assets/img/client/1-5.png" alt="Image" />
                                </a>
                            </div>
                            <div class="swiper-slide">
                                <a href="#" class="client-card">
                                    <img src="assets/img/client/1-6.png" alt="Image" />
                                </a>
                            </div>
                            <div class="swiper-slide">
                                <a href="#" class="client-card">
                                    <img src="assets/img/client/1-7.png" alt="Image" />
                                </a>
                            </div>
                            <div class="swiper-slide">
                                <a href="#" class="client-card">
                                    <img src="assets/img/client/1-8.png" alt="Image" />
                                </a>
                            </div>
                            <div class="swiper-slide">
                                <a href="#" class="client-card">
                                    <img src="assets/img/client/1-9.png" alt="Image" />
                                </a>
                            </div>
                            <div class="swiper-slide">
                                <a href="#" class="client-card">
                                    <img src="assets/img/client/1-1.png" alt="Image" />
                                </a>
                            </div>
                            <div class="swiper-slide">
                                <a href="#" class="client-card">
                                    <img src="assets/img/client/1-2.png" alt="Image" />
                                </a>
                            </div>
                            <div class="swiper-slide">
                                <a href="#" class="client-card">
                                    <img src="assets/img/client/1-3.png" alt="Image" />
                                </a>
                            </div>
                            <div class="swiper-slide">
                                <a href="#" class="client-card">
                                    <img src="assets/img/client/1-4.png" alt="Image" />
                                </a>
                            </div>
                            <div class="swiper-slide">
                                <a href="#" class="client-card">
                                    <img src="assets/img/client/1-5.png" alt="Image" />
                                </a>
                            </div>
                            <div class="swiper-slide">
                                <a href="#" class="client-card">
                                    <img src="assets/img/client/1-6.png" alt="Image" />
                                </a>
                            </div>
                            <div class="swiper-slide">
                                <a href="#" class="client-card">
                                    <img src="assets/img/client/1-7.png" alt="Image" />
                                </a>
                            </div>
                            <div class="swiper-slide">
                                <a href="#" class="client-card">
                                    <img src="assets/img/client/1-8.png" alt="Image" />
                                </a>
                            </div>
                            <div class="swiper-slide">
                                <a href="#" class="client-card">
                                    <img src="assets/img/client/1-9.png" alt="Image" />
                                </a>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default About;     