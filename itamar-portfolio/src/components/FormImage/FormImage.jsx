import "./FormImage.css"
import FotoItamar from "../../assets/Imagens/ItamarHenriques.jpeg"


export default function FormImage() {
  return (
    <>
      <div
        id="FormImage"
        className="relative flex justify-center items-center h-72 w-72 mt-[45px] -rotate-[40deg]"
      >
        {/* Container da foto — z-index 1 para ficar acima dos balões */}
        <div
          id="ImageContainer"
          className="rounded-full h-72 w-72 flex justify-center items-center z-[1]"
        >
          <img
            src={FotoItamar}
            alt="Foto do Itamar com efeito preto e branco"
            id="ImageItamar"
            className="h-64 w-64 rounded-full grayscale rotate-[40deg]"
          />
        </div>

        {/* Balão circular direito */}
        <div id="Circle1" className="rounded-full h-[55px] w-[55px]" />

        {/* Balão oval esquerdo */}
        <div id="Circle2" className="h-[55px] w-[75px] rounded-[100px]" />

        {/* Barra superior */}
        <div
          id="B1"
          className="h-[58px] w-[250px] top-0 right-[-50px]"
          style={{ borderRadius: "200px 100px 100px 0" }}
        />

        {/* Barras animadas */}
        <div id="B2" className="h-[25px] w-[450px] rounded-[100px]" />
        <div id="B3" className="h-[20px] w-[100px] rounded-[100px]" />
        <div id="B4" className="h-[25px] w-[450px] rounded-[100px]" />

        {/* Barra inferior */}
        <div
          id="B5"
          className="h-[58px] w-[250px] bottom-0 left-[-50px]"
          style={{ borderRadius: "100px 0px 200px 100px" }}
        />

        <div id="B6" className="h-[35px] w-[100px] rounded-[100px]" />
      </div>
    </>
  )
}