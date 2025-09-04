import React, { useState, useEffect } from "react";
import axios from "axios";
import play from '../assets/img/product-img/play-button.png';

function VideoTabs() {
    const [activeTab, setActiveTab] = useState(0); // индекс вместо cat1/cat2/cat3
    const [links, setLinks] = useState([]);

    useEffect(() => {
        fetchLinks();
    }, []);

    const fetchLinks = async () => {
        try {
            const res = await axios.get("http://127.0.0.1:8000/api/sociallink/social-links/");
            setLinks(res.data);
        } catch (error) {
            console.error("Ошибка загрузки ссылок:", error);
        }
    };

    return (
        <div className="video-box3">
            <div className="filter-active-cat1">
                {links.length > 0 && (
                    <div className="filter-item">
                        <img
                            src={links[activeTab]?.icon || "https://via.placeholder.com/150"}
                            alt={links[activeTab]?.name}
                        />
                        <a
                            href={links[activeTab]?.url}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="play-btn style4 popup-video"
                        >
                            <img src={play} alt="play" className="dffd" />
                        </a>
                    </div>
                )}
            </div>

            <div className="video-tab-btn filter-menu-cat-active">
                {links.map((link, index) => (
                    <button
                        key={link.id}
                        className={activeTab === index ? "active" : ""}
                        onClick={() => setActiveTab(index)}
                    >
                        {link.name}
                    </button>
                ))}
            </div>
        </div>
    );
}

export default VideoTabs;