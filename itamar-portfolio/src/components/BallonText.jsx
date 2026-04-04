export default function BallonText(prop) {
    return (
        <p id="Text" className="inline-block h-auto w-auto p-2.5 text-(--color-balloon-text) text-[16px] rounded-xl bg-(--color-balloon-bg) cursor-pointer text-lg text-center hover:bg-(--color-balloon-bg-hover) ">{prop.text}</p>
    )
}