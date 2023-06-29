import { useState, useEffect } from "react";

export const useDarkSide = () => {
    const [theme, setTheme] = useState(localstorage.theme);

    const colorTheme = theme === "dark" ? "light" : "dark";

    useEffect(() => {
        const root = window.document.documentElement;
        root.classList.remove(colorTheme);
        root.classList.add(theme);
        localStorage.setItem('theme', theme);
    }, [theme, setTheme])

    return [colorTheme, setTheme];
};