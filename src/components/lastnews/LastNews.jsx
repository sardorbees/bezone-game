import React from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation, Autoplay } from 'swiper/modules';

import 'swiper/css';
import 'swiper/css/navigation';
import logo from '../assets/img/product-img/hero-bg4-1.png'

import '../assets/css/app.min.css';
import '../assets/css/style.css';
import hero from '../assets/img/product-img/hero-4-1.png';
import { FaAngleLeft } from "react-icons/fa6";
import { FaChevronRight } from "react-icons/fa";
import { FaArrowRight } from "react-icons/fa";

function LastNews() {
    return (
        <section class="overflow-hidden position-relative space-top" id="blog-sec">
            <div class="blog-sec4-bg-shape" data-bg-src="assets/img/bg/blog-sec4-bg-shape.png"></div>
            <div class="container">
                <div class="title-area text-center">
                    <span class="sub-title style3">
                        <span class="sub-title-shape icon-masking">
                            <span class="mask-icon" data-mask-src="assets/img/bg/section-title-bg.svg"></span>
                        </span>
                        Latest News
                    </span>
                    <h2 class="sec-title">Stay Updated With Our Blog</h2>
                    <div class="shadow-title">Latest News</div>
                </div>
                <div class="slider-area">
                    <div class="swiper th-slider has-shadow" id="blogSlider4" data-slider-options='{"breakpoints":{"0":{"slidesPerView":1},"576":{"slidesPerView":"1"},"768":{"slidesPerView":"2"},"992":{"slidesPerView":"2"},"1200":{"slidesPerView":"2"}}}'>
                        <div class="swiper-wrapper">
                            <div class="swiper-slide">
                                <div class="blog-card style4" data-bg-src="assets/img/blog/blog_card4_bg.jpg">
                                    <div class="blog-thumb-wrap">
                                        <div class="blog-img" data-mask-src="assets/img/blog/blog_card4_img-shape.jpg">
                                            <a href="blog-details.html">
                                                <img src="assets/img/blog/blog_4_1.jpg" alt="blog image"/>
                                            </a>
                                        </div>
                                        <div class="blog-date" data-bg-src="assets/img/blog/blog_card4_date-bg.jpg">
                                            <span>15</span>
                                            FEBRUARY
                                        </div>
                                    </div>
                                    <div class="blog-content">
                                        <div class="blog-meta">
                                            <a href="blog.html">
                                                <i class="fas fa-user"></i>
                                                By Jonson
                                            </a>
                                            <a href="blog.html">
                                                <i class="fas fa-tag"></i>
                                                Video Game
                                            </a>
                                        </div>
                                        <h3 class="box-title">
                                            <a href="blog-details.html">Strategies for Dominating Your Favorite Game</a>
                                        </h3>
                                        <a href="blog-details.html" class="link-btn style2">
                                            READ MORE <i class="fa-solid fa-arrow-right ms-2"></i>
                                        </a>
                                    </div>
                                </div>
                            </div>
                            <div class="swiper-slide">
                                <div class="blog-card style4" data-bg-src="assets/img/blog/blog_card4_bg.jpg">
                                    <div class="blog-thumb-wrap">
                                        <div class="blog-img" data-mask-src="assets/img/blog/blog_card4_img-shape.jpg">
                                            <a href="blog-details.html">
                                                <img src="assets/img/blog/blog_4_2.jpg" alt="blog image"/>
                                            </a>
                                        </div>
                                        <div class="blog-date" data-bg-src="assets/img/blog/blog_card4_date-bg.jpg">
                                            <span>21</span>
                                            FEBRUARY
                                        </div>
                                    </div>
                                    <div class="blog-content">
                                        <div class="blog-meta">
                                            <a href="blog.html">
                                                <i class="fas fa-user"></i>
                                                By Jonson
                                            </a>
                                            <a href="blog.html">
                                                <i class="fas fa-tag"></i>
                                                Video Game
                                            </a>
                                        </div>
                                        <h3 class="box-title">
                                            <a href="blog-details.html">Breaking Barriers and Shaping the Future Game</a>
                                        </h3>
                                        <a href="blog-details.html" class="link-btn style2">
                                            READ MORE <i class="fa-solid fa-arrow-right ms-2"></i>
                                        </a>
                                    </div>
                                </div>
                            </div>
                            <div class="swiper-slide">
                                <div class="blog-card style4" data-bg-src="assets/img/blog/blog_card4_bg.jpg">
                                    <div class="blog-thumb-wrap">
                                        <div class="blog-img" data-mask-src="assets/img/blog/blog_card4_img-shape.jpg">
                                            <a href="blog-details.html">
                                                <img src="assets/img/blog/blog_4_1.jpg" alt="blog image"/>
                                            </a>
                                        </div>
                                        <div class="blog-date" data-bg-src="assets/img/blog/blog_card4_date-bg.jpg">
                                            <span>26</span>
                                            MARCH
                                        </div>
                                    </div>
                                    <div class="blog-content">
                                        <div class="blog-meta">
                                            <a href="blog.html">
                                                <i class="fas fa-user"></i>
                                                By Jonson
                                            </a>
                                            <a href="blog.html">
                                                <i class="fas fa-tag"></i>
                                                Video Game
                                            </a>
                                        </div>
                                        <h3 class="box-title">
                                            <a href="blog-details.html">Strategies for Dominating Your Favorite Game</a>
                                        </h3>
                                        <a href="blog-details.html" class="link-btn style2">
                                            READ MORE <i class="fa-solid fa-arrow-right ms-2"></i>
                                        </a>
                                    </div>
                                </div>
                            </div>
                            <div class="swiper-slide">
                                <div class="blog-card style4" data-bg-src="assets/img/blog/blog_card4_bg.jpg">
                                    <div class="blog-thumb-wrap">
                                        <div class="blog-img" data-mask-src="assets/img/blog/blog_card4_img-shape.jpg">
                                            <a href="blog-details.html">
                                                <img src="assets/img/blog/blog_4_2.jpg" alt="blog image"/>
                                            </a>
                                        </div>
                                        <div class="blog-date" data-bg-src="assets/img/blog/blog_card4_date-bg.jpg">
                                            <span>05</span>
                                            JULY
                                        </div>
                                    </div>
                                    <div class="blog-content">
                                        <div class="blog-meta">
                                            <a href="blog.html">
                                                <i class="fas fa-user"></i>
                                                By Jonson
                                            </a>
                                            <a href="blog.html">
                                                <i class="fas fa-tag"></i>
                                                Video Game
                                            </a>
                                        </div>
                                        <h3 class="box-title">
                                            <a href="blog-details.html">Breaking Barriers and Shaping the Future Game</a>
                                        </h3>
                                        <a href="blog-details.html" class="link-btn style2">
                                            READ MORE <i class="fa-solid fa-arrow-right ms-2"></i>
                                        </a>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}

export default LastNews;     