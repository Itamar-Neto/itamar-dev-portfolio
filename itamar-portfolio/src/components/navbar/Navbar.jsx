import LogoPortifolio from "../../../public/LogoPortifolio.svg";
import React, { useState } from "react";
import "./Navbar.css";

export default function Navbar() {
    const [menuVisible, setMenuVisible] = useState(false);

    const toggleMenu = () => setMenuVisible(!menuVisible);

    return (
        <nav className="w-full flex justify-between items-center bg-[#2e2e2e] shadow-[0px_3px_10px_#464646] py-2 px-20 fixed z-[2]">

            <a href="#">
                <img
                    src={LogoPortifolio}
                    alt="Logo do portifólio"
                    className="w-[55px] h-[55px]"
                />
            </a>

            {/* MENU */}
            <ul
                className={`MobileMenu ${menuVisible ? "show" : ""}`}
            >
                <li className="menu-item"><a className="menu-link" href="#home">Home</a></li>
                <li className="menu-item"><a className="menu-link" href="#sobre">Sobre</a></li>
                <li className="menu-item"><a className="menu-link" href="#tecnologias">Tecnologias</a></li>
                <li className="menu-item"><a className="menu-link" href="#projetos">Projetos</a></li>
                <li className="menu-item"><a className="menu-link" href="#contato">Contato</a></li>
            </ul>

            {/* HAMBURGER */}
            <div className="md:hidden">
                <label className="Hamburger">
                    <input
                        type="checkbox"
                        checked={menuVisible}
                        onChange={toggleMenu}
                    />

                    <svg viewBox="0 0 32 32">
                        <path
                            className="Line LineTopBottom"
                            d="M27 10 13 10C10.8 10 9 8.2 9 6 9 3.5 10.8 2 13 2 15.2 2 17 3.8 17 6L17 26C17 28.2 18.8 30 21 30 23.2 30 25 28.2 25 26 25 23.8 23.2 22 21 22L7 22"
                        />
                        <path className="Line" d="M7 16 27 16"></path>
                    </svg>
                </label>
            </div>
        </nav>
    );
}