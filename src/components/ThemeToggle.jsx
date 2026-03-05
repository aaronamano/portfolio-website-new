import { useState, useEffect } from 'react';

const THEMES = {
    DARK: 'dark',
    LIGHT: 'light'
};

export default function ThemeToggle() {
    const [theme, setTheme] = useState(() => {
        return localStorage.getItem('theme') || THEMES.DARK;
    });

    useEffect(() => {
        document.documentElement.setAttribute('data-theme', theme);
        localStorage.setItem('theme', theme);
    }, [theme]);

    const toggleTheme = () => {
        setTheme(prev => prev === THEMES.LIGHT ? THEMES.DARK : THEMES.LIGHT);
    };

    return (
        <button 
            className="theme-toggle" 
            onClick={toggleTheme} 
            aria-label="Toggle theme"
        >
            <i className={`fas ${theme === THEMES.LIGHT ? 'fa-sun' : 'fa-moon'}`}></i>
        </button>
    );
}
