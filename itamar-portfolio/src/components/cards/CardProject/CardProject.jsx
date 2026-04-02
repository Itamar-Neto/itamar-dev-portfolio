import "./CardProject.css"
export default function CardProject({ src, alt, nomeProjeto, onClick }) {
    return (
        <div id="Card">
            <div id="ImageBase">
                <img src={src} alt={alt}
                    id="DropActive" />
                <div id="Drop">
                    <button type="button" onClick={onClick} id="OverlayButton ShowScreen">Ver mais</button>
                </div>
            </div>
            <p>{nomeProjeto}</p>
        </div>
    )
}

