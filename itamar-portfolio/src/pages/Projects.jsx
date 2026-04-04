import CardProject from "../components/CardProject.jsx";
import CardSoonMore from "../components/CardSoonMore.jsx";
import LogoCard from "../assets/Imagens/LogoCard.jpg";
import ProjectModal from "../components/Projectmodal/ProjectModal.jsx";

import { useState } from "react";


/* ── Dados dos projetos ────────────────────────────────────────────────────
   Cada objeto representa um projeto. Para adicionar um novo projeto ao
   portfólio, basta incluir mais um objeto neste array.
   ───────────────────────────────────────────────────────────────────────── */

// Importação das imagens para o projeto "Portfólio"
import SliderLogo from "../assets/ProjectsImage/PortifolioItamar/LogoSlide.png";
import SliderPc from "../assets/ProjectsImage/PortifolioItamar/PcPortifolio.png";
import SliderPhone from "../assets/ProjectsImage/PortifolioItamar/SmarphonePortifolio.png";

const PROJECTS = [
    {
        id: "portfolio",
        /* Imagem exibida no CardProject */
        cardSrc: LogoCard,
        cardAlt: "Foto da logo do site com o fundo cinza",
        nomeProjeto: "Portfólio",

        /* Dados exibidos no ProjectModal */

        images: [
            {
                src: SliderLogo,
                alt: "Imagem da Logo para o slide",
            },
            {
                src: SliderPc,
                alt: "Imagem com o fundo azul e um Mac com a foto do site na tela",
            },
            {
                src: SliderPhone,
                alt: "Imagem com o fundo azul e Smartphone com a foto do site na tela",
            },
        ],
        techs: [
            "JavaScript",
            "HTML 5",
            "CSS 3",
            "React",
            "Tailwind CSS",
            "Visual Studio Code",
            "Figma",
            "GitHub"
        ],
        projectUrl: "https://portifolioitamar.com.br",
    },

    /* ── Adicionear novos projetos ── */
    // {
    //   id: "outro-projeto",
    //   cardSrc: OutraImagem,
    //   cardAlt: "...",
    //   nomeProjeto: "Nome do Projeto",
    //   images: [ ... ],
    //   techs: [ ... ],
    //   projectUrl: "https://...",
    //   shareIcon: "...",
    // },
];

export default function Projects() {
    const [selectedProject, setSelectedProject] = useState(null);

    const openModal = (project) => setSelectedProject(project);
    const closeModal = () => setSelectedProject(null);

    return (
        <section
            id="projects"
            className="w-full flex justify-around items-center flex-col px-25 py-25 pt-32 overflow-x-hidden gap-5 max-[950px]:text-center"
        >
            <h2 className="text-4xl font-semi mb-4">Projetos</h2>

            <ProjectModal
                key={selectedProject?.id ?? "closed"}
                isOpen={!!selectedProject}
                onClose={closeModal}
                images={selectedProject?.images ?? []}
                projectName={selectedProject?.nomeProjeto ?? ""}
                techs={selectedProject?.techs ?? []}
                projectUrl={selectedProject?.projectUrl ?? "#"}
                shareIcon={selectedProject?.shareIcon}
            />

            <div className="w-4/5 flex justify-center items-center rounded-[40px] bg-(--color-bg-containers) p-[30px] relative shadow-[0_0_20px_rgba(0,0,0,0.6)] max-[860px]:p-20 overflow-hidden">
                <div
                    className="flex flex-row flex-nowrap gap-[50px]
                    overflow-x-auto justify-center w-full
                    pl-3 pr-3 pb-3
                    [&::-webkit-scrollbar]:h-2
                    [&::-webkit-scrollbar]:bg-(--color-scrollbar-bg)
                    [&::-webkit-scrollbar]:rounded-[10px]
                    [&::-webkit-scrollbar-thumb]:bg-(--color-scrollbar-thumb)
                    [&::-webkit-scrollbar-thumb]:rounded-[10px] 
                    max-[910px]:pl-3 max-[910px]:pr-3 max-[910px]:overflow-x-auto
                    max-[910px]:justify-start max-[910px]:w-full
                    max-[910px]:scrollbar-thin max-[910px]:scrollbar-thumb-gray-600
                    max-[910px]:scrollbar-track-transparent max-[910px]:rounded-[10px]"
                >
                    {PROJECTS.map((project) => (
                        <CardProject
                            key={project.id}
                            src={project.cardSrc}
                            alt={project.cardAlt}
                            nomeProjeto={project.nomeProjeto}
                            onClick={() => openModal(project)}
                        />
                    ))}

                    <CardSoonMore />
                </div>
            </div>
        </section>
    );
}