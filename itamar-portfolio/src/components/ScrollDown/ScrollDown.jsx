import "./ScrollDown.css"

export default function ScrollDown() {
    return (
        <>
            <div id="ScrollDown" style={{ '--color': '#333333' }}>
                <span id="Chevrons">
                    <span className="ChevronDown"></span>
                    <span className="ChevronDown"></span>
                </span>
            </div>
        </>
    )
}
