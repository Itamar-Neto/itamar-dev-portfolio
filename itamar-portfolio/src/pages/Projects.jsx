import CardProject from "../components/cards/CardProject/CardProject.jsx";
import CardSoonMore from "../components/cards/CardSoonMore/CardSoonMore.jsx";
import LogoCard from "../assets/Imagens/LogoCard.png";


export default function Projects() {
    return (
        <section id="projects" className="w-full flex justify-around items-center flex-col px-25 py-35 pt-30 overflow-x-hidden gap-5 max-[950px]:text-center">

            <h2 className="text-3xl font-semibold mb-4">Projetos</h2>

            <div className="w-4/5 flex justify-center items-center rounded-[40px] bg-[#333333] p-[30px] relative shadow-[0_0_20px_rgba(0,0,0,0.6)] max-[860px]:p-20">
                <div className="flex justify-center flex-row flex-nowrap gap-[50px] 
                // Estilos para telas menores que 910px
                max-[910px]:pl-3 max-[910px]:pr-3 max-[910px]:overflow-x-auto max-[910px]:justify-start max-[910px]:w-full max-[910px]:scrollbar-thin max-[910px]:scrollbar-thumb-gray-600 max-[910px]:scrollbar-track-transparent max-[910px]:rounded-[10px]">

                    <CardProject src={LogoCard} alt="Foto da logo do site com o fundo cinza" nomeProjeto="Portfólio" />

                    <CardSoonMore />

                </div>
            </div>
        </section>
    );
}