import React, { useState } from 'react';
import { Button, Modal } from 'react-bootstrap';

import '../assets/css/app.min.css';
import '../assets/css/style.css';
import '../assets/css/Cards.css';
import '../assets/css/Modal.css';

import game from '../assets/img/card/game-club1.png';
import game1 from '../assets/img/card/game-club2.png';
import game2 from '../assets/img/card/game-club3.png';
import game3 from '../assets/img/card/game-club4.png';

function TarifPlan() {
    const [show, setShow] = useState(false);

    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);

    return (
        <div>
            <Button onClick={handleShow} style={{ border: 'none' }}>
                Зоны и Тарифы
            </Button>

            <Modal
                show={show}
                onHide={handleClose}
                backdrop="static"
                keyboard={false}
                centered
            >
                <Modal.Header closeButton>
                    <Modal.Title>
                        <h1 className='standart-type'>Разные Зоны с Разными Условиями</h1>
                    </Modal.Title>
                </Modal.Header>

                <Modal.Body>
                    <div className="cards-wrapper">
                        {/* Первая карточка */}
                        <div className="card">
                            <div className="card-subtitle">Игровой ПК и периферия</div>
                            <div className="card-title">СТАНДАРТ</div>
                            <div className="card-image-wrapper pink">
                                <img src={game} alt="СТАНДАРТ" className="card-image" />
                            </div>
                            <div className="card-description">Общая Зона</div>
                            <a href="standart-pc" className="card-link pink">Подробнее →</a>
                        </div>

                        {/* Вторая карточка */}
                        <div className="card">
                            <div className="card-subtitle">Монитор больше + ПК мощнее</div>
                            <div className="card-title">СТАНДАРТ+</div>
                            <div className="card-image-wrapper blue">
                                <img src={game1} alt="СТАНДАРТ+" className="card-image" />
                            </div>
                            <div className="card-description">Лучшие Места</div>
                            <a href="#" className="card-link blue">Подробнее →</a>
                        </div>

                        {/* Третья карточка */}
                        <div className="card">
                            <div className="card-subtitle">На 5 или 10 мест + лучшие ПК</div>
                            <div className="card-title">BOOT CAMP</div>
                            <div className="card-image-wrapper red">
                                <img src={game2} alt="BOOT CAMP" className="card-image" />
                            </div>
                            <div className="card-description">Отдельная Комната</div>
                            <a href="#" className="card-link red">Подробнее →</a>
                        </div>

                        {/* Четвертая карточка */}
                        <div className="card">
                            <div className="card-subtitle">Подписка PS+ и 2 геймпада</div>
                            <div className="card-title">ПРИСТАВКА</div>
                            <div className="card-image-wrapper blue">
                                <img src={game3} alt="ПРИСТАВКА" className="card-image" />
                            </div>
                            <div className="card-description">Комната с диваном</div>
                            <a href="#" className="card-link blue">Подробнее →</a>
                        </div>
                    </div>
                </Modal.Body>

                <Modal.Footer>
                    <Button onClick={handleClose}>
                        Закрыть
                    </Button>
                    <Button onClick={() => alert('Добро Пожаловать на Bezone Компьютерный клуб!')}>
                        Понятно
                    </Button>
                </Modal.Footer>
            </Modal>
        </div>
    );
}

export default TarifPlan;