import React, { useEffect, useState, useContext } from "react";
import API from "../api"; // axios с токеном
import { AuthContext } from "../authсontext/AuthContext";
import { FaCartPlus, FaHeart } from "react-icons/fa";
import "../assets/css/GameClub.css";
import axios from "axios";

export default function Menu() {
    const [products, setProducts] = useState([]);
    const [wishlist, setWishlist] = useState([]);
    const [wishlistData, setWishlistData] = useState([]);
    const [cart, setCart] = useState([]);
    const [sort, setSort] = useState("menu_order");
    const [category, setCategory] = useState("all");
    const { user } = useContext(AuthContext);

    useEffect(() => {
        fetchProducts(category, sort);
        if (user) {
            fetchWishlist();
            fetchCart();
        }
    }, [sort, category, user]);

    const fetchProducts = async (cat, sort) => {
        try {
            const res = await axios.get("http://127.0.0.1:8000/api/menu/api/products/", {
                params: { category: cat, sort },
            });
            setProducts(res.data);
        } catch (error) {
            console.error("Ошибка при загрузке продуктов:", error);
        }
    };

    const fetchWishlist = async () => {
        try {
            const res = await API.get("api/menu/api/wishlist/");
            setWishlist(res.data.map((i) => i.product.id));
            setWishlistData(res.data);
        } catch (err) {
            console.error("Ошибка при загрузке wishlist:", err);
        }
    };

    const fetchCart = async () => {
        try {
            const res = await API.get("api/menu/api/cart/");
            setCart(res.data.map((i) => i.product.id));
        } catch (err) {
            console.error("Ошибка при загрузке корзины:", err);
        }
    };

    const handleAddToCart = async (productId) => {
        if (cart.includes(productId)) return;
        try {
            await API.post("api/menu/api/cart/", { product_id: productId, quantity: 1 });
            setCart([...cart, productId]);
        } catch (err) {
            console.error("Ошибка при добавлении в корзину:", err);
        }
    };

    const toggleWishlist = async (productId) => {
        if (!user) {
            alert("Для добавления в избранное нужно авторизоваться");
            return;
        }

        if (wishlist.includes(productId)) {
            try {
                const wishlistItem = wishlistData.find(
                    (item) => item.product.id === productId
                );
                if (!wishlistItem) return;

                await API.delete(`api/menu/api/wishlist/${wishlistItem.id}/`);
                setWishlist(wishlist.filter((id) => id !== productId));
                setWishlistData(
                    wishlistData.filter((item) => item.product.id !== productId)
                );
            } catch (err) {
                console.error("Ошибка при удалении из избранного:", err);
            }
        } else {
            try {
                const res = await API.post("api/menu/api/wishlist/", { product_id: productId });
                setWishlist([...wishlist, productId]);
                setWishlistData([...wishlistData, res.data]);
            } catch (err) {
                console.error("Ошибка при добавлении в избранное:", err);
            }
        }
    };

    return (
        <div>
            {/* Хлебные крошки */}
            <div
                className="breadcumb-wrapper"
                data-bg-src="assets/img/bg/breadcumb-bg.jpg"
            >
                <div className="container">
                    <div className="breadcumb-content">
                        <br />
                        <h1 className="breadcumb-title">Меню</h1>
                    </div>
                </div>
            </div>

            <br />
            {/* Фильтр + сортировка */}
            <div className="th-sort-bar mb-4">
                <div className="row justify-content-between align-items-center">
                    <div className="col-md">
                        <p className="woocommerce-result-count">
                            Показано {products.length} товаров
                        </p>
                    </div>
                    <div className="col-md-auto">
                        <select
                            className="orderby"
                            value={sort}
                            onChange={(e) => setSort(e.target.value)}
                        >
                            <option value="menu_order">Сортировка по умолчанию</option>
                            <option value="popularity">Сортировать по популярности</option>
                            <option value="rating">Сортировать по рейтингу</option>
                            <option value="date">Сортировать по последним</option>
                            <option value="price">Сортировать по цене: от самой низкой к самой высокой</option>
                            <option value="price-desc">Сортировать по цене: от высокой к низкой</option>
                        </select>
                    </div>

                    <div className="col-md-auto">
                        <select
                            className="orderby"
                            value={category}
                            onChange={(e) => setCategory(e.target.value)}
                        >
                            <option value="all">Все еда</option>
                            <option value="bestsellers">Хиты продаж</option>
                            <option value="blessed-maxi-box">BARAKALI Maxi BOX</option>
                            <option value="sandwiches">Сэндвичи</option>
                            <option value="pita">Лаваш</option>
                            <option value="shawarma">Шаурма и Арапита</option>
                            <option value="burgers">Бургеры</option>
                            <option value="complex-dishes">Комплексные блюда</option>
                            <option value="hot-dogs">Хот-доги</option>
                            <option value="side-dishes">Гарниры, хлеб</option>
                            <option value="bread">Снеки</option>
                            <option value="snacks">Десерты</option>
                            <option value="desserts">Холодные напитки</option>
                            <option value="cold-drinks">Горячие напитки</option>
                            <option value="hot-drinks">Соусы, добавки</option>
                        </select>
                    </div>
                </div>
            </div>

            {/* Сетка товаров */}
            <div className="products-grid">
                {products.map((product) => (
                    <div className="product-card" key={product.id}>
                        <div className="product-image-container">
                            <img
                                src={product.image || "/assets/img/default.png"}
                                alt={product.title}
                                className="img-tag"
                            />
                            <div className="favorite-icons">
                                <button
                                    onClick={() => toggleWishlist(product.id)}
                                    className="icon favorite-icon"
                                >
                                    <FaHeart color={wishlist.includes(product.id) ? "red" : "gray"} />
                                </button>
                            </div>
                        </div>
                        <div className="product-details">
                            <h3 className="product-name">{product.title}</h3>
                            <p className="monthly-payment">{product.description}</p>
                            <div className="price-section">
                                <span className="price">{product.price} so'm</span>
                                <button
                                    onClick={() => handleAddToCart(product.id)}
                                    className="add-to-cart-button"
                                    disabled={cart.includes(product.id)}
                                >
                                    <FaCartPlus />
                                </button>
                            </div>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    );
}