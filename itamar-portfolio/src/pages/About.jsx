import FormImage from "../components/FormImage/FormImage.jsx"

export default function About() {
    return (
        <section
            id="about"
            className="
                flex flex-row flex-nowrap justify-around items-center
                w-full gap-[10px] px-[100px] py-[100px]
                max-[1220px]:px-[40px] max-[1220px]:gap-[10px] max-[1220px]:flex-col max-[1220px]:align-items-center max-[1220px]:pt-[70px] max-[1220px]:text-center
                max-[950px]:flex-col max-[950px]:text-center max-[950px]:pt-[100px] max-[950px]:gap-[40px]
                max-[670px]:justify-center max-[670px]:items-center max-[670px]:px-[80px]
            "
        >
            <FormImage />

            <div className="flex flex-col">

                {/* Sobre mim */}
                <div className="flex flex-col w-[640px] my-[25px] lg:w-[500px] md:w-[80vw] md:mx-[10px] sm:w-[80vw] pt-[15px]">
                    <h2 className="text-3xl font-semibold mb-4">Sobre mim</h2>

                    <p className="text-lg text-gray-700 leading-relaxed text-left">
                        A paixão por tecnologia sempre me acompanhou, e a arte foi o que me ensinou a dar vida a ideias.
                        Acredito que criar sistemas é uma forma de arte — cada projeto é uma tela em branco onde a
                        imaginação se materializa em soluções reais e funcionais.
                    </p>

                    <p className="text-lg text-gray-700 leading-relaxed text-left mt-4">
                        É a partir dessa fusão entre lógica e criatividade que transformo necessidades e sonhos em
                        produtos concretos. É a partir dessa fusão entre lógica e criatividade que transformo necessidades e sonhos em produtos concretos. Como estudante autodidata e aluno de Análise e Desenvolvimento de Sistemas na PUC Minas, dedico meu tempo para aprofundar meus estudos, construir projetos e evoluir constantemente como desenvolvedor.
                    </p>
                </div>

                {/* Currículo */}
                <div className="flex flex-col mt-5 md:items-center md:justify-center">
                    <h3 className="text-xl font-semibold mb-3">Currículo</h3>
                    <a
                        href=" https://drive.google.com/file/d/1ZkarUxHcYToY0tdMCQxtoH1vthMuqbIw/preview"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="
                        flex items-center justify-center gap-2
                        w-auto px-6 h-[52px]
                        text-[#b8b7b7] bg-[#3D3D3D]
                        border border-[#30303080] rounded-[10px]
                        no-underline cursor-pointer
                        transition-all duration-500
                        hover:bg-[#787878] hover:border-[rgba(170,170,170,0.1)]
                                    "
                    >
                        Visualizar Currículo
                    </a>
                </div>

            </div>
        </section>
    )
}