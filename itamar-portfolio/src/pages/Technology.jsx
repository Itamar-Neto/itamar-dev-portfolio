import BallonText from "../components/BallonText"

export default function Technology() {
    return (
        <section id="technology" className="flex justify-center items-center flex-col gap-10 pt-[100px] pb-[100px] max-[950px]:p-[0]">
            <div id="TechnologyInformation" className="text-center w-[60%] max-[950px]:text-center">
                <h2 className="text-3xl font-semibold mb-4">Skills e Determinação</h2>
                <p className="text-lg text-gray-700 leading-relaxed text-center mt-4 max-[950px]:text-justify">Acredito que compartilhar ideias e soluções acelera o aprendizado e fortalece o desenvolvimento em equipe. Estou em constante evolução como desenvolvedor, buscando aprimorar minhas habilidades técnicas diariamente e aplicar boas práticas no uso das tecnologias que domino.</p>
            </div>
            <div id="Skills" className="flex justify-center items-center  w-[70%] gap-5 flex-row flex-wrap bg-[#333333] rounded-[45px] p-20 max-[950px]:p-30">
                <BallonText text="HTML5" />
                <BallonText text="CSS3" />
                <BallonText text="JavaScript" />
                <BallonText text="React" />
                <BallonText text="C#" />
                <BallonText text="Git" />
                <BallonText text="GitHub" />
                <BallonText text="VS Code" />
                <BallonText text="Figma" />
                <BallonText text="Lucidchart" />
                <BallonText text="Illustrator" />
                <BallonText text="Photoshop" />
            </div>
        </section>
    )
}