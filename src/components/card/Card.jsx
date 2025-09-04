import React, { useEffect, useState, useContext } from "react";
import API from "../api";
import { AuthContext } from "../authсontext/AuthContext";
import { FaTrash } from "react-icons/fa";
import "../assets/css/Cart.css";
import { FaAddressCard, FaCartPlus, FaHeart, FaHome, FaUserCircle, FaEllipsisH } from "react-icons/fa";

export default function Cart() {
    const [cart, setCart] = useState([]);
    const [total, setTotal] = useState(0);
    const { user } = useContext(AuthContext);
    const [selectedItems, setSelectedItems] = useState([]);

    useEffect(() => {
        if (user) fetchCart();
    }, [user]);

    const fetchCart = async () => {
        try {
            const res = await API.get("api/menu/api/cart/");
            const data = res.data || [];
            setCart(data);
            calculateTotal(data);
        } catch (err) {
            console.error(err);
        }
    };

    const calculateTotal = (items) => {
        const sum = items.reduce((acc, item) => {
            const price = Number(item.product?.price || 0);
            return acc + price * (item.quantity || 0);
        }, 0);
        setTotal(sum);
    };

    const updateQuantity = async (id, quantity) => {
        if (quantity < 1) return;
        try {
            await API.patch(`api/menu/api/cart/${id}/`, { quantity });
            const updated = cart.map(item => item.id === id ? { ...item, quantity } : item);
            setCart(updated);
            calculateTotal(updated);
        } catch (err) {
            console.error(err);
        }
    };

    const removeItem = async (id) => {
        try {
            await API.delete(`api/menu/api/cart/${id}/`);
            const updated = cart.filter(item => item.id !== id);
            setCart(updated);
            calculateTotal(updated);
        } catch (err) {
            console.error(err);
        }
    };

    const toggleSelect = (id) => {
        if (selectedItems.includes(id)) {
            setSelectedItems(selectedItems.filter(itemId => itemId !== id));
        } else {
            setSelectedItems([...selectedItems, id]);
        }
    };

    const selectAll = () => {
        const allIds = cart.map(item => item.id);
        setSelectedItems(allIds);
    };

    const removeSelected = async () => {
        try {
            for (const id of selectedItems) {
                await API.delete(`api/menu/api/cart/${id}/`);
            }
            const updated = cart.filter(item => !selectedItems.includes(item.id));
            setCart(updated);
            setSelectedItems([]);
            calculateTotal(updated);
        } catch (err) {
            console.error(err);
        }
    };

    if (!user) return <p>Для просмотра корзины нужно авторизоваться</p>;

    return (
        <div>
            <div class="breadcumb-wrapper" data-bg-src="assets/img/bg/breadcumb-bg.jpg">
                <div class="container">
                    <div class="breadcumb-content">
                        <br />
                        <h1 class="breadcumb-title">Корзина</h1>
                    </div>
                </div>
            </div>
            <div className="cart">
                <h2 style={{ textAlign: 'start' }}>Корзина</h2>
                <hr />
                {cart.length === 0 && <p style={{ textAlign: 'center', fontSize: '25px' }}>Корзина пуста <FaCartPlus /></p>}

                {cart.length > 0 && (
                    <div className="cart-actions">
                        <button onClick={() => setSelectedItems(cart.map(item => item.id))}>Hammasini tanlash</button>
                        <button onClick={removeSelected} disabled={selectedItems.length === 0}>Tanlanganlarni o'chirish</button>
                    </div>
                )}

                <div className="cart-grid">
                    {cart.map(item => (
                        <div key={item.id} className="cart-item">
                            <input
                                type="checkbox"
                                checked={selectedItems.includes(item.id)}
                                onChange={() => toggleSelect(item.id)}
                                style={{ marginRight: '10px' }}
                            />
                            <img
                                src={item.product?.image || "/assets/img/default.png"}
                                alt={item.product?.title || "Без названия"}
                                className="cart-item-img"
                            />
                            <div className="cart-item-info">
                                <h3>{item.product?.title || "Без названия"}</h3>
                                <p className="fjfjf">Цена: ${Number(item.product?.price || 0).toFixed(2)}</p>
                                <div className="quantity-controls">
                                    <button onClick={() => updateQuantity(item.id, item.quantity - 1)}>-</button>
                                    <span>{item.quantity || 0}</span>
                                    <button onClick={() => updateQuantity(item.id, item.quantity + 1)}>+</button>
                                </div>
                            </div>
                            <button className="remove-btn" onClick={() => removeItem(item.id)}>
                                <FaTrash />
                            </button>
                        </div>
                    ))}
                </div>

                {cart.length > 0 && (
                    <div className="checkout-section">
                        <div className="fff">
                            <h3>Список еда:</h3>
                            <h3>Итого: {Number(total || 0).toFixed(2)} сум </h3>
                        </div>
                        <br />
                        <ul>
                            {cart.map(item => (
                                <li key={item.id} className="gfgfg" style={{ fontFamily: 'Rajdhani, sans-serif', fontWeight: '700' }}>
                                    {item.product?.title || "Без названия"} — {item.quantity || 0} dona mahsulot narxi {Number(item.product?.price || 0).toFixed(2)} сум = {(Number(item.product?.price || 0) * (item.quantity || 0)).toFixed(2)} сум
                                </li>
                            ))}
                        </ul>
                        <a href="/orderform" className="checkout-btn">
                            Оформить заказ
                        </a>
                    </div>
                )}
            </div>
        </div>

    );
}