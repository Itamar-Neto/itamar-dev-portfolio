import BallonText from "../components/BallonText"

export default function Technology() {
    return (
        <section id="technology" className="flex justify-center items-center flex-col gap-10 px-25 py-40 max-[950px]:p-0">
            <div id="TechnologyInformation" className="text-center  w-[60%] max-[950px]:text-center">
                <h2 className="text-4xl font-semi mb-4">Tecnologias e Competências</h2>
                <p className="text-center mt-4 max-[950px]:text-justify">Acredito que compartilhar ideias e soluções acelera o aprendizado e fortalece o desenvolvimento em equipe. Estou em constante evolução como desenvolvedor, buscando aprimorar minhas habilidades técnicas diariamente e aplicar boas práticas no uso das tecnologias que domino.</p>
            </div>
            <div id="Skills" className="flex flex-row flex-wrap justify-center items-center w-[70%] gap-5 bg-(--color-bg-containers) rounded-[45px] p-15 shadow-[0_0_20px_rgba(0,0,0,0.6)] max-[950px]:p-30">
                <BallonText text="HTML5" />
                <BallonText text="CSS3" />
                <BallonText text="JavaScript" />
                <BallonText text="React" />
                <BallonText text="Tailwind CSS" />
                <BallonText text="C#" />
                <BallonText text="Git" />
                <BallonText text="GitHub" />
                <BallonText text="Scrum" />
                <BallonText text="Kanban" />
                <BallonText text="VS Code" />
                <BallonText text="Figma" />
                <BallonText text="Trello" />
                <BallonText text="Lucidchart" />
                <BallonText text="Illustrator" />
                <BallonText text="Photoshop" />
            </div>
        </section>
    )
}