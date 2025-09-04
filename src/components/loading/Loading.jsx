import React, { useState } from "react";
import bezone from "../assets/img/video/video1.mp4";
import "../assets/css/app.min.css";
import "../assets/css/style.css";

function Loading({ children }) {
    const [showIntro, setShowIntro] = useState(true);

    const handleVideoEnd = () => {
        setShowIntro(false); // скрываем заставку и показываем сайт
    };

    return (
        <>
            {showIntro ? (
                <div className="fullscreen-video">
                    <video autoPlay muted onEnded={handleVideoEnd}>
                        <source src={bezone} type="video/mp4" />
                        Ваш браузер не поддерживает видео.
                    </video>
                </div>
            ) : (
                <div className="w-full min-h-screen">{children}</div>
            )}
        </>
    );
}

export default Loading;