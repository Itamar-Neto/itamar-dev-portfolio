import { useState, useEffect } from "react";

export default function ScrollToTop() {
    const [showBtn, setShowBtn] = useState(false);

    useEffect(() => {
        const handleScroll = () => setShowBtn(window.scrollY > 300);
        window.addEventListener("scroll", handleScroll);
        return () => window.removeEventListener("scroll", handleScroll);
    }, []);

    const scrollToTop = () => window.scrollTo({ top: 0, behavior: "smooth" });

    if (!showBtn) return null;

    return (
        <>
            <button
                onClick={scrollToTop}
                aria-label="Voltar ao topo"
                className="
          group
          fixed bottom-20 right-5
          flex items-center justify-center
          w-[45px] h-[45px]
          rounded-full bg-[#2e2e2e] hover:bg-[#1a1a1a]
          border-none cursor-pointer
          z-50
        "
            >
                <svg height="1.2em" class="arrow" viewBox="0 0 512 512">
                    <path
                        fill="#fff"
                        d="M233.4 105.4c12.5-12.5 32.8-12.5 45.3 0l192 192c12.5 12.5 12.5 32.8 0 45.3s-32.8 12.5-45.3 0L256 173.3 86.6 342.6c-12.5 12.5-32.8 12.5-45.3 0s-12.5-32.8 0-45.3l192-192z">
                    </path>
                </svg>
                <span
                    className="
            absolute -bottom-[13px]
            w-[100px]
            text-[0.7em] text-center
            opacity-0 group-hover:opacity-100
            transition-opacity duration-700
            text-[#333333] whitespace-nowrap
          "
                >
                    Voltar ao topo
                </span>
            </button>

            <style>{`
        @keyframes slide-in-bottom {
          0%   { transform: translateY(10px); opacity: 0; }
          100% { transform: translateY(0);    opacity: 1; }
        }
      `}</style>
        </>
    );
}