import { useState, useEffect } from "react";
import "./ProjectModal.css";
import ShareIcon from "../../assets/Imagens/ShareOutline.svg";

export default function ProjectModal({
    isOpen,
    onClose,
    images = [],
    projectName = "",
    techs = [],
    projectUrl = "#"
}) {
    const [currentItem, setCurrentItem] = useState(0);

    useEffect(() => {
        const handleKey = (e) => {
            if (e.key === "Escape" && isOpen) onClose();
        };
        window.addEventListener("keydown", handleKey);
        return () => window.removeEventListener("keydown", handleKey);
    }, [isOpen, onClose]);

    if (!isOpen) return null;

    const total = images.length;

    const handlePrev = () =>
        setCurrentItem((prev) => (prev - 1 + total) % total);

    const handleNext = () =>
        setCurrentItem((prev) => (prev + 1) % total);

    return (
        <section
            className="fixed inset-0 flex items-center justify-center bg-[#1a1a1aa1] z-50"
            onClick={(e) => e.target === e.currentTarget && onClose()}
            aria-modal="true"
            role="dialog"
            aria-label={`Detalhes do projeto ${projectName}`}
        >
            <div className="flex flex-col max-w-[620px] w-full rounded-[2rem] border bg-(--color-bg-projectmodal) border-(--color-border-projectmodal) m-5 p-[10px] gap-[10px]">

                {/* ── Swiper ── */}
                <div className="w-full relative rounded-[20px] bg-(--color-bg-swiper) min-h-[220px] overflow-hidden">

                    {total > 1 && (
                        <div className="flex w-full items-center justify-between absolute top-1/2 -translate-y-1/2 z-[2] pointer-events-none">
                            <button
                                className="pointer-events-auto text-white font-bold border-none rounded-[3px] bg-(--color-bg-btn-swiper) cursor-pointer px-4 py-[15px] select-none transition-colors duration-300 hover:bg-(--color-bg-btn-swiper-hover)"
                                onClick={handlePrev}
                                aria-label="Imagem anterior"
                            >
                                &#10094;
                            </button>
                            <button
                                className="pointer-events-auto text-white font-bold border-none rounded-[3px] bg-(--color-bg-btn-swiper) cursor-pointer px-4 py-[15px] select-none transition-colors duration-300 hover:bg-(--color-bg-btn-swiper-hover)"
                                onClick={handleNext}
                                aria-label="Próxima imagem"
                            >
                                &#10095;
                            </button>
                        </div>
                    )}

                    <div className="flex rounded-[20px] w-full h-full">
                        {images.map((img, idx) => (
                            <img
                                key={idx}
                                src={img.src}
                                alt={img.alt}
                                className={`w-full h-full object-cover rounded-[10px] flex-shrink-0 ${
                                    idx === currentItem
                                        ? "block pm-slide-active"
                                        : "hidden"
                                }`}
                                aria-hidden={idx !== currentItem}
                            />
                        ))}
                    </div>

                    {total > 1 && (
                        <div
                            className="flex justify-center gap-[6px] absolute bottom-2 left-1/2 -translate-x-1/2 z-[2]"
                            aria-hidden="true"
                        >
                            {images.map((_, idx) => (
                                <button
                                    key={idx}
                                    className={`w-2 h-2 rounded-full border-none cursor-pointer p-0 transition-colors duration-300 ${
                                        idx === currentItem
                                            ? "bg-[rgba(255,255,255,0.9)]"
                                            : "bg-[rgba(255,255,255,0.4)]"
                                    }`}
                                    onClick={() => setCurrentItem(idx)}
                                    aria-label={`Slide ${idx + 1}`}
                                />
                            ))}
                        </div>
                    )}
                </div>

                {/* ── Título ── */}
                <h4 className="text-2xl text-white m-0">{projectName}</h4>
                <hr className="w-full border-0 border-t border-[#3a3a3a] m-0" />

                {/* ── Tecnologias ── */}
                <div className="flex justify-start flex-wrap gap-[10px]">
                    {techs.map((tech, idx) => (
                        <span
                            key={idx}
                            className="inline-block text-[#b2b2b2] text-base rounded-[10px] bg-[#3d3d3d] px-[0.6em] py-[0.4em] cursor-default transition-colors duration-200 hover:bg-[#5a5a5a]"
                        >
                            {tech}
                        </span>
                    ))}
                </div>

                {/* ── Link ── */}
                <div className="flex justify-start items-center flex-row gap-[10px] my-[5px]">
                    <a
                        href={projectUrl}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="text-white underline flex items-center gap-1"
                    >
                        {projectUrl.replace(/^https?:\/\//, "")}
                        <img src={ShareIcon} alt="Compartilhar" className="w-5" />
                    </a>
                </div>

                {/* ── Fechar ── */}
                <button
                    type="button"
                    className="h-[52px] flex justify-center items-center w-full text-white cursor-pointer bg-[rgba(171,171,171,0.1)] rounded-[10px] border border-[hsla(0,39%,63%,0.1)] mb-[10px] p-[10px] no-underline transition-colors duration-500 text-base hover:bg-[#424040]"
                    onClick={onClose}
                >
                    Fechar
                </button>
            </div>
        </section>
    );
}