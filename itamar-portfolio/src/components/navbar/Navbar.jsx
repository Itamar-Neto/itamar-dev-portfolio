import React, { useState } from 'react';
import './Navbar.css';
import LogoPortifolio from '../../../public/LogoPortifolio.svg'


export default function Navbar() {
    const [menuVisible, setMenuVisible] = useState(false);

    const toggleMenu = () => setMenuVisible(!menuVisible);

    return (
        <React.StrictMode>
            <nav className='fixed w-full flex justify-between bg-[#2e2e2e] shadow-[0px_3px_10px_#464646] p-[0.rem_4rem] position-fixed top-0 left-0 z-2 pr-[20px] '>

                <a href="#"><img src={LogoPortifolio} alt='Logo do portifólio' className='w-[50px] h-[50px] m-[10px] ml-[15px]' /></a>

                {/* Menu de navegação — desktop */}
                <ul className={`Lista MobileMenu ${menuVisible ? '' : 'show'}`}>
                    <li className='ItemLista'><a className='LinkItem' href="#home">Home</a></li>
                    <li className='ItemLista'><a className='LinkItem' href="#about">Sobre</a></li>
                    <li className='ItemLista'><a className='LinkItem' href="#technology">Tecnologias</a></li>
                    <li className='ItemLista'><a className='LinkItem' href="#projects">Projetos</a></li>
                    <li className='ItemLista'><a className='LinkItem' href="#contact">Contato</a></li>
                </ul>

                {/* Ícone hamburger — mobile/tablet */}
                <div className="hidden max-[950px]:flex fixed top-[3px] right-[5px]">
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

