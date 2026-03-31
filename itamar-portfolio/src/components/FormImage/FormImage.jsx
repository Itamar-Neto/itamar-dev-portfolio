import "./FormImage.css"
import "./FormImageResponsive.css"
import LogoPortifolio from "../../assets/Imagens/ItamarHenriques.jpeg"

export default function FormImage() {
  return (
    <>
      <div id="FormImage">
        <div id="ImageContainer">
          <img
            src={LogoPortifolio}
            alt="Foto do  Itamar com efeito preto e branco"
            id="ImageItamar"
          />
        </div>
        <div id="Circle1" />
        <div id="Circle2" />
        <div id="B1" />
        <div id="B2" />
        <div id="B3" />
        <div id="B4" />
        <div id="B5" />
        <div id="B6" />
      </div>
    </>
  )
}