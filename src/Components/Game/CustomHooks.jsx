// src/Components/Game/CustomHooks.jsx
import { useState, useEffect } from 'react';
import { Device } from '@capacitor/device';
import translations from '../../languages/traductions.json';

const fontMap = {
    ar: "https://fonts.googleapis.com/css2?family=IBM+Plex+Sans+Arabic&display=swap",
    hi: "https://fonts.googleapis.com/css2?family=Tiro+Devanagari+Hindi&display=swap",
    ja: "https://fonts.googleapis.com/css2?family=Noto+Sans+JP&display=swap",
    ko: "https://fonts.googleapis.com/css2?family=Noto+Sans+KR&display=swap",
    ru: "https://fonts.googleapis.com/css2?family=Oswald&display=swap",
    tr: "https://fonts.googleapis.com/css2?family=Bellefair&display=swap"
};

export const useTranslation = (component) => {
    const [language, setLanguage] = useState('en');
    const [t, setT] = useState({});

    useEffect(() => {
        const getDeviceLanguage = async () => {
            try {
                const languageCode = await Device.getLanguageCode();
                const deviceLanguage = languageCode.value.slice(0, 2);
                setLanguage(isLanguageSupported(deviceLanguage) ? deviceLanguage : 'en');
            } catch (error) {
                console.error('Error getting device language:', error);
                setLanguage('en');
            }
        };
        getDeviceLanguage();
    }, []);

    useEffect(() => {
        if (translations.single[language] && translations.single[language][component]) {
            setT(translations.single[language][component]);
        } else {
            console.warn(`Translation not found for language: ${language}, component: ${component}`);
            setT(translations.single.en[component] || {});
        }

        // Cargar la fuente específica si es necesario
        if (fontMap[language]) {
            const link = document.createElement('link');
            link.href = fontMap[language];
            link.rel = 'stylesheet';
            document.head.appendChild(link);
        }
    }, [language, component]);

    const isLanguageSupported = (lang) => {
        return Object.keys(translations.single).includes(lang);
    };

    const translate = (key, fallback = '') => {
        return t[key] || fallback;
    };

    return translate;
};