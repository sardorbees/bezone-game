import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import API from "../api";
import "../assets/css/user.css";
import { FaUser } from "react-icons/fa6";
import { IoIosSettings, IoIosNotifications } from "react-icons/io";
import { MdOutlineSecurity } from "react-icons/md";
import { IoFastFood } from "react-icons/io5";
import '../assets/css/OrderList.css'

const UserProfile = () => {
    const [activeTab, setActiveTab] = useState("profile");
    const [notes, setNotes] = useState([]);
    const [loading, setLoading] = useState(true);
    const [user, setUser] = useState(null);
    const [sessions, setSessions] = useState([]);
    const [orders, setOrders] = useState([]);
    const [form, setForm] = useState({});
    const [editing, setEditing] = useState(false);
    const [passwordData, setPasswordData] = useState({ old_password: "", new_password: "" });
    const navigate = useNavigate();

    // Загружаем профиль с кэшем
    useEffect(() => {
        const cachedProfile = localStorage.getItem("profile");
        if (cachedProfile) {
            setUser(JSON.parse(cachedProfile));
            setForm(JSON.parse(cachedProfile));
        }
        API.get("api/accounts/profile/")
            .then((res) => {
                setUser(res.data);
                setForm(res.data);
                localStorage.setItem("profile", JSON.stringify(res.data));
            })
            .catch(() => navigate("/login"));
    }, [navigate]);

    // Сессии
    useEffect(() => {
        API.get("api/accounts/sessions/")
            .then((res) => setSessions(res.data))
            .catch(() => { })
            .finally(() => setLoading(false));
    }, []);

    // Заказы
    useEffect(() => {
        if (user) fetchOrders();
    }, [user]);

    const fetchOrders = async () => {
        try {
            const res = await API.get("api/menu/api/orders/");
            setOrders(res.data || []);
        } catch (err) {
            console.error(err);
        }
    };

    // Уведомления
    const fetchNotifications = async () => {
        try {
            const res = await API.get("api/bron_Pc/notifications/");
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

    const markRead = async (id) => {
        try {
            await API.patch(`api/bron_Pc/notifications/${id}/`, { is_read: true });
            setNotes((prev) => prev.map((n) => (n.id === id ? { ...n, is_read: true } : n)));
        } catch (err) {
            console.error(err);
        }
    };

    // Изменение формы
    const handleChange = (e) => {
        const { name, value, files } = e.target;
        setForm({ ...form, [name]: files ? files[0] : value });
    };

    // Сохранение профиля
    const handleSave = async (e) => {
        e.preventDefault();
        const formData = new FormData();
        if (form.username) formData.append("username", form.username);
        if (form.first_name) formData.append("first_name", form.first_name);
        if (form.last_name) formData.append("last_name", form.last_name);
        if (form.phone_number) formData.append("phone_number", form.phone_number);
        if (form.image instanceof File) formData.append("image", form.image);

        try {
            await API.put("api/accounts/edit-profile/", formData);
            const updated = await API.get("api/accounts/profile/");
            setUser(updated.data);
            setEditing(false);
            alert("✅ Профиль обновлён");
        } catch {
            alert("❌ Ошибка обновления");
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

    // Завершение сессии
    const handleDelete = (id) => {
        if (!window.confirm("Завершить эту сессию?")) return;
        API.delete(`api/accounts/sessions/${id}/delete/`)
            .then(() => setSessions(sessions.filter((s) => s.id !== id)))
            .catch(() => alert("❌ Ошибка завершения сессии"));
    };

    // Выход
    const handleLogout = () => {
        localStorage.removeItem("access");
        localStorage.removeItem("refresh");
        alert("🚪 Вы вышли");
        navigate("/login");
    };

    if (loading) return <p>Загрузка...</p>;
    if (!user) return <p className="text-center">Загрузка...</p>;

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
                <h1 className="welcome">Добро пожаловать, {user.username} 🎉</h1>
                <div className="row gutters-sm type">
                    {/* Боковое меню */}
                    <div className="col-md-4 d-nonen d-md-block">
                        <div className="cardd">
                            <div className="card-body">
                                <nav className="nav flex-column nav-pills nav-gap-y-1">
                                    <button onClick={() => setActiveTab("profile")} className={`nav-iteme nav-link ${activeTab === "profile" ? "active" : ""}`}>
                                        <FaUser /> Информация профиля
                                    </button>
                                    <button onClick={() => setActiveTab("account")} className={`nav-iteme nav-link ${activeTab === "account" ? "active" : ""}`}>
                                        <IoIosSettings /> Активные сессии
                                    </button>
                                    <button onClick={() => setActiveTab("security")} className={`nav-iteme nav-link ${activeTab === "security" ? "active" : ""}`}>
                                        <MdOutlineSecurity /> Безопасность
                                    </button>
                                    <button onClick={() => setActiveTab("notification")} className={`nav-iteme nav-link ${activeTab === "notification" ? "active" : ""}`}>
                                        <IoIosNotifications /> Уведомления
                                    </button>
                                    <button onClick={() => setActiveTab("billing")} className={`nav-iteme nav-link ${activeTab === "billing" ? "active" : ""}`}>
                                        <IoFastFood /> Заказы
                                    </button>
                                </nav>
                            </div>
                        </div>
                    </div>

                    {/* Контент */}
                    <div className="col-md-8">
                        <div className="carde">
                            <div className="card-body tab-content">
                                {activeTab === "profile" && (
                                    <div>
                                        <h6>Редактирование профиля</h6>
                                        <hr />
                                        {!editing ? (
                                            <div>
                                                <p><b>Имя пользователя:</b> {user.username}</p>
                                                <p><b>Телефон:</b> {user.phone_number}</p>
                                                <button className="btn btn-primarye" onClick={() => setEditing(true)}>Редактировать</button>
                                            </div>
                                        ) : (
                                            <form onSubmit={handleSave}>
                                                <input type="text" name="username" value={form.username || ""} placeholder="Имя пользователя" className="form-control mb-2" onChange={handleChange} />
                                                <input type="text" name="first_name" value={form.first_name || ""} placeholder="Имя" className="form-control mb-2" onChange={handleChange} />
                                                <input type="text" name="last_name" value={form.last_name || ""} placeholder="Фамилия" className="form-control mb-2" onChange={handleChange} />
                                                <input type="text" name="phone_number" value={form.phone_number || ""} placeholder="Телефон" className="form-control mb-2" onChange={handleChange} />
                                                <input type="file" name="image" className="form-control mb-2" onChange={handleChange} />
                                                <button type="submit" className="btn btn-success">Сохранить</button>
                                                <button type="button" className="btn btn-secondary ml-2" onClick={() => setEditing(false)}>Отмена</button>
                                            </form>
                                        )}
                                    </div>
                                )}

                                {activeTab === "account" && (
                                    <div className="list-group">
                                        {sessions.length === 0 ? (
                                            <p>Нет активных сессий ✅</p>
                                        ) : (
                                            sessions.map((s) => (
                                                <div key={s.id} className="list-group-item d-flex justify-content-between align-items-center">
                                                    <div>
                                                        <p><strong>Устройство:</strong> {s.device}</p>
                                                        <p><strong>IP:</strong> {s.ip_address}</p>
                                                    </div>
                                                    <button className="btn btn-sm btn-danger" onClick={() => handleDelete(s.id)}>Завершить</button>
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
                                            <input type="password" placeholder="Старый пароль" className="form-control mb-2" value={passwordData.old_password} onChange={(e) => setPasswordData({ ...passwordData, old_password: e.target.value })} />
                                            <input type="password" placeholder="Новый пароль" className="form-control mb-2" value={passwordData.new_password} onChange={(e) => setPasswordData({ ...passwordData, new_password: e.target.value })} />
                                            <button type="submit" className="btn btn-warning">Изменить пароль</button>
                                        </form>
                                        <hr />
                                        <button onClick={handleLogout} className="btn btn-dangere">🚪 Выйти</button>
                                    </div>
                                )}

                                {activeTab === "notification" && (
                                    <div>
                                        <h6>Уведомления</h6>
                                        {notes.length === 0 ? (
                                            <h1 className="no-notifications">Уведомлений нет 🎉</h1>
                                        ) : (
                                            <ul className="notifications-list">
                                                {notes.map((n) => (
                                                    <li key={n.id} className={`notification-item ${n.is_read ? "read" : "unread"}`}>
                                                        <b>{n.message}</b>
                                                        {!n.is_read && (
                                                            <button className="mark-read-btn" onClick={() => markRead(n.id)}>Отметить прочитанным</button>
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
                                            orders.map((order) => (
                                                <div key={order.id} className="order">
                                                    <h3>Заказ #{order.id}</h3>
                                                    <ul>
                                                        {order.items.map((item) => (
                                                            <li key={item.id}>{item.title} — {item.quantity} шт</li>
                                                        ))}
                                                    </ul>
                                                    <p><b>Итого:</b> {order.total} сум</p>
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