import React from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation, Autoplay } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/navigation';
import logo from '../assets/img/product-img/hero-bg4-1.png'
import '../assets/css/app.min.css';
import '../assets/css/style.css';

function PointTable() {
    return (
        <div>
            <div className="breadcumb-wrapper" data-bg-src="assets/img/bg/breadcumb-bg.jpg">
                <div className="container">
                    <div className="breadcumb-content">
                        <br />
                        <h1 className="breadcumb-title">ТАБЛИЦА БАЛЛОВ</h1>
                    </div>
                </div>
            </div>
            <div className="point-table-area-1 space overflow-hidden" data-bg-src="assets/img/bg/tournament-table-sec1-bg.png">
                <div className="container">
                    <div className="title-area text-center custom-anim-top wow animated" data-wow-duration="1.5s" data-wow-delay="0.2s">
                        <span className="sub-title style2"># Point Table</span>
                        <h2 className="sec-title">
                            Game On, Power Up, Win Big <span className="text-theme">!</span>
                        </h2>
                    </div>
                    <div className="table-responsive">
                        <table className="table tournament-table">
                            <thead>
                                <tr>
                                    <th scope="col">#</th>
                                    <th scope="col">Team Squad</th>
                                    <th scope="col">Matches</th>
                                    <th scope="col">Matches</th>
                                    <th scope="col">Place PTS.</th>
                                    <th scope="col">Finishes</th>
                                    <th scope="col">Total PTS.</th>
                                </tr>
                            </thead>
                            <tbody>
                                <tr>
                                    <th scope="row">1</th>
                                    <td>
                                        <a href="tournament.html">
                                            <img src="assets/img/tournament/1-1.png" alt="img" />PRO Player
                                        </a>
                                    </td>
                                    <td>4</td>
                                    <td>0</td>
                                    <td>21</td>
                                    <td>25</td>
                                    <td>47</td>
                                </tr>
                                <tr>
                                    <th scope="row">2</th>
                                    <td>
                                        <a href="tournament.html">
                                            <img src="assets/img/tournament/1-2.png" alt="img" />The Lion King
                                        </a>
                                    </td>
                                    <td>4</td>
                                    <td>1</td>
                                    <td>29</td>
                                    <td>16</td>
                                    <td>45</td>
                                </tr>
                                <tr>
                                    <th scope="row">3</th>
                                    <td>
                                        <a href="tournament.html">
                                            <img src="assets/img/tournament/1-3.png" alt="img" />The Assassin King
                                        </a>
                                    </td>
                                    <td>4</td>
                                    <td>1</td>
                                    <td>25</td>
                                    <td>20</td>
                                    <td>45</td>
                                </tr>
                                <tr>
                                    <th scope="row">4</th>
                                    <td>
                                        <a href="tournament.html">
                                            <img src="assets/img/tournament/1-4.png" alt="img" />Cyberpunk
                                        </a>
                                    </td>
                                    <td>4</td>
                                    <td>0</td>
                                    <td>32</td>
                                    <td>12</td>
                                    <td>44</td>
                                </tr>
                                <tr>
                                    <th scope="row">5</th>
                                    <td>
                                        <a href="tournament.html">
                                            <img src="assets/img/tournament/1-5.png" alt="img" />Team Gorilla
                                        </a>
                                    </td>
                                    <td>4</td>
                                    <td>1</td>
                                    <td>24</td>
                                    <td>19</td>
                                    <td>43</td>
                                </tr>
                                <tr>
                                    <th scope="row">6</th>
                                    <td>
                                        <a href="tournament.html">
                                            <img src="assets/img/tournament/1-6.png" alt="img" />King Of Badgamer
                                        </a>
                                    </td>
                                    <td>4</td>
                                    <td>0</td>
                                    <td>17</td>
                                    <td>21</td>
                                    <td>38</td>
                                </tr>
                                <tr>
                                    <th scope="row">7</th>
                                    <td>
                                        <a href="tournament.html">
                                            <img src="assets/img/tournament/1-7.png" alt="img" />Team Ninja
                                        </a>
                                    </td>
                                    <td>4</td>
                                    <td>0</td>
                                    <td>18</td>
                                    <td>18</td>
                                    <td>36</td>
                                </tr>
                            </tbody>
                        </table>
                    </div>
                </div>
            </div>
            <div className="container th-container4">
                <div className="cta-area-1">
                    <div className="cta-bg-shape-border">
                        <svg width="1464" height="564" viewBox="0 0 1464 564" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <path d="M1463.5 30V534C1463.5 550.292 1450.29 563.5 1434 563.5H1098H927.426C919.603 563.5 912.099 560.392 906.567 554.86L884.14 532.433C878.42 526.713 870.663 523.5 862.574 523.5H601.426C593.337 523.5 585.58 526.713 579.86 532.433L557.433 554.86C551.901 560.392 544.397 563.5 536.574 563.5H366H30C13.7076 563.5 0.5 550.292 0.5 534V30C0.5 13.7076 13.7076 0.5 30 0.5H366H536.574C544.397 0.5 551.901 3.60802 557.433 9.14034L579.86 31.5668C585.58 37.2866 593.337 40.5 601.426 40.5H862.574C870.663 40.5 878.42 37.2866 884.14 31.5668L906.567 9.14035C912.099 3.60803 919.603 0.5 927.426 0.5H1098H1434C1450.29 0.5 1463.5 13.7076 1463.5 30Z" stroke="url(#paint0_linear_202_547)" />
                            <defs>
                                <linearGradient id="paint0_linear_202_547" x1="0" y1="0" x2="1505.47" y2="412.762" gradientUnits="userSpaceOnUse">
                                    <stop offset="0" stop-color="var(--theme-color)" />
                                    <stop offset="1" stop-color="var(--theme-color2)" />
                                </linearGradient>
                            </defs>
                        </svg>
                    </div>
                    <div class="cta-wrap-bg bg-repeat" data-bg-src="assets/img/bg/jiji-bg.png" data-mask-src="assets/img/shape/cta-bg-shape1.svg">
                        <div class="cta-bg-img">
                            <img src="assets/img/bg/cta-sec1-bg.png" alt="img" />
                        </div>
                        <div class="cta-thumb">
                            <img src="assets/img/normal/cta1-1.png" alt="img" />
                        </div>
                    </div>
                    <div class="cta-wrap">
                        <div class="row">
                            <div class="col-xl-5">
                                <div class="title-area mb-0 custom-anim-left wow animated" data-wow-duration="1.5s" data-wow-delay="0.2s">
                                    <span class="sub-title"># World Best Gaming Site</span>
                                    <h2 class="sec-title">
                                        Join Bame Esports to Become Next <span class="text-theme fw-medium">PRO Gamer Today !</span>
                                    </h2>
                                    <p class="mt-30 mb-30">Esports and gaming facilities requires thoughtful consideration of various elements to create an environment that caters to the needs of gamers and enhances the overall gaming experience.</p>
                                    <a href="contact.html" class="th-btn">
                                        JOIN COMMUNITY <i class="fa-solid fa-arrow-right ms-2"></i>
                                    </a>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div class="client-area-1 overflow-hidden space">
                <div class="container-fluid p-0">
                    <div class="swiper th-slider client-slider1" data-slider-options='{"breakpoints":{"0":{"slidesPerView":2},"400":{"slidesPerView":"2"},"768":{"slidesPerView":"3"},"992":{"slidesPerView":"4"},"1200":{"slidesPerView":"7"},"1300":{"slidesPerView":"9"}}, "spaceBetween": "0", "loop": "true"}'>
                        <div className="swiper-wrapper">
                            <div className="swiper-slide">
                                <a href="#" className="client-card">
                                    <img src="assets/img/client/1-1.png" alt="Image" />
                                </a>
                            </div>
                            <div className="swiper-slide">
                                <a href="#" className="client-card">
                                    <img src="assets/img/client/1-2.png" alt="Image" />
                                </a>
                            </div>
                            <div className="swiper-slide">
                                <a href="#" className="client-card">
                                    <img src="assets/img/client/1-3.png" alt="Image" />
                                </a>
                            </div>
                            <div className="swiper-slide">
                                <a href="#" className="client-card">
                                    <img src="assets/img/client/1-4.png" alt="Image" />
                                </a>
                            </div>
                            <div className="swiper-slide">
                                <a href="#" className="client-card">
                                    <img src="assets/img/client/1-5.png" alt="Image" />
                                </a>
                            </div>
                            <div className="swiper-slide">
                                <a href="#" className="client-card">
                                    <img src="assets/img/client/1-6.png" alt="Image" />
                                </a>
                            </div>
                            <div className="swiper-slide">
                                <a href="#" className="client-card">
                                    <img src="assets/img/client/1-7.png" alt="Image" />
                                </a>
                            </div>
                            <div className="swiper-slide">
                                <a href="#" className="client-card">
                                    <img src="assets/img/client/1-8.png" alt="Image" />
                                </a>
                            </div>
                            <div className="swiper-slide">
                                <a href="#" className="client-card">
                                    <img src="assets/img/client/1-9.png" alt="Image" />
                                </a>
                            </div>
                            <div className="swiper-slide">
                                <a href="#" className="client-card">
                                    <img src="assets/img/client/1-1.png" alt="Image" />
                                </a>
                            </div>
                            <div className="swiper-slide">
                                <a href="#" className="client-card">
                                    <img src="assets/img/client/1-2.png" alt="Image" />
                                </a>
                            </div>
                            <div className="swiper-slide">
                                <a href="#" className="client-card">
                                    <img src="assets/img/client/1-3.png" alt="Image" />
                                </a>
                            </div>
                            <div className="swiper-slide">
                                <a href="#" className="client-card">
                                    <img src="assets/img/client/1-4.png" alt="Image" />
                                </a>
                            </div>
                            <div className="swiper-slide">
                                <a href="#" className="client-card">
                                    <img src="assets/img/client/1-5.png" alt="Image" />
                                </a>
                            </div>
                            <div className="swiper-slide">
                                <a href="#" className="client-card">
                                    <img src="assets/img/client/1-6.png" alt="Image" />
                                </a>
                            </div>
                            <div className="swiper-slide">
                                <a href="#" className="client-card">
                                    <img src="assets/img/client/1-7.png" alt="Image" />
                                </a>
                            </div>
                            <div className="swiper-slide">
                                <a href="#" className="client-card">
                                    <img src="assets/img/client/1-8.png" alt="Image" />
                                </a>
                            </div>
                            <div className="swiper-slide">
                                <a href="#" className="client-card">
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

export default PointTable;