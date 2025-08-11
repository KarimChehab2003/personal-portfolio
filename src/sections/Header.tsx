import { useState } from "react";
import { navbarLinks, themes } from "../constants";
import type { NavItem } from "../types";
import { FaBars, FaWandMagicSparkles } from "react-icons/fa6";

function Header() {
    const [currentTheme, setCurrentTheme] = useState<string>(document.documentElement.getAttribute("data-theme") || "myPastelDark");

    const scrollToSection = (id: string) => {
        document.getElementById(id)?.scrollIntoView({ behavior: "smooth" });
    };

    const pickRandomTheme = () => {
        let newTheme;
        do {
            newTheme = themes[Math.floor(Math.random() * themes.length)]
        } while (newTheme === currentTheme);

        document.documentElement.setAttribute("data-theme", newTheme);
        setCurrentTheme(newTheme);
    }

    return (
        <header className="navbar bg-base-100/70 backdrop-blur-md shadow-md p-4 fixed top-0 z-40">
            {/* Logo */}
            <button
                onClick={() => scrollToSection("home")}
                className="navbar-start text-xl font-mono tracking-wider cursor-pointer"
            >
                karim.dev
            </button>

            {/* Nav Links */}
            <div className="navbar-center">
                <ul className="menu menu-horizontal hidden md:flex">
                    {navbarLinks.map(({ id, label }: NavItem) => (
                        <li key={id}>
                            <a onClick={() => scrollToSection(id)}>{label}</a>
                        </li>
                    ))}
                </ul>
            </div>

            {/* Magic Wand & Dropdown */}
            <div className="navbar-end">
                <div className="flex md:hidden ">
                    {/* Magic Wand */}
                    <button onClick={pickRandomTheme} className="btn btn-ghost text-xl">
                        <FaWandMagicSparkles />
                    </button>

                    {/* Dropdown Button */}
                    <div className="dropdown dropdown-end">
                        <label tabIndex={0} className="btn btn-ghost text-lg">
                            <FaBars />
                        </label>
                        <ul
                            tabIndex={0}
                            className="menu menu-sm dropdown-content mt-3 z-[1] p-2 shadow bg-base-100 rounded-box w-52"
                        >
                            {navbarLinks.map(({ id, label }: NavItem) => (
                                <li key={id}>
                                    <a onClick={() => scrollToSection(id)}>{label}</a>
                                </li>
                            ))}
                        </ul>
                    </div>
                </div>

                <button onClick={pickRandomTheme} className="btn btn-ghost text-xl hidden md:block">
                    <FaWandMagicSparkles />
                </button>
            </div>
        </header>
    );
}

export default Header;
