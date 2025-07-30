import { useContext } from "react";
import { ThemeContext } from "../context/ThemeContext";

export default function ThemeDropdown({ onChangeTheme }: any) {

    const { theme, setTheme } = useContext(ThemeContext);

    const handleThemeSelect = (theme: string) => {
        // Apply theme (you can customize this part)
        localStorage.setItem("theme", theme);
        document.documentElement.className = theme;

        // Close mobile menu if callback is provided
        onChangeTheme?.();
    };

    return (
        <>
            <label htmlFor="theme-select">Select Theme:</label>
            <select id="theme-select" className="border p-1 rounded" value={theme} onChange={(e) => setTheme(e.target.value as any)}>
                <option value="theme1">Theme 1</option>
                <option value="theme2">Theme 2</option>
                <option value="theme3">Theme 3</option>
            </select>
        </>
    );
}
