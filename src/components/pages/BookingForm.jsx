import React, { useState, useContext } from "react";
import API from "../api";
import { AuthContext } from "../authсontext/AuthContext";

const TARIFFS = [
    { value: "standard", label: "Стандарт" },
    { value: "standard_plus", label: "Стандарт+" },
    { value: "vip", label: "VIP" },
    { value: "console", label: "Приставка" },
];

export default function PcBookingForm({ onBooked }) {
    const { user } = useContext(AuthContext);
    const [form, setForm] = useState({
        tariff: "standard",
        pc_number: "",
        booking_date: "",
        booking_time: "",
    });
    const [msg, setMsg] = useState(null);

    const handleChange = (e) => setForm({ ...form, [e.target.name]: e.target.value });

    const handleSubmit = async (e) => {
        e.preventDefault();
        setMsg(null);
        if (!user) {
            setMsg("Вы не авторизованы, вы не можете бронировать ПК");
            return;
        }
        try {
            const res = await API.post("api/bron_Pc/bookings/create/", form);
            setMsg("Бронирование отправлено");
            setForm({ tariff: "standard", pc_number: "", booking_date: "", booking_time: "" });
            if (onBooked) onBooked(res.data);
        } catch (err) {
            setMsg(err.response?.data?.detail || "Ошибка при бронировании");
        }
    };

    return (
        <div style={{ padding: 12, border: "1px solid #ddd", marginBottom: 12 }}>
            <h3>Бронирование ПК</h3>
            <form onSubmit={handleSubmit}>
                <label>Тариф</label>
                <select name="tariff" value={form.tariff} onChange={handleChange}>
                    {TARIFFS.map((t) => <option key={t.value} value={t.value}>{t.label}</option>)}
                </select>
                <br />
                <label>Номер ПК</label>
                <input name="pc_number" type="number" value={form.pc_number} onChange={handleChange} required />
                <br />
                <label>Дата</label>
                <input name="booking_date" type="date" value={form.booking_date} onChange={handleChange} required />
                <br />
                <label>Время</label>
                <input name="booking_time" type="time" value={form.booking_time} onChange={handleChange} required />
                <br /><br />
                <button type="submit">Забронировать</button>
            </form>
            {msg && <p>{msg}</p>}
        </div>
    );
}