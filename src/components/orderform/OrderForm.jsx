import React, { useEffect, useState, useContext } from "react";
import API from "../api";
import { AuthContext } from "../authсontext/AuthContext";
import '../assets/css/OrderForm.css';
import { FaTrash } from "react-icons/fa";

export default function OrderForm() {
    const { user } = useContext(AuthContext);
    const [cart, setCart] = useState([]);
    const [cabinet, setCabinet] = useState("");
    const [room, setRoom] = useState("");
    const [seat, setSeat] = useState("");
    const [orderType, setOrderType] = useState("Стандарт");
    const [total, setTotal] = useState(0);

    useEffect(() => {
        if (user) fetchCart();
    }, [user]);

    const fetchCart = async () => {
        try {
            const res = await API.get("api/menu/api/cart/");
            setCart(res.data);
            const sum = res.data.reduce((acc, item) => acc + item.product.price * item.quantity, 0);
            setTotal(sum);
        } catch (err) {
            console.error(err);
        }
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        if (!cabinet || !room || !seat) return alert("Заполните все поля!");
        if (cart.length === 0) return alert("Корзина пуста!");

        const orderData = {
            cabinet,
            room,
            seat,
            order_type: orderType,
            items: cart.map(item => ({ product_id: item.product.id, quantity: item.quantity })),
        };

        try {
            await API.post("api/menu/api/orders/", orderData);
            alert("Заказ оформлен!");

            // Очистка корзины на сервере
            await Promise.all(cart.map(item => API.delete(`api/menu/api/cart/${item.id}/`)));

            // Очистка локального состояния
            setCart([]);
            setCabinet("");
            setRoom("");
            setSeat("");
            setOrderType("Стандарт");
            setTotal(0);
        } catch (err) {
            console.error(err);
            alert("Ошибка при оформлении заказа");
        }
    };

    if (!user) return <p>Для оформления заказа нужно авторизоваться</p>;

    return (
        <div>
            <div className="breadcumb-wrapper" data-bg-src="assets/img/bg/breadcumb-bg.jpg">
                <div className="container">
                    <div className="breadcumb-content">
                        <br />
                        <h1 className="breadcumb-title">Оформление заказа</h1>
                    </div>
                </div>
            </div>
            <br /><br />
            <div className="container">
                {/* Shopping Cart Table */}
                <div className="table-responsive shopping-cart">
                    <table className="table">
                        <thead>
                            <tr className="sgdfg">
                                <th className="text-center">Название продукта</th>
                                <th className="text-center">Количество</th>
                                <th className="text-center">Итого</th>
                                <th className="text-center"><a className="btn btn-sm btn-outline-danger" href="#" onClick={() => setCart([])}>Очистить корзину</a></th>
                            </tr>
                        </thead>
                        <tbody>
                            {cart.map(item => (
                                <tr key={item.id}>
                                    <td>
                                        <div className="product-item d-flex align-items-center gap-3">
                                            <img className="product-thumb" src={item.product.image || "/assets/img/default.png"} alt={item.product.title} />
                                            <div className="product-info">
                                                <h4 className="product-title">{item.product.title}</h4>
                                            </div>
                                        </div>
                                    </td>
                                    <td className="text-center"><span className="ttttt">{item.quantity}</span></td>
                                    <td className="text-center"><span className="ttttt">{(item.product.price * item.quantity).toFixed(2)}сум</span></td>
                                    <td className="text-center">
                                        <button className="btn btn-sm btn-danger" onClick={async () => {
                                            await API.delete(`api/menu/api/cart/${item.id}/`);
                                            setCart(cart.filter(c => c.id !== item.id));
                                        }}>
                                            <FaTrash />
                                        </button>
                                    </td>
                                </tr>
                            ))}
                        </tbody>
                    </table>
                </div>

                {/* Total & Form */}
                <div className="shopping-cart-footer mt-3">
                    <div className="d-flex justify-content-between align-items-center">
                        <div>Общая сумма: <strong>${total.toFixed(2)}</strong></div>
                    </div>

                    <form className="mt-3" onSubmit={handleSubmit}>
                        <div className="row mb-3">
                            <div className="col">
                                <input className="form-control" value={cabinet} onChange={e => setCabinet(e.target.value)} placeholder="Кабинет" />
                            </div>
                            <div className="col">
                                <input className="form-control" value={room} onChange={e => setRoom(e.target.value)} placeholder="Комната" />
                            </div>
                            <div className="col">
                                <input className="form-control" value={seat} onChange={e => setSeat(e.target.value)} placeholder="Место" />
                            </div>
                        </div>
                        <div className="mb-3">
                            <select className="form-control" value={orderType} onChange={e => setOrderType(e.target.value)}>
                                <option>Стандарт</option>
                                <option>Стандарт+</option>
                                <option>VIP</option>
                                <option>Приставка</option>
                            </select>
                        </div>
                        <button className="btn btn-success w-100" type="submit">Оформить заказ</button>
                    </form>
                </div>
            </div>
            <br />
        </div>
    );
}