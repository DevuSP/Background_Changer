function ColorBar(props) {
    // let [colors, setColor] = useState("salmon");
    // function changeColor() {
    //     setColor(colors = props.color)
    //     console.log("hook "+ colors +"\n clicked "+props.color)
    //     document.getElementById("fullScreen").style.backgroundColor = colors;
    // }
    return (
        <button
            className={`px-4 py-3 m-1 rounded-3xl shadow-lg`}
            style={{ backgroundColor: `${props.color}`, color: `${props.color === "black" ? "white" : "black"}` }}
            onClick={()=>{
                props.onclick(props.color)
                }}
        >
            {props.name}
        </button>  
    )
};

export default ColorBar;