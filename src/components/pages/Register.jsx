import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { FaRegEye, FaRegEyeSlash } from "react-icons/fa6";
import API from "../api";
import FloatingButtons from '../floatingbuttons/FloatingButtons';
import "../assets/css/app.min.css";
import "../assets/css/style.css";
import "../assets/css/Burger.css";
import "../assets/css/GameClub.css";
import { useLang } from "../translator/Translator";
import { loginUser } from "../auth"; // 👈 импортируем функции

export default function Register() {
    const [form, setForm] = useState({
        username: "",
        password: "",
        phone_number: "",
    });
    const [showPassword, setShowPassword] = useState(false);
    const navigate = useNavigate();
    const { lang } = useLang();

    const handleChange = (e) => {
        const { name, value } = e.target;
        setForm({ ...form, [name]: value });
    };

    const handleSubmit = async (e) => {
        e.preventDefault();

        const formData = new FormData();
        formData.append("username", form.username);
        formData.append("password", form.password);
        formData.append("phone_number", form.phone_number);

        try {
            const res = await API.post("api/accounts/register/", formData, {
                headers: { "Content-Type": "multipart/form-data" },
            });

            alert("✅ Регистрация прошла успешно");

            // ⚡ сразу логиним пользователя
            if (res.data?.access) {
                loginUser(res.data.access);
                localStorage.setItem("refresh", res.data.refresh);
                window.dispatchEvent(new Event("authChanged"));
                navigate("/profile");
            } else {
                navigate("/login"); // если токен не вернулся, перенаправляем на вход
            }
        } catch (err) {
            console.error(err.response?.data || err);
            alert("❌ Ошибка регистрации");
        }
    };

    return (
        <div>
            <FloatingButtons />
            {/* Шапка страницы */}
            <div
                className="breadcumb-wrapper"
                data-bg-src="assets/img/bg/breadcumb-bg.jpg"
            >
                <div className="container">
                    <div className="breadcumb-content">
                        <h1 className="breadcumb-title">
                            <br />
                            {lang === "uz" ? "Roʻyxatdan oʻtish" : "Регистрация"}
                        </h1>
                    </div>
                </div>
            </div>

            {/* Форма регистрации */}
            <form className="form-container" onSubmit={handleSubmit}>
                <div className="input-group">
                    <label>
                        {lang === "uz" ? "Foydalanuvchi nomi" : "Имя пользователя"}
                    </label>
                    <input
                        type="text"
                        name="username"
                        placeholder={
                            lang === "uz" ? "Foydalanuvchi nomi" : "Имя пользователя"
                        }
                        value={form.username}
                        onChange={handleChange}
                        required
                    />
                </div>
                <br />
                <div className="input-group">
                    <label>{lang === "uz" ? "Parol" : "Пароль"}</label>
                    <div className="password-container">
                        <input
                            type={showPassword ? "text" : "password"}
                            name="password"
                            placeholder={lang === "uz" ? "Parol" : "Пароль"}
                            value={form.password}
                            onChange={handleChange}
                            required
                        />
                        <button
                            type="button"
                            onClick={() => setShowPassword(!showPassword)}
                            className="theme-togglee"
                            aria-label="Показать или скрыть пароль"
                        >
                            {showPassword ? <FaRegEyeSlash /> : <FaRegEye />}
                        </button>
                    </div>
                </div>
                <br />
                <div className="input-group">
                    <label>{lang === "uz" ? "Telefon raqami" : "Телефон"}</label>
                    <input
                        type="tel"
                        name="phone_number"
                        placeholder={lang === "uz" ? "Telefon raqami" : "Телефон"}
                        value={form.phone_number}
                        onChange={handleChange}
                        required
                    />
                </div>
                <br />
                <div className="checkbox-group">
                    <input type="checkbox" id="agreement" defaultChecked />
                    <label htmlFor="agreement">
                        {lang === "uz"
                            ? "Men ommaviy taklif shartlarini qabul qilaman"
                            : "Я принимаю условия публичной оферты"}
                        <br />
                        <a href="/login">
                            {lang === "uz" ? "Login orqali kiring" : "Зайти через Вход"}
                        </a>
                    </label>
                </div>

                <button type="submit" className="button">
                    {lang === "uz" ? "Roʻyxatdan oʻtish" : "Регистрация →"}
                </button>
            </form>
        </div>
    );
}