import FotoItamar from "../assets/Imagens/ItamarHenriques.jpeg"

const formImageStyles = `
  /* Estilos compartilhados entre todos os filhos diretos */
  #FormImage > div {
    position: absolute;
    background-color: #333333;
    background-image: radial-gradient(#242424 5px, transparent 0.5px);
    background-size: 20px 20px;
    animation-duration: 4s;
    animation-iteration-count: infinite;
  }

  #Circle1 { animation-name: Circle1; }
  #Circle2 { animation-name: Circle2; }
  #B2      { animation-name: B2; }
  #B3      { animation-name: B3; }
  #B4      { animation-name: B4; }
  #B6      { animation-name: B6; }

  @keyframes Circle1 {
    0%, 100% { top: 0; right: -112px; }
    50%       { top: 0; right: -128px; }
  }
  @keyframes Circle2 {
    0%, 100% { bottom: 0; left: -145px; }
    50%       { bottom: 0; left: -130px; }
  }
  @keyframes B2 {
    0%, 100% { top: 85px; right: -130px; }
    50%       { top: 85px; right: -110px; }
  }
  @keyframes B3 {
    0%, 100% { top: 150px; right: -40px; }
    50%       { top: 150px; right: -60px; }
  }
  @keyframes B4 {
    0%, 100% { bottom: 80px; right: -80px; }
    50%       { bottom: 80px; right: -60px; }
  }
  @keyframes B6 {
    0%, 100% { bottom: 130px; left: -80px; }
    50%       { bottom: 130px; left: -50px; }
  }

  /* ── Responsivo ── */
  @media (max-width: 1220px) {
    #FormImage   { transform: rotate(0deg); margin-top: 20px; }
    #ImageItamar { transform: rotate(0deg); }
  }

  @media (max-width: 950px) {
    #FormImage   { transform: rotate(0deg); margin-top: 0; margin-bottom: 20px; }
    #ImageItamar { transform: rotate(0deg); }
  }

  @media (max-width: 590px) {
    #FormImage    { height: 15rem; width: 15rem; }
    #ImageContainer { height: 15rem; width: 15rem; }
    #ImageItamar  { height: 13rem; width: 13rem; }
    #Circle2      { height: 52px;  width: 70px;  }
    #B1           { height: 55px;  width: 220px; }
    #B2           { height: 20px;  width: 400px; }
    #B3           { height: 15px;  width: 100px; }
    #B4           { height: 20px;  width: 390px; }
    #B5           { height: 55px;  width: 220px; }
    #B6           { height: 30px;  width: 100px; }

    @keyframes Circle1 {
      0%, 100% { top: 0; right: -109px; }
      50%       { top: 0; right: -120px; }
    }
    @keyframes Circle2 {
      0%, 100% { bottom: 0; left: -123px; }
      50%       { bottom: 0; left: -133px; }
    }
    @keyframes B2 {
      0%, 100% { top: 70px; right: -130px; }
      50%       { top: 70px; right: -110px; }
    }
    @keyframes B3 {
      0%, 100% { top: 125px; right: -40px; }
      50%       { top: 125px; right: -60px; }
    }
    @keyframes B4 {
      0%, 100% { bottom: 70px; right: -80px; }
      50%       { bottom: 70px; right: -60px; }
    }
    @keyframes B6 {
      0%, 100% { bottom: 110px; left: -80px; }
      50%       { bottom: 110px; left: -50px; }
    }
  }

  @media (max-width: 511px) {
    #FormImage   { transform: rotate(-40deg); margin-top: 60px; margin-bottom: 20px; }
    #ImageItamar { transform: rotate(40deg); }
  }
`

export default function FormImage() {
  return (
    <>
      <style>{formImageStyles}</style>

      <div
        id="FormImage"
        className="relative flex justify-center items-center h-72 w-72 mt-[45px] -rotate-40"
      >
        {/* Container da foto — z-index 1 para ficar acima dos balões */}
        <div
          id="ImageContainer"
          className="rounded-full h-72 w-72 flex justify-center items-center z-1"
        >
          <img
            src={FotoItamar}
            alt="Foto do Itamar com efeito preto e branco"
            id="ImageItamar"
            className="h-64 w-64 rounded-full grayscale rotate-40"
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