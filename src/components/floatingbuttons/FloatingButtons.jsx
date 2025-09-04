import React, { useState } from "react";
import { FaInstagram, FaTelegramPlane, FaTimes, FaCommentDots } from "react-icons/fa";
import { useLang } from "../translator/Translator";
import ruFlag from '../assets/img/flag/russia.png';
import uzFlag from '../assets/img/flag/uzbekistan.png';

const FloatingButtons = () => {
    const [open, setOpen] = useState(false);
    const { lang, setLang } = useLang();

    return (
        <div style={styles.container}>
            {/* Кнопки меню */}
            <div
                style={{
                    ...styles.menu,
                    transform: open ? "translateY(0)" : "translateY(20px)",
                    opacity: open ? 1 : 0,
                    pointerEvents: open ? 'auto' : 'none',
                    animation: open ? "fadeInUp 0.4s ease forwards" : "fadeOutDown 0.3s ease forwards"
                }}
            >
                <a href="https://www.instagram.com/enerjiproject?igsh=bmozcmUxNGMyMHRp" style={{ ...styles.button, backgroundColor: "#FF3338" }}>
                    <FaInstagram style={styles.icon} />
                </a>
            </div>

            <div
                style={{
                    ...styles.menu,
                    transform: open ? "translateY(0)" : "translateY(20px)",
                    opacity: open ? 1 : 0,
                    pointerEvents: open ? 'auto' : 'none',
                    animation: open ? "fadeInUp 0.5s ease forwards" : "fadeOutDown 0.4s ease forwards"
                }}
            >
                <a href="https://t.me/Enerjiprojectadmin" target="_blank" rel="noopener noreferrer" style={{ ...styles.button, backgroundColor: "#2196F3" }}>
                    <FaTelegramPlane style={styles.icon} />
                </a>
            </div>

            {/* Основная кнопка */}
            <button
                style={{ ...styles.button, backgroundColor: "#F44336", zIndex: 10000 }}
                onClick={() => setOpen(!open)}
                aria-label={open ? "Закрыть меню" : "Открыть меню"}
            >
                {open ? <FaTimes style={styles.icon} /> : <FaCommentDots style={styles.icon} />}
            </button>

            <div style={styles.languageSelector}>
                <button
                    style={{
                        ...styles.langButton,
                        border: lang === "uz" ? "2px solid #F44336" : "2px solid transparent",
                    }}
                    onClick={() => setLang("uz")}
                    aria-label="Uzbek"
                >
                    <img src={uzFlag} alt="Uzbekistan flag" style={styles.flag} />
                </button>
                <button
                    style={{
                        ...styles.langButton,
                        border: lang === "ru" ? "2px solid #F44336" : "2px solid transparent",
                    }}
                    onClick={() => setLang("ru")}
                    aria-label="Russian"
                >
                    <img src={ruFlag} alt="Russian flag" style={styles.flag} />
                </button>
            </div>

            {/* Добавим анимацию keyframes */}
            <style>
                {`
                    @keyframes fadeInUp {
                        0% {
                            opacity: 0;
                            transform: translateY(20px);
                        }
                        100% {
                            opacity: 1;
                            transform: translateY(0);
                        }
                    }
                    @keyframes fadeOutDown {
                        0% {
                            opacity: 1;
                            transform: translateY(0);
                        }
                        100% {
                            opacity: 0;
                            transform: translateY(20px);
                        }
                    }
                `}
            </style>
        </div>
    );
};

const styles = {
    container: {
        position: "fixed",
        bottom: "30px",
        right: "20px",
        display: "flex",
        flexDirection: "column-reverse",
        alignItems: "center",
        gap: "12px",
        zIndex: 9999,
    },
    menu: {
        transition: "opacity 0.3s ease, transform 0.3s ease",
    },
    button: {
        width: "60px",
        height: "60px",
        borderRadius: "50%",
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        boxShadow: "0 4px 6px rgba(0,0,0,0.2)",
        border: "none",
        cursor: "pointer",
        color: "#fff",
        fontSize: "24px",
        textDecoration: "none",
        position: 'relative',
        top: 0,
        left: 0,
    },
    icon: {
        fontSize: "28px",
    },
    languageSelector: {
        display: "flex",
        flexDirection: "row",
        gap: "10px",
        marginTop: "15px",
    },
    langButton: {
        backgroundColor: "#fff",
        borderRadius: "50%",
        padding: "6px",
        width: "44px",
        height: "44px",
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        cursor: "pointer",
        transition: "border 0.3s",
        border: "2px solid transparent",
    },
    flag: {
        width: "28px",
        height: "28px",
        borderRadius: "50%",
        objectFit: "cover",
        pointerEvents: "none",
        userSelect: "none",
    },
};

export default FloatingButtons;
