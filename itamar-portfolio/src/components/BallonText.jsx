export default function BallonText(prop) {
    return (
        <p id="Text" className="inline-block h-auto w-auto p-2.5 text-[var(--color-balloon-text)] text-[16px] rounded-xl bg-[var(--color-balloon-bg)] cursor-pointer text-lg text-center hover:bg-[var(--color-balloon-hover-bg)] ">{prop.text}</p>
    )
}