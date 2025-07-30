import { Link } from "react-router-dom";
import ThemeDropdown from "./ThemeDropdown";

export default function Header() {
    return (
        <header className="fixed top-0 w-full flex justify-between items-center bg-white dark:bg-gray-900 px-6 py-4 shadow z-50">
            <Link to="/" className="text-xl font-bold">MultiThemeApp</Link>
            <nav className="flex gap-4">
                <Link to="/">Home</Link>
                <Link to="/about">About</Link>
                <Link to="/contact">Contact</Link>
                <ThemeDropdown />
            </nav>
        </header>
    );
}