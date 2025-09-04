import React, { useState } from "react";
import { RxHamburgerMenu } from "react-icons/rx";
import { IoMdClose } from "react-icons/io";
import "../assets/css/app.min.css";
import "../assets/css/style.css";
import "../assets/css/Burger.css";
import logo from '../assets/img/icon/bezone.png'

function Burger() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <>
      {/* Кнопка открытия */}
      <button
        className="th-menu-toggle text-2xl p-2"
        onClick={() => setIsOpen(true)}
      >
        <RxHamburgerMenu />
      </button>

      {/* Overlay */}
      {isOpen && (
        <div
          className="offcanvas-overlay"
          onClick={() => setIsOpen(false)}
        />
      )}

      {/* Offcanvas меню */}
      <div className={`offcanvas-menu ${isOpen ? "open" : ""}`}>
        <div className="offcanvas-header">
          <div className="mobile-logo">
            <a href="index.html">
              <img src={logo} alt="Bame" className="dd" />
            </a>
          </div>
          <button
            className="offcanvas-close"
            onClick={() => setIsOpen(false)}
          >
            <IoMdClose />
          </button>
        </div>

        {/* Навигация */}
        <div className="th-mobile-menu">
          <ul>
            <li>
              <a href="/">Основый</a>
            </li>
            <li>
              <a href="/about">О нас</a>
            </li>
            <li className="menu-item-has-children">
              <a>Турнир</a>
              <ul className="sub-menu">
                <li>
                  <a href="/tournament">Турнир</a>
                </li>
              </ul>
            </li>
            <li className="menu-item-has-children">
              <a>Страница</a>
              <ul className="sub-menu">
                <li>
                  <a href="/menu">Меня</a>
                </li>
                <li>
                  <a href="/team">Игроки</a>
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
                  <a href="error.html">Страница ошибки</a>
                </li> */}
              </ul>
            </li>

            <li>
              <a href="contact.html">Контакт</a>
            </li>
          </ul>
        </div>
      </div>
    </>
  );
}

export default Burger;