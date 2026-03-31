export default function BallonText(prop) {
    return (
        <p id="Text" className="inline-block h-auto w-auto p-2.5 text-[#b2b1b1] text-[16px] rounded-xl bg-[#3D3D3D] cursor-pointer text-lg text-center hover:bg-[#5a5a5a] ">{prop.text}</p>
    )
}