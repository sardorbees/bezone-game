// src/components/PcCard.jsx
import React, { useState, useEffect, useContext } from "react";
import API from "../api";
import { AuthContext } from "../authсontext/AuthContext";
import "../assets/css/GameClub.css";
import pc from "../assets/img/icon/56.png";
import myVideo from "../assets/img/video/video.mp4";

const TARIFFS = [
    { value: "standard", label: "Стандарт" },
    { value: "standard_plus", label: "Стандарт+" },
    { value: "vip", label: "VIP" },
    { value: "console", label: "Приставка" },
];

const PcCard = ({ number }) => {
    const { user } = useContext(AuthContext);
    const [isBooking, setIsBooking] = useState(false);
    const [form, setForm] = useState({
        tariff: "standard",
        booking_date: "",
        booking_time: "",
        pc_number: number,
    });
    const [msg, setMsg] = useState(null);
    const [booking, setBooking] = useState(null);

    // Загружаем бронь с сервера
    const fetchBooking = async () => {
        try {
            const response = await API.get(`api/bron_Pc/bookings/${number}/`);
            if (response.data) setBooking(response.data);
            else setBooking(null);
        } catch (err) {
            setBooking(null);
        }
    };

    useEffect(() => {
        fetchBooking();
        const interval = setInterval(fetchBooking, 1000);
        return () => clearInterval(interval);
    }, [number]);

    const handleChange = (e) => setForm({ ...form, [e.target.name]: e.target.value });

    const handleSubmit = async (e) => {
        e.preventDefault();
        setMsg(null);

        if (!user) {
            setMsg("Вы не авторизованы ❌");
            return;
        }

        try {
            const response = await API.post(
                "api/bron_Pc/bookings/create/",
                form,
                {
                    headers: {
                        Authorization: `Bearer ${localStorage.getItem("access")}`,
                    },
                }
            );

            setBooking(response.data);
            setIsBooking(false);
            setMsg("Бронирование успешно ✅");
        } catch (err) {
            setMsg(err.response?.data?.detail || "Ошибка при бронировании ❌");
        }
    };

    const handleDelete = async () => {
        if (!user?.is_admin || !booking) return;

        try {
            await API.delete(`api/bron_Pc/bookings/${booking.id}/delete/`, {
                headers: {
                    Authorization: `Bearer ${localStorage.getItem("access")}`,
                },
            });

            setBooking(null);
            setMsg("Бронь удалена ✅");
        } catch (err) {
            setMsg("Ошибка при удалении ❌");
        }
    };

    return (
        <div className={`pc-card-container neon-border ${booking ? "booked" : ""}`}>
            <p className="pc-card-subtitle">Игровой ПК и периферия</p>
            <h2 className="pc-card-title">СТАНДАРТ</h2>

            <div className="pc-card-image-wrapper glass-effect">
                <img src={pc} alt="Game PC" className="pc-card-image" />
            </div>

            <p className="pc-card-zone">Общая Зона</p>
            <p className="pc-card-number">Компьютер №{number}</p>

            {!isBooking && !booking && (
                <button className="book-btn" onClick={() => setIsBooking(true)}>
                    Забронировать
                </button>
            )}

            {isBooking && !booking && (
                <form onSubmit={handleSubmit} className="booking-form">
                    <label>Тариф</label>
                    <select name="tariff" value={form.tariff} onChange={handleChange}>
                        {TARIFFS.map((t) => (
                            <option key={t.value} value={t.value}>
                                {t.label}
                            </option>
                        ))}
                    </select>
                    <label>Дата</label>
                    <input
                        type="date"
                        name="booking_date"
                        value={form.booking_date}
                        onChange={handleChange}
                        required
                    />
                    <label>Время</label>
                    <input
                        type="time"
                        name="booking_time"
                        value={form.booking_time}
                        onChange={handleChange}
                        required
                    />
                    <div className="modal-actions">
                        <button type="submit">Подтвердить</button>
                        <button type="button" onClick={() => setIsBooking(false)}>
                            Отмена
                        </button>
                    </div>
                </form>
            )}

            {msg && <p>{msg}</p>}

            {booking && (
                <div className="success-msg">
                    <p>ПК забронирован ✅</p>
                    <p>Пользователь: <b>{booking.user}</b></p>
                    <p>Тариф: <b>{booking.tariff}</b></p>
                    <p>Дата: <b>{booking.booking_date}</b></p>
                    <p>Время: <b>{booking.booking_time}</b></p>

                    {user?.is_admin && (
                        <button onClick={handleDelete} className="delete-btn">
                            Удалить бронь
                        </button>
                    )}
                </div>
            )}
        </div>
    );
};

const Standart = () => {
    return (
        <div className="pc-card-wrapper">
            <div className="breadcumb-wrapperr">
                <div className="container">
                    <div className="breadcumb-content">
                        <h1 className="breadcumb-title">Общая Зона</h1>
                    </div>
                </div>
            </div>
            <br />
            <div className="one">
                {Array.from({ length: 15 }, (_, i) => (
                    <PcCard key={i + 1} number={i + 1} />
                ))}
            </div>
            <div className="viddd">
                <video autoPlay loop muted playsInline>
                    <source src={myVideo} type="video/mp4" />
                    Ваш браузер не поддерживает видео тег.
                </video>
            </div>
        </div>
    );
};

export default Standart;