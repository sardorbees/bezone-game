import React, { useEffect, useState, useContext } from "react";
import API from "../api";
import { AuthContext } from "../authсontext/AuthContext";
import { FaHeart, FaTrash } from "react-icons/fa";
import '../assets/css/GameClub.css'
import "../assets/css/Cart.css";
import { FaCartPlus } from "react-icons/fa";

export default function Wishlist() {
  const [wishlist, setWishlist] = useState([]);
  const { user } = useContext(AuthContext);

  useEffect(() => {
    if (user) fetchWishlist();
  }, [user]);

  const fetchWishlist = async () => {
    try {
      const res = await API.get("api/menu/api/wishlist/");
      setWishlist(res.data);
    } catch (err) {
      console.error(err);
    }
  };

  const removeFromWishlist = async (id) => {
    try {
      await API.delete(`api/menu/api/wishlist/${id}/`);
      setWishlist(wishlist.filter(item => item.id !== id));
    } catch (err) {
      console.error(err);
    }
  };

  const addToCart = async (productId) => {
    try {
      await API.post("api/menu/api/cart/", { product: productId, quantity: 1 });
    } catch (err) {
      console.error(err);
      alert("Ошибка при добавлении в корзину");
    }
  };

  const handleAddToCart = async (productId) => {
    try {
      await API.post("api/menu/api/cart/", {
        product_id: productId,
        quantity: 1
      });
    } catch (err) {
      console.error(err);
    }
  };

  const handleAddToWishlist = async (productId) => {
    if (!user) return alert("Для добавления в избранное нужно авторизоваться");
    try {
      await API.post("api/menu/api/wishlist/", { product_id: productId });
      setWishlist([...wishlist, productId]);
    } catch (err) {
      console.error(err.response?.data);
    }
  };

  const handleRemoveFromWishlist = async (productId) => {
    try {
      await API.delete(`api/menu/api/wishlist/${productId}/`);
      setWishlist(wishlist.filter((id) => id !== productId));
    } catch (err) {
      console.error(err.response?.data);
    }
  };

  if (!user) return <p>Для просмотра списка желаний нужно авторизоваться</p>;

  return (
    <div>
      <div class="breadcumb-wrapper" data-bg-src="assets/img/bg/breadcumb-bg.jpg">
        <div class="container">
          <div class="breadcumb-content">
            <br />
            <h1 class="breadcumb-title">Список желаний</h1>
          </div>
        </div>
      </div>
      <div className="wishlist">
        <h2>Список желаний</h2>
        {wishlist.length === 0 && <p style={{ textAlign: 'center', fontSize: '25px' }}>Список желаний <FaHeart /></p>}
        <br /><br />
        <div className="wishlist-grid">
          {wishlist.map((item) => (
            <div key={item.id} className="product-card">
              <div className="product-image-container">
                <img
                  src={item.product.image || "/assets/img/default.png"}
                  alt={item.product.title}
                  className="img-tag"
                />
              </div>
              <div className="product-details">
                <h3 className="product-name">{item.product.title}</h3>
                <p className="product-description">{item.product.description}</p>
                <div className="price-section">
                  <span className="price">{item.product.price} so'm</span>
                  <div className="goid">
                    <button onClick={() => removeFromWishlist(item.id)} className="remove-btn"><FaTrash /> Удалить</button>
                  </div>
                </div>
                <br />
                <button
                  onClick={() => handleAddToCart(item.product.id)}
                  className="add-to-cart-buttone"
                >
                  <FaCartPlus /> В корзину
                </button>
              </div>
            </div>
          ))}
        </div>

      </div>
    </div>
  );
}