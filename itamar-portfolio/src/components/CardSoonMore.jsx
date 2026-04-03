import SoonMore from "../assets/Imagens/SoonMore.png"

export default function CardSoonMore() {
    return (
        <div className="h-[390px] w-[320px] flex flex-col justify-around items-center text-center rounded-[10px] bg-[#e7e5e5] p-[15px] gap-[5px]">

            <span className="relative h-[280px] w-[290px] flex justify-center bg-[#adadad]">
                <img
                    src={SoonMore}
                    alt="Imagem de uma xicara com a cor de fundo cinza"
                    className="h-full w-full object-cover animate-pulse"
                />
            </span>

            <p>Em breve, mais...</p>
        </div>
    )
}