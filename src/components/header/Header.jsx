import React, { Fragment, useState, useEffect } from 'react';
import axios from 'axios';
import '../assets/css/app.min.css'
import '../assets/css/style.css'
import logo from '../assets/img/icon/bezone.png'
import { FaGamepad } from "react-icons/fa";
import Burger from '../burger/Burger';
function Header() {
    return (
        <header class="th-header header-layout3">
            <div class="sticky-wrapper">
                <div class="menu-area">
                    <div class="container th-container5">
                        <div class="row align-items-center justify-content-between">
                            <img src={logo} alt="" className='logo-price' />
                            <div class="col-auto">
                                <nav class="main-menu d-none d-lg-inline-block">
                                    <ul>
                                        <li>
                                            <a href="/">Основый</a>
                                        </li>
                                        <li>
                                            <a href="/about">О нас</a>
                                        </li>
                                        <li>
                                            <a href="/tournament">Турнир</a>
                                        </li>
                                        <li class="menu-item-has-children">
                                            <a>Страница</a>
                                            <ul class="sub-menu">
                                                <li>
                                                    <a href="/menu">Меня</a>
                                                </li>
                                                <li>
                                                    <a href="/players">Игроки</a>
                                                </li>
                                                {/* <li>
                                                    <a href="team-details.html">Информация об игроках</a>
                                                </li> */}
                                                <li>
                                                    <a href="/gallery">Галерея</a>
                                                </li>
                                                <li>
                                                    <a href="/point-table">Таблица очков</a>
                                                </li>
                                                {/* <li>
                                                    <a href="/error">Страница ошибки</a>
                                                </li> */}
                                            </ul>
                                        </li>
                                        <li>
                                            <a href="/contact">Контакт</a>
                                        </li>
                                    </ul>
                                </nav>
                                <div class="header-button d-flex d-lg-none">
                                    <span class="btn-border"></span>
                                    <Burger />
                                </div>
                            </div>
                            <div class="col-auto d-none d-xl-block">
                                <div class="header-button">
                                    <button type="button" class="simple-icon searchBoxToggler">
                                        <i class="far fa-search"></i>
                                    </button>
                                    <button type="button" class="simple-icon sideMenuInfo">
                                        <i class="fa-solid fa-bars"></i>
                                    </button>
                                    <div class="d-xxl-block d-none">
                                        <a href="contact.html" class="th-btn">
                                            <i class="fa-brands fa-twitch me-1"></i>
                                            Прямая трансляция
                                        </a>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </header>
    )
}
export default Header;