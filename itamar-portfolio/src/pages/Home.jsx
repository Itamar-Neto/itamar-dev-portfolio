import ThreeShapes from "../components/ThreeShapes/ThreeShapes.jsx";
import ScrollDown from "../components/ScrollDown/ScrollDown.jsx";

export default function Home() {
    return (
        <section
            id="home"
            className="mt-20 flex flex-col md:flex-row justify-between items-center w-full px-6 md:px-28 py-8 md:py-24 overflow-hidden"
        >
            {/* Texto */}
            <div className="flex flex-col w-full md:w-4/5 text-center md:text-left mt-16 md:mt-44">

                <p className="text-gray-500 text-lg mb-2">
                    Bem-vindo!
                </p>

                <h1 className="text-3xl md:text-5xl font-normal leading-tight">
                    Sou Itamar Henriques,
                    <br />
                    um desenvolvedor <em className="font-medium">Front-end.</em>
                </h1>

                <p className="text-gray-600 text-lg md:text-xl mt-4">
                    Apaixonado por codificar aplicações elegantes, objetivas e otimizadas.
                </p>
            </div>

            {/* Elementos visuais */}
            <ThreeShapes />

            <ScrollDown />
        </section>
    );
}