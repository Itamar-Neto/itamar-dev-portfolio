export default function CardProject({ src, alt, nomeProjeto, onClick }) {
    return (
        <div className="h-[390px] w-[320px] flex flex-col justify-around items-center text-center rounded-[10px] bg-(--color-bg-cards) p-[15px] gap-[5px]">

            {/* Wrapper da imagem com group para o hover funcionar */}
            <div className="group relative h-[280px] w-[290px] flex justify-center bg-(--color-card-hover)">

                <img
                    src={src}
                    alt={alt}
                    className="h-full w-full object-cover"
                />

                {/* Overlay — aparece no hover do grupo pai */}
                <div
                    className="absolute inset-0 flex justify-center items-end p-4 opacity-0 group-hover:opacity-100 transition-opacity duration-300"
                    style={{ background: "linear-gradient(#8b8b93a5, #1d1d20a5)" }}
                >
                    <button
                        type="button"
                        onClick={onClick}
                        className="
                            h-[20%] w-full
                            text-white cursor-pointer
                            rounded-[10px]
                            border border-(--color-border-cards)
                            bg-(--color-bg-btn-cards)
                            p-[10px]
                            transition-all duration-500
                            hover:border-(--color-border-cards-hover)
                            hover:bg-(--color-bg-cards-hover)
                            hover:text-(--color-text-cards)
                        "
                    >
                        Ver mais
                    </button>
                </div>
            </div>

            <p>{nomeProjeto}</p>
        </div>
    )
}