import { useState, useEffect } from "react";
import ThreeShapes from "../components/ThreeShapes.jsx"
import ScrollDown from "../components/ScrollDown/ScrollDown.jsx"

const textos = ["Desenvolvedor em Formação"];

export default function Home() {
    const [textoAtual, setTextoAtual] = useState("");
    const [indiceTexto, setIndiceTexto] = useState(0);
    const [digitando, setDigitando] = useState(true);

    useEffect(() => {
        const alvo = textos[indiceTexto];
        let timeout;

        if (digitando) {
            if (textoAtual.length < alvo.length) {
                timeout = setTimeout(() => {
                    setTextoAtual(alvo.slice(0, textoAtual.length + 1));
                }, 80);
            } else {
                timeout = setTimeout(() => setDigitando(false), 1500);
            }
        } else {
            if (textoAtual.length > 0) {
                timeout = setTimeout(() => {
                    setTextoAtual(textoAtual.slice(0, -1));
                }, 40);
            } else {
                timeout = setTimeout(() => {
                    setIndiceTexto((i) => (i + 1) % textos.length);
                    setDigitando(true);
                }, 0);
            }
        }

        return () => clearTimeout(timeout);
    }, [textoAtual, digitando, indiceTexto]);

    return (
        <>
            <section
                id="home"
                className="
                mt-[0rem] flex justify-center items-center
                h-auto w-full overflow-hidden py-[2rem] pb-[5rem] pt-[4rem]
                lg:flex-row lg:flex-nowrap lg:justify-between lg:pt-[5px] lg:pb-[6.25rem]
            "
            >
                <div

                    className="
                    flex flex-col text-left mt-[24px] pt-[2rem]
                    lg:text-left lg:h-[18.75rem] lg:w-4/5 lg:mt-[11rem] lg:ml-[7rem]
                "
                >
                    <p className=" lg:text-xl">
                        Olá, eu sou
                    </p>

                    <h1 className="text-3xl lg:text-5xl font-bold leading-tight text-(--color-text)">
                        Itamar Henriques,
                    </h1>

                    <h2 className="text-3xl lg:text-4xl font-semibold leading-tight text-(--color-text)">
                        Um <em>{textoAtual}</em>
                        <span className="animate-pulse text-(--color-cursor)">|</span>
                    </h2>

                    <p className="mt-4 max-w-[500px]">
                        Estudante de Análise e Desenvolvimento de Sistemas na PUC Minas, construindo projetos e desenvolvendo minhas habilidades.
                    </p>

                    <div className="flex gap-4 mt-6">
                        <a
                            href="#projects"
                            className="px-6 py-2 bg-(--color-btn) text-white text-sm font-medium rounded hover:bg-(--color-btn-hover) transition-colors duration-300"
                        >
                            Ver Projetos
                        </a>
                        <a
                            href="#contact"
                            className="px-6 py-2 border border-(--color-border) text-sm font-medium rounded hover:bg-(--color-btn) hover:text-white transition-colors duration-300"
                        >
                            Contato
                        </a>
                    </div>
                </div>

                <ThreeShapes />
            </section>

            <ScrollDown />
        </>
    )
}