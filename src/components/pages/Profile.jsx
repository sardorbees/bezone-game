import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import API from "../api";
import "../assets/css/user.css";
import { FaUser } from "react-icons/fa6";
import { IoIosSettings, IoIosNotifications } from "react-icons/io";
import { MdOutlineSecurity } from "react-icons/md";
import { CiCreditCard1 } from "react-icons/ci";
import { IoFastFood } from "react-icons/io5";
import '../assets/css/OrderList.css'

const UserProfile = () => {
    const [activeTab, setActiveTab] = useState("profile");
    const [notes, setNotes] = useState([]);
    const [loading, setLoading] = useState(true);
    const [user, setUser] = useState(null);
    const [sessions, setSessions] = useState([]);
    const [orders, setOrders] = useState([]);
    const [editData, setEditData] = useState({
        username: "",
        phone_number: "",
    });
    const [passwordData, setPasswordData] = useState({
        old_password: "",
        new_password: "",
    });
    const navigate = useNavigate();

    useEffect(() => {
        API.get("api/accounts/sessions/")
            .then((res) => {
                setSessions(res.data);
                setLoading(false);
            })
            .catch(() => setLoading(false));
    }, []);
    useEffect(() => {
        if (user) fetchOrders();
    }, [user]);

    // Загружаем данные профиля
    useEffect(() => {
        API.get("api/accounts/profile/")
            .then((res) => {
                setUser(res.data);
                setEditData({
                    username: res.data.username,
                    phone_number: res.data.phone_number,
                });
            })
            .catch(() => navigate("/login"));
    }, [navigate]);

    // Обновить профиль
    const handleUpdateProfile = (e) => {
        e.preventDefault();
        API.put("api/accounts/edit-profile/", editData)
            .then((res) => {
                setUser(res.data);
                alert("✅ Профиль обновлен");
            })
            .catch(() => alert("❌ Ошибка обновления профиля"));
    };

    const fetchOrders = async () => {
        try {
            const res = await API.get("api/menu/api/orders/");
            setOrders(res.data || []);
        } catch (err) {
            console.error(err);
        }
    };

    const fetchNotifications = async () => {
        try {
            const res = await API.get("api/bron_Pc/notifications/"); // expects list of user's notifications
            setNotes(res.data);
        } catch (err) {
            console.error("notifications fetch error", err);
        } finally {
            setLoading(false);
        }
    };

    useEffect(() => {
        fetchNotifications();
        const interval = setInterval(fetchNotifications, 1000);
        return () => clearInterval(interval);
    }, []);

    // Отметить как прочитанное
    const markRead = async (id) => {
        try {
            await API.patch(`api/bron_Pc/notifications/${id}/`, { is_read: true });
            setNotes(prev => prev.map(n => n.id === id ? { ...n, is_read: true } : n));
        } catch (err) {
            console.error(err);
        }
    };
    // Смена пароля
    const handleChangePassword = (e) => {
        e.preventDefault();
        API.post("api/accounts/change-password/", passwordData)
            .then(() => {
                alert("🔑 Пароль изменён");
                setPasswordData({ old_password: "", new_password: "" });
            })
            .catch(() => alert("❌ Ошибка смены пароля"));
    };

    const handleDelete = (id) => {
        if (!window.confirm("Завершить эту сессию?")) return;

        API.delete(`api/accounts/sessions/${id}/delete/`)
            .then(() => {
                setSessions(sessions.filter((s) => s.id !== id));
            })
            .catch(() => alert("❌ Ошибка завершения сессии"));
    };

    if (loading) return <p>Загрузка...</p>;

    // Выход
    const handleLogout = () => {
        localStorage.removeItem("access");
        localStorage.removeItem("refresh");
        alert("🚪 Вы вышли");
        navigate("/login");
    };
    if (!user) return <p className="text-center">Загрузка...</p>;
    if (!user) return <p>Для просмотра заказов нужно авторизоваться</p>;

    return (
        <div>
            <div className="breadcumb-wrapper" data-bg-src="assets/img/bg/breadcumb-bg.jpg">
                <div className="container">
                    <div className="breadcumb-content">
                        <br />
                        <h1 className="breadcumb-title">Профиль</h1>
                    </div>
                </div>
            </div>

            <div className="containeree">
                <h1 className="welcome">Добро пожаловать,  {user.username} 🎉</h1>
                <nav aria-label="breadcrumb" className="main-breadcrumbe">
                    <ol className="breadcrumb">
                        <li className="breadcrumb-item"><a href="/">Основной</a></li>
                        <li className="breadcrumb-item"><a href="#">Пользователь</a></li>
                        <li className="breadcrumb-item active" aria-current="page">Настройки профиля</li>
                        <li className="breadcrumb-item active" aria-current="page"><a href="/standart-pc" className="breadcrumb-item" style={{ color: '#6c757d' }}>Забронировать Pc</a></li>
                    </ol>
                </nav>

                <div className="row gutters-sm type">
                    {/* Боковое меню */}
                    <div className="col-md-4 d-nonen d-md-block">
                        <div className="cardd">
                            <div className="card-body">
                                <nav className="nav flex-column nav-pills nav-gap-y-1">
                                    <button
                                        onClick={() => setActiveTab("profile")}
                                        className={`nav-iteme nav-link ${activeTab === "profile" ? "active" : ""}`}
                                    >
                                        <FaUser /> Информация профиля
                                    </button>
                                    <button
                                        onClick={() => setActiveTab("account")}
                                        className={`nav-iteme nav-link ${activeTab === "account" ? "active" : ""}`}
                                    >
                                        <IoIosSettings /> Активные сессии
                                    </button>
                                    <button
                                        onClick={() => setActiveTab("security")}
                                        className={`nav-iteme nav-link ${activeTab === "security" ? "active" : ""}`}
                                    >
                                        <MdOutlineSecurity /> Безопасность
                                    </button>
                                    <button
                                        onClick={() => setActiveTab("notification")}
                                        className={`nav-iteme nav-link ${activeTab === "notification" ? "active" : ""}`}
                                    >
                                        <IoIosNotifications /> Уведомления
                                    </button>
                                    <button
                                        onClick={() => setActiveTab("billing")}
                                        className={`nav-iteme nav-link ${activeTab === "billing" ? "active" : ""}`}
                                    >
                                        <IoFastFood /> Заказы
                                    </button>
                                </nav>
                            </div>
                        </div>
                    </div>

                    {/* Контент справа */}
                    <div className="col-md-8">
                        <div className="carde">
                            <div className="card-body tab-content">
                                {activeTab === "profile" && (
                                    <div>
                                        <h6>Редактирование профиля</h6>
                                        <hr />
                                        <form onSubmit={handleUpdateProfile}>
                                            <div className="form-group">
                                                <label>Имя пользователя</label>
                                                <input
                                                    type="text"
                                                    className="form-control"
                                                    value={editData.username}
                                                    placeholder="Имя пользователя"
                                                    onChange={(e) =>
                                                        setEditData({ ...editData, username: e.target.value })
                                                    }
                                                />
                                            </div>

                                            <div className="form-group">
                                                <label>Телефон</label>
                                                <input
                                                    type="text"
                                                    className="form-control"
                                                    placeholder="Телефон"
                                                    value={editData.phone_number}
                                                    onChange={(e) =>
                                                        setEditData({ ...editData, phone_number: e.target.value })
                                                    }
                                                />
                                            </div>

                                            <div className="form-group">
                                                <label>Email</label>
                                                <input
                                                    type="email"
                                                    placeholder="Электронная почта"
                                                    className="form-control"
                                                    value={editData.email}
                                                    onChange={(e) =>
                                                        setEditData({ ...editData, email: e.target.value })
                                                    }
                                                />
                                            </div>

                                            <div className="form-group">
                                                <label>Адрес</label>
                                                <input
                                                    type="text"
                                                    placeholder="Адрес"
                                                    className="form-control"
                                                    value={editData.address}
                                                    onChange={(e) =>
                                                        setEditData({ ...editData, address: e.target.value })
                                                    }
                                                />
                                            </div>

                                            <button type="submit" className="btn btn-primarye">
                                                Сохранить изменения
                                            </button>
                                        </form>
                                    </div>
                                )}

                                {activeTab === "account" && (
                                    <div className="list-group">
                                        {sessions.length === 0 ? (
                                            <p>Нет активных сессий ✅</p>
                                        ) : (
                                            sessions.map((s) => (
                                                <div
                                                    key={s.id}
                                                    className="list-group-item d-flex justify-content-between align-items-center"
                                                >
                                                    <div>
                                                        <p><strong>Устройство:</strong> {s.device}</p>
                                                        <p><strong>IP:</strong> {s.ip_address}</p>
                                                        <p><strong>Начало:</strong> {new Date(s.session_start).toLocaleString()}</p>
                                                        <p><strong>Последняя активность:</strong> {new Date(s.last_activity).toLocaleString()}</p>
                                                    </div>
                                                    <button
                                                        className="btn btn-sm btn-danger"
                                                        onClick={() => handleDelete(s.id)}
                                                    >
                                                        Завершить
                                                    </button>
                                                </div>
                                            ))
                                        )}
                                    </div>
                                )}

                                {activeTab === "security" && (
                                    <div>
                                        <h6>Смена пароля</h6>
                                        <hr />
                                        <form onSubmit={handleChangePassword}>
                                            <div className="form-group">
                                                <input
                                                    type="password"
                                                    placeholder="Старый пароль"
                                                    className="form-control"
                                                    value={passwordData.old_password}
                                                    onChange={(e) => setPasswordData({ ...passwordData, old_password: e.target.value })}
                                                />
                                                <input
                                                    type="password"
                                                    placeholder="Новый пароль"
                                                    className="form-control mt-2"
                                                    value={passwordData.new_password}
                                                    onChange={(e) => setPasswordData({ ...passwordData, new_password: e.target.value })}
                                                />
                                            </div>
                                            <button type="submit" className="btn btn-warning">Изменить пароль</button>
                                        </form>
                                        <hr />
                                        <button onClick={handleLogout} className="btn btn-dangere">🚪 Выйти</button>
                                    </div>
                                )}

                                {activeTab === "notification" && (
                                    <div>
                                        <h6>Настройки уведомлений</h6>
                                        {notes.length === 0 ? (
                                            <h1 className="no-notifications">Уведомлений нет 🎉</h1>
                                        ) : (
                                            <ul className="notifications-list">
                                                {notes.map((n) => (
                                                    <li
                                                        key={n.id}
                                                        className={`notification-item ${n.is_read ? "read" : "unread"}`}
                                                    >
                                                        <div className="notification-header">
                                                            <b>{n.message}</b>
                                                        </div>
                                                        <div className="notification-body">
                                                            ПК: {n.pc_number} | Тариф: {n.tariff}
                                                        </div>
                                                        <div className="notification-footer">
                                                            Дата: {n.booking_date} {n.booking_time}
                                                        </div>
                                                        <div className="notification-status">
                                                            Статус: {n.is_approved ? "✅ Одобрено" : "⏳ В ожидании"}
                                                        </div>
                                                        {!n.is_read && (
                                                            <button className="mark-read-btn" onClick={() => markRead(n.id)}>
                                                                Отметить прочитанным
                                                            </button>
                                                        )}
                                                    </li>
                                                ))}
                                            </ul>
                                        )}
                                    </div>
                                )}

                                {activeTab === "billing" && (
                                    <div>
                                        <h6><IoFastFood /> Мои заказы</h6>
                                        <hr />
                                        {orders.length === 0 ? (
                                            <p>Заказы отсутствуют</p>
                                        ) : (
                                            orders.map(order => (
                                                <div key={order.id} className="order">
                                                    <h3>
                                                        Заказ #{order.id} — {new Date(order.created_at).toLocaleString()}
                                                    </h3>

                                                    <p>
                                                        <b>Кабинет:</b> {order.cabinet} | <b>Комната:</b> {order.room} |{" "}
                                                        <b>Место:</b> {order.seat} | <b>Зоны и Тарифы:</b> {order.order_type}
                                                    </p>

                                                    <ul>
                                                        {order.items.map(item => (
                                                            <li key={item.id}>
                                                                {item.title} — {item.quantity} шт —{" "}
                                                                {Number(item.price) * item.quantity} сум
                                                            </li>
                                                        ))}
                                                    </ul>

                                                    <p>
                                                        <b>Итого:</b> {order.total} сум
                                                    </p>
                                                </div>
                                            ))
                                        )}
                                    </div>
                                )}
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default UserProfile;