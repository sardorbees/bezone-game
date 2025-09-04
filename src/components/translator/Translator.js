import React, {
    createContext,
    useContext,
    useState,
    useEffect,
} from "react";
import axios from "axios";

// Создаём контекст
const TranslationContext = createContext(null);

// Провайдер
export function TranslationProvider({ children }) {
    const [lang, setLangState] = useState("ru");
    const [translations, setTranslations] = useState({});

    // Установить язык и сохранить в localStorage
    const setLang = (newLang) => {
        localStorage.setItem("appLang", newLang);
        setLangState(newLang);
    };

    // Получить язык из localStorage при монтировании
    useEffect(() => {
        const savedLang = localStorage.getItem("appLang");
        if (savedLang) {
            setLangState(savedLang);
        }
    }, []);

    // Получить переводы при изменении языка
    useEffect(() => {
        const fetchTranslations = async () => {
            try {
                const res = await axios.get(
                    `https://django-admin-pro.onrender.com/api/translations/?lang=${lang}`
                );
                setTranslations(res.data || {});
            } catch (error) {
                console.error("Ошибка загрузки переводов:", error);
                setTranslations({});
            }
        };

        fetchTranslations();
    }, [lang]);

    return (
        <TranslationContext.Provider value={{ lang, setLang, translations }}>
            {children}
        </TranslationContext.Provider>
    );
}

// Хук
export function useLang() {
    const context = useContext(TranslationContext);
    if (!context) {
        console.warn("useLang должен использоваться внутри <TranslationProvider>");
        return { lang: "ru", setLang: () => { }, translations: {} }; // Фолбэк
    }
    return context;
}

// Компонент-переводчик
export function Translator({ tKey }) {
    const { translations } = useLang();
    return <>{translations[tKey] || tKey}</>;
}
