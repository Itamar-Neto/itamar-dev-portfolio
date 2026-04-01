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
            className="pm-overlay"
            onClick={(e) => e.target === e.currentTarget && onClose()}
            aria-modal="true"
            role="dialog"
            aria-label={`Detalhes do projeto ${projectName}`}
        >

            <div className="pm-card">

                <div className="pm-swiper">

                    {total > 1 && (
                        <div className="pm-swiper-controls">
                            <button
                                className="pm-control pm-prev"
                                onClick={handlePrev}
                                aria-label="Imagem anterior"
                            >
                                &#10094;
                            </button>
                            <button
                                className="pm-control pm-next"
                                onClick={handleNext}
                                aria-label="Próxima imagem"
                            >
                                &#10095;
                            </button>
                        </div>
                    )}

                    <div className="pm-slides">
                        {images.map((img, idx) => (
                            <img
                                key={idx}
                                src={img.src}
                                alt={img.alt}
                                className={`pm-slide-img ${idx === currentItem ? "pm-slide-active" : ""}`}
                                aria-hidden={idx !== currentItem}
                            />
                        ))}
                    </div>

                    {total > 1 && (
                        <div className="pm-dots" aria-hidden="true">
                            {images.map((_, idx) => (
                                <button
                                    key={idx}
                                    className={`pm-dot ${idx === currentItem ? "pm-dot-active" : ""}`}
                                    onClick={() => setCurrentItem(idx)}
                                    aria-label={`Slide ${idx + 1}`}
                                />
                            ))}
                        </div>
                    )}
                </div>

                <h4 className="pm-title">{projectName}</h4>
                <hr className="pm-divider" />

                <div className="pm-techs">
                    {techs.map((tech, idx) => (
                        <span key={idx} className="pm-tech-tag">
                            {tech}
                        </span>
                    ))}
                </div>

                <div className="pm-link-row">
                    <a
                        href={projectUrl}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="pm-link flex"
                    >
                        {projectUrl.replace(/^https?:\/\//, "")}

                        <img src={ShareIcon} alt="Compartilhar" className="pm-share-icon" />

                    </a>

                </div>

                <button type="button" className="pm-close-btn" onClick={onClose}>
                    Fechar
                </button>
            </div>
        </section>
    );
}