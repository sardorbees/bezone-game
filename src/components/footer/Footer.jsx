import React, { Fragment, useState, useEffect } from 'react';
import axios from 'axios';
import '../assets/css/app.min.css'
import '../assets/css/style.css'
import logo from '../assets/img/icon/bezone.png'
import { RiInstagramFill } from "react-icons/ri";
import { FaTelegram } from "react-icons/fa";
import { FaYoutube } from "react-icons/fa";
function Footer() {
    return (
        <footer class="footer-wrapper footer-layout4 black" data-bg-src="assets/img/bg/footer2-bg.png">
            <div class="widget-area" data-bg-src="assets/img/bg/footer4-bg.png">
                <div class="container">
                    <div class="row justify-content-between">
                        <div class="col-md-6 col-xl-auto">
                            <div class="widget footer-widget">
                                <div class="th-widget-about">
                                    <div class="about-logo">
                                        <a href="index.html">
                                            <img src={logo} alt="Bame" className='logo-pricee' />
                                        </a>
                                    </div>
                                    <p class="about-text">Помимо киберспортивных турниров, включите более широкий календарь игровых мероприятий, конференций и съездов.</p>
                                    <h3 class="widget_title">
                                        Подписывайтесь <span class="text-theme">на нас:</span>
                                    </h3>
                                    <div class="th-widget-contact">
                                        <div class="th-social style-mask">
                                            <a class="instagram" href="https://www.instagram.com/">
                                                <RiInstagramFill />
                                            </a>
                                            <a class="linkedin" href="https://www.linkedin.com/">
                                                <FaTelegram />
                                            </a>
                                            <a class="google-play" href="https://www.google.com/">
                                                <FaYoutube />
                                            </a>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div class="col-md-6 col-xl-auto">
                            <div class="widget widget_nav_menu footer-widget">
                                <h3 class="widget_title">Полезная ссылка</h3>
                                <div class="menu-all-pages-container">
                                    <ul class="menu">
                                        <li>
                                            <a href="blog.html">
                                                <i class="far fa-angle-right"></i>
                                                Основый
                                            </a>
                                        </li>
                                        <li>
                                            <a href="blog.html">
                                                <i class="far fa-angle-right"></i>
                                                О нас
                                            </a>
                                        </li>
                                        <li>
                                            <a href="blog.html">
                                                <i class="far fa-angle-right"></i>
                                                Турнир
                                            </a>
                                        </li>
                                        <li>
                                            <a href="blog.html">
                                                <i class="far fa-angle-right"></i>
                                                Меню
                                            </a>
                                        </li>
                                        <li>
                                            <a href="blog.html">
                                                <i class="far fa-angle-right"></i>
                                                Игроки
                                            </a>
                                        </li>
                                        <li>
                                            <a href="blog.html">
                                                <i class="far fa-angle-right"></i>
                                                Галерея
                                            </a>
                                        </li>
                                        <li>
                                            <a href="blog.html">
                                                <i class="far fa-angle-right"></i>
                                                Таблица очков
                                            </a>
                                        </li>
                                    </ul>
                                </div>
                            </div>
                        </div>
                        <div class="col-md-6 col-xl-auto">
                            <div class="widget widget_nav_menu footer-widget">
                                <h3 class="widget_title">Поддерживает</h3>
                                <div class="menu-all-pages-container">
                                    <ul class="menu">
                                        <li>
                                            <a href="contact.html">
                                                <i class="far fa-angle-right"></i>
                                                Помощь и поддержка
                                            </a>
                                        </li>
                                        <li>
                                            <a href="contact.html">
                                                <i class="far fa-angle-right"></i>
                                                Живые аукционы
                                            </a>
                                        </li>
                                        <li>
                                            <a href="contact.html">
                                                <i class="far fa-angle-right"></i>
                                                Поддержка 24/7
                                            </a>
                                        </li>
                                    </ul>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </footer>
    )
}
export default Footer;