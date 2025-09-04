import React from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation, Autoplay } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/navigation';
import logo from '../assets/img/product-img/hero-bg4-1.png'
import '../assets/css/app.min.css';
import '../assets/css/style.css';

function Gallery() {
    return (
        <div>
            <div class="breadcumb-wrapper" data-bg-src="assets/img/bg/breadcumb-bg.jpg">
                <div class="container">
                    <div class="breadcumb-content">
                        <br />
                        <h1 class="breadcumb-title">Нашы Галерея</h1>
                    </div>
                </div>
            </div>
            <div class="space">
                <div class="container">
                    <div class="row gy-4 masonary-active">
                        <div class="col-xl-8 col-md-6 filter-item">
                            <div class="gallery-card">
                                <div class="box-img">
                                    <img src="assets/img/gallery/gallery_1_1.jpg" alt="gallery image" />
                                    <a href="assets/img/gallery/gallery_1_1.jpg" class="play-btn popup-image style3">
                                        <i class="fa-solid fa-arrow-up-right"></i>
                                    </a>
                                </div>
                            </div>
                        </div>
                        <div class="col-xl-4 col-md-6 filter-item">
                            <div class="gallery-card">
                                <div class="box-img">
                                    <img src="assets/img/gallery/gallery_1_2.jpg" alt="gallery image" />
                                    <a href="assets/img/gallery/gallery_1_2.jpg" class="play-btn popup-image style3">
                                        <i class="fa-solid fa-arrow-up-right"></i>
                                    </a>
                                </div>
                            </div>
                        </div>
                        <div class="col-xl-4 col-md-6 filter-item">
                            <div class="gallery-card">
                                <div class="box-img">
                                    <img src="assets/img/gallery/gallery_1_3.jpg" alt="gallery image" />
                                    <a href="assets/img/gallery/gallery_1_3.jpg" class="play-btn popup-image style3">
                                        <i class="fa-solid fa-arrow-up-right"></i>
                                    </a>
                                </div>
                            </div>
                        </div>
                        <div class="col-xl-4 col-md-6 filter-item">
                            <div class="gallery-card">
                                <div class="box-img">
                                    <img src="assets/img/gallery/gallery_1_4.jpg" alt="gallery image" />
                                    <a href="assets/img/gallery/gallery_1_4.jpg" class="play-btn popup-image style3">
                                        <i class="fa-solid fa-arrow-up-right"></i>
                                    </a>
                                </div>
                            </div>
                        </div>
                        <div class="col-xl-4 col-md-6 filter-item">
                            <div class="gallery-card">
                                <div class="box-img">
                                    <img src="assets/img/gallery/gallery_1_5.jpg" alt="gallery image" />
                                    <a href="assets/img/gallery/gallery_1_5.jpg" class="play-btn popup-image style3">
                                        <i class="fa-solid fa-arrow-up-right"></i>
                                    </a>
                                </div>
                            </div>
                        </div>
                        <div class="col-xl-4 col-md-6 filter-item">
                            <div class="gallery-card">
                                <div class="box-img">
                                    <img src="assets/img/gallery/gallery_1_6.jpg" alt="gallery image" />
                                    <a href="assets/img/gallery/gallery_1_6.jpg" class="play-btn popup-image style3">
                                        <i class="fa-solid fa-arrow-up-right"></i>
                                    </a>
                                </div>
                            </div>
                        </div>
                        <div class="col-xl-8 col-md-6 filter-item">
                            <div class="gallery-card">
                                <div class="box-img">
                                    <img src="assets/img/gallery/gallery_1_7.jpg" alt="gallery image" />
                                    <a href="assets/img/gallery/gallery_1_7.jpg" class="play-btn popup-image style3">
                                        <i class="fa-solid fa-arrow-up-right"></i>
                                    </a>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Gallery;