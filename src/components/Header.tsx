import { Link } from "react-router-dom";
import { useState } from "react";
import { Menu, X } from "lucide-react";
import ThemeDropdown from "./ThemeDropdown";

export default function Header() {
    const [isOpen, setIsOpen] = useState(false);

    // Optional: pass a callback to ThemeDropdown to close the mobile menu
    const handleThemeChange = () => {
        setIsOpen(false);
    };

    return (
        <header className="fixed top-0 left-0 w-full bg-white text-black shadow z-50">
            <div className="max-w-7xl mx-auto px-6 py-4 flex justify-between items-center">
                <Link to="/" className="text-xl font-bold">MultiThemeApp</Link>

                {/* Desktop Navigation */}
                <nav className="hidden md:flex gap-6 items-center">
                    <Link to="/">Home</Link>
                    <Link to="/about">About</Link>
                    <Link to="/contact">Contact</Link>
                    <ThemeDropdown />
                </nav>

                {/* Mobile Menu Button */}
                <button
                    className="md:hidden focus:outline-none"
                    onClick={() => setIsOpen(!isOpen)}
                >
                    {isOpen ? <X size={24} /> : <Menu size={24} />}
                </button>
            </div>

            {/* Mobile Navigation Panel */}
            {isOpen && (
                <div className="md:hidden bg-white px-6 pb-4 flex flex-col gap-4">
                    <Link to="/" onClick={() => setIsOpen(false)}>Home</Link>
                    <Link to="/about" onClick={() => setIsOpen(false)}>About</Link>
                    <Link to="/contact" onClick={() => setIsOpen(false)}>Contact</Link>

                    {/* Pass the callback to ThemeDropdown */}
                    <ThemeDropdown onChangeTheme={handleThemeChange} />
                </div>
            )}
        </header>
    );
}
