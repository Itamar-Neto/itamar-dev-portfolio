const threeShapesStyles = `
  @keyframes Form1 {
    0%, 100% { left: 200px; top: 0px; }
    50%       { left: 100px; top: 0px; }
  }
  @keyframes Form2 {
    0%, 100% { left: 90px;  top: 5px; }
    50%       { left: 150px; top: 5px; }
  }
  @keyframes Form3 {
    0%, 100% { left: -100px; top: 10px; }
    50%       { left: 50px;  top: 10px; }
  }
`

const sharedForm =
    "rounded-[300px] bg-[#333333] [background-size:20px_20px] " +
    "[background-image:radial-gradient(#242424_5px,transparent_0.5px)] " +
    "relative [animation-iteration-count:infinite]"

export default function ThreeShapes() {
    return (
        <>
            <style>{threeShapesStyles}</style>

            <div className={
                "h-full w-1/2 flex flex-col justify-center items-center " +
                "relative -top-32 -right-52 gap-[30px] -rotate-[40deg] " +
                "max-[950px]:hidden"
            }>
                <span className={`${sharedForm} h-12 w-[50rem] [animation-name:Form1] [animation-duration:6.3s]`} />
                <span className={`${sharedForm} h-12 w-[50rem] [animation-name:Form2] [animation-duration:5s]`} />
                <span className={`${sharedForm} h-80 w-[50rem] [animation-name:Form3] [animation-duration:6.1s]`} />
            </div>
        </>
    )
}