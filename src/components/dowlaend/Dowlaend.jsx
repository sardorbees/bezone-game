import React from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation, Autoplay } from 'swiper/modules';

import 'swiper/css';
import 'swiper/css/navigation';
import logo from '../assets/img/product-img/hero-bg4-1.png'

import '../assets/css/app.min.css';
import '../assets/css/style.css';

function Dowlaend() {
    return (
        <section class="cta-area-5" data-bg-src="assets/img/bg/cta-wrap5-bg-shape.png">
            <div class="container">
                <div class="row">
                    <div class="col-lg-5">
                        <div class="cta-wrap5 space">
                            <div class="title-area mb-20">
                                <span class="sub-title style3">
                                    <span class="sub-title-shape icon-masking">
                                        <span class="mask-icon" data-mask-src="assets/img/bg/section-title-bg.svg"></span>
                                    </span>
                                    Download Game
                                </span>
                                <h2 class="sec-title">10000+ Games Ready To Download For You</h2>
                                <div class="shadow-title">Download</div>
                            </div>
                            <p class="mb-35">Emerging trends in the esports industry include the growth of mobile esports, the integration of virtual reality in gaming experiences, and the increasing involvement of traditional sports organizations in esports partnerships.</p>
                            <div class="btn-wrap">
                                <a href="#">
                                    <img src="assets/img/normal/footer-apple-btn2.png" alt="img"/>
                                </a>
                                <a href="#">
                                    <img src="assets/img/normal/footer-playstore-btn2.png" alt="img"/>
                                </a>
                            </div>
                        </div>
                    </div>
                    <div class="col-lg-7 align-self-end">
                        <div class="cta-thumb5">
                            <img src="assets/img/normal/cta5-1.png" alt="img"/>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}

export default Dowlaend;