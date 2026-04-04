import React, { useState } from 'react';
import './Navbar.css';
import LogoPortifolio from '../../../public/LogoPortifolio.svg'

const navLinks = [
    { href: '#home', label: 'Home' },
    { href: '#about', label: 'Sobre' },
    { href: '#technology', label: 'Tecnologias' },
    { href: '#projects', label: 'Projetos' },
    { href: '#contact', label: 'Contato' },
];

export default function Navbar() {
    const [menuVisible, setMenuVisible] = useState(false);
    const toggleMenu = () => setMenuVisible(!menuVisible);

    return (
        <React.StrictMode>
            <nav className="fixed w-full flex justify-between items-center bg-(--color-bg-navbar) shadow-[0px_3px_10px_#464646] top-0 left-0 z-50 pr-5">

                <a href="#">
                    <img src={LogoPortifolio} alt="Logo do portifólio" className="w-[50px] h-[50px] m-[10px] ml-[15px]" />
                </a>

                {/* Menu de navegação */}
                <ul className={`
                    MobileMenu
                    flex list-none text-white gap-6
                    max-[950px]:flex-col max-[950px]:items-center max-[950px]:justify-around
                    max-[950px]:w-[250px] max-[950px]:h-auto
                    max-[950px]:fixed max-[950px]:top-[85px] max-[950px]:right-[5px]
                    max-[950px]:bg-(--color-bg-navbar) max-[950px]:rounded-b-[15px]
                    max-[950px]:shadow-[10px_10px_15px_#464646] max-[950px]:p-[25px]
                    ${!menuVisible ? 'max-[950px]:hidden' : ''}
                `}>
                    {navLinks.map(({ href, label }) => (
                        <li key={href} className="flex items-center transition-colors duration-300 hover:text-(--color-text-navbar-hover)">
                            <a
                                href={href}
                                className="
                                    relative text-[1.30rem] font-normal no-underline
                                    before:content-[''] before:absolute before:bottom-[-20px] before:left-0
                                    before:w-full before:h-[5px] before:bg-(--color-bg-before)
                                    before:opacity-0 before:rounded-t-[8px]
                                    before:transition-all before:duration-300
                                    hover:before:opacity-100 hover:before:bottom-[-3px]
                                "
                            >
                                {label}
                            </a>
                        </li>
                    ))}
                </ul>

                {/* Ícone hamburger — mobile/tablet */}
                <div className="hidden max-[950px]:flex fixed top-[12px] right-[10px]">
                    <label className="Hamburger cursor-pointer">
                        <input type="checkbox" className="hidden" checked={menuVisible} onChange={toggleMenu} />
                        <svg viewBox="0 0 32 32">
                            <path className="Line LineTopBottom"
                                d="M27 10 13 10C10.8 10 9 8.2 9 6 9 3.5 10.8 2 13 2 15.2 2 17 3.8 17 6L17 26C17 28.2 18.8 30 21 30 23.2 30 25 28.2 25 26 25 23.8 23.2 22 21 22L7 22" />
                            <path className="Line" d="M7 16 27 16" />
                        </svg>
                    </label>
                </div>
            </nav>
        </React.StrictMode>
    )
}