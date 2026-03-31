import SoonMore from "../../../assets/Imagens/SoonMore.png"
import "./CardSoonMore.css"
export default function CardSoonMore() {
    return (
        <div id="CardSoonMore">
            <span id="ImageBase"><img src={SoonMore}
                alt="Imagem de uma xicara com a cor de fundo cinza" id="ImageAnimated" /></span>
            <p>Em breve, mais...</p>
        </div>
    )
}