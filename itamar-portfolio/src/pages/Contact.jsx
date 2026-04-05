import ScrollToTop from "../components/ScrollToTop.jsx";
import LogoLinkedin from "../assets/Imagens/Linkedin.svg";
import LogoGithub from "../assets/Imagens/Github.svg";
import LogoWhatsapp from "../assets/Imagens/Whatsapp.svg";
import LogoInstagram from "../assets/Imagens/Instagram.svg";

const socialLinks = [
    {
        href: "https://www.linkedin.com/in/itamar-henriques/",
        src: LogoLinkedin,
        alt: "Logo Linkedin",
    },
    {
        href: "https://github.com/Itamar-Neto",
        src: LogoGithub,
        alt: "Logo GitHub",
    },
    {
        href: "https://w.app/contatoitamarhenriques",
        src: LogoWhatsapp,
        alt: "Logo Whatsapp",
    },
    {
        href: "https://www.instagram.com/itamar._.henriques/",
        src: LogoInstagram,
        alt: "Logo Instagram",
    },
];

export default function Contato() {

    return (
        <>
            <section
                id="contact"
                className="flex flex-col items-center justify-center w-full text-center py-[125px] pb-5 gap-5"
            >
                <h2 className="text-4xl font-semi">Contato</h2>

                <p className="text-2xl">Envie um e-mail para</p>

                <div className="flex items-center">
                    <a
                        href="mailto:itamar.henriques.r@gmail.com?subject=Contato pelo portifólio"
                        className="w-4/5 no-underline"
                    >
                        <h2 className="text-4xl font-bold cursor-pointer no-underline  hover:underline hover:text-(--color-text-email-hover)">itamar.henriques.r@gmail.com</h2>
                    </a>
                </div>

                <hr />

                <p className="text-2xl uppercase my-[15px]">Redes sociais</p>

                <div className="flex flex-row items-center justify-center gap-10 sm:gap-[40px]">
                    {socialLinks.map(({ href, src, alt }) => (
                        <a
                            key={alt}
                            href={href}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="
                flex items-center justify-center
                w-[85px] h-[85px]
                rounded-full shadow-md hover:shadow-xl transition bg-(--color-bg-icons)
                sm:w-[70px] sm:h-[70px]
              "
                        >
                            <img
                                src={src}
                                alt={alt}
                                className="
                  w-[50px] h-[50px]
                  transition-transform duration-500
                  hover:scale-110
                  sm:w-[40px] sm:h-[40px] 
                "
                            />
                        </a>
                    ))}
                </div>
            </section>

            <ScrollToTop />
        </>
    );
}
