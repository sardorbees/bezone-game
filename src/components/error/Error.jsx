import React from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation, Autoplay } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/navigation';
import logo from '../assets/img/product-img/hero-bg4-1.png'
import '../assets/css/app.min.css';
import '../assets/css/style.css';

function Players() {
    return (
        <div>
            <section class="space error-page" data-bg-src="assets/img/bg/error-bg.png">
                <div class="container">
                    <div class="error-img">
                        <img src="assets/img/theme-img/error.svg" alt="404 image"/>
                    </div>
                    <div class="error-content">
                        <h2 class="error-title text-white">Opp’s that page can’t be found</h2>
                        <p class="error-text">It looks like nothing was found at this location. Maybe try one of the links below or a search?</p>
                        <a href="index.html" class="th-btn">
                            <i class="fas fa-home me-2"></i>
                            Back To Home
                        </a>
                    </div>
                </div>
            </section>
        </div>
    );
}

export default Players;       