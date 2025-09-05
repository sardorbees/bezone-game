import React, { useState } from 'react';
import '../assets/css/GameClub.css';
import { useLang } from "../translator/Translator";
import API from "../api";
import { useNavigate } from "react-router-dom";
import { FaRegEye, FaRegEyeSlash } from "react-icons/fa6";
import FloatingButtons from '../floatingbuttons/FloatingButtons';
import { loginUser, logoutUser, isAuthenticated } from "../auth"; // <-- импортируем

const Login = () => {
    const [form, setForm] = useState({ username: '', password: '' });
    const [remember, setRemember] = useState(true);
    const [showPassword, setShowPassword] = useState(false);
    const { lang } = useLang();
    const navigate = useNavigate();

    const handleChange = (e) => setForm({ ...form, [e.target.name]: e.target.value });

    const handleSubmit = async (e) => {
        e.preventDefault();
        try {
            const res = await API.post("api/accounts/login/", {
                username: form.username,
                password: form.password,
            });

            // сохраняем токены через loginUser
            loginUser(res.data.access);
            localStorage.setItem("refresh", res.data.refresh);

            window.dispatchEvent(new Event("authChanged"));
            navigate("/profile");
        } catch (err) {
            if (err.response?.status === 401) {
                alert(lang === "uz" ? "Iltimos, qayta kiriting" : "Авторизуйтесь снова");
                logoutUser(); // очищаем токены
                localStorage.removeItem("refresh");
                window.dispatchEvent(new Event("authChanged"));
                navigate("/login");
            } else {
                alert(err.response?.data?.error || (lang === "uz" ? "Kirishda xatolik" : "Ошибка входа"));
            }
        }
    };

    return (
        <div>
            <FloatingButtons />
            <div
                className="breadcumb-wrapper"
                data-bg-src="assets/img/bg/breadcumb-bg.jpg"
            >
                <div className="container">
                    <div className="breadcumb-content">
                        <h1 className="breadcumb-title">
                            <br />
                            {lang === "uz" ? "Tizimga kirish" : "Вход"}
                        </h1>
                    </div>
                </div>
            </div>

            <form className="login-form" onSubmit={handleSubmit}>
                <label htmlFor="username">
                    {lang === "uz" ? "Foydalanuvchi ismi" : "Имя пользователя"}
                </label>
                <input
                    id="username"
                    name="username"
                    type="text"
                    placeholder={lang === "uz" ? "Foydalanuvchi ismi" : "Имя пользователя"}
                    value={form.username}
                    onChange={handleChange}
                    required
                    className='igf'
                />

                <label htmlFor="password">
                    {lang === "uz" ? "Parol" : "Пароль"}
                </label>
                <div style={{ display: 'flex', alignItems: 'center' }}>
                    <input
                        id="password"
                        name="password"
                        type={showPassword ? "text" : "password"}
                        placeholder={lang === "uz" ? "Parolni kiriting" : "Введите пароль"}
                        value={form.password}
                        onChange={handleChange}
                        required
                        style={{ flex: 1 }}
                    />
                    <button
                        type="button"
                        onClick={() => setShowPassword(!showPassword)}
                        style={{
                            marginLeft: '8px',
                            background: 'none',
                            border: 'none',
                            cursor: 'pointer',
                            fontSize: '22px',
                            padding: 0,
                            color: '#555',
                            position: 'relative',
                            left: '-35px',
                            top: '-2px',
                        }}
                        aria-label={showPassword ? (lang === "uz" ? "Parolni yashirish" : "Скрыть пароль") : (lang === "uz" ? "Parolni ko'rsatish" : "Показать пароль")}
                    >
                        {showPassword ? <FaRegEyeSlash /> : <FaRegEye />}
                    </button>
                </div>

                <div className="remember-me" style={{ marginTop: '15px' }}>
                    <input
                        id="remember"
                        type="checkbox"
                        checked={remember}
                        onChange={() => setRemember(!remember)}
                    />
                    <label htmlFor="remember">
                        {lang === "uz" ? "Meni eslab qol" : "Запомнить меня"}
                        <br />
                        <a href="/register">{lang === "uz" ? "Profilingiz yoq bolsa R`oyxatdan O`ting oting" : "Если у вас нет профиля, зарегистрируйтесь."}</a>
                    </label>
                </div>

                <button type="submit" className="submit-btn">
                    {lang === "uz" ? "Tizimga kirish →" : "Войти →"}
                </button>
            </form>
        </div>
    );
};

export default Login;