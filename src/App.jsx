import ColorBar from "./ColorBar"
import { useState } from "react";

function App() {
  const [colors, setColor] = useState("salmon");
  // function changeColor() {
  //     setColor(colors = props.color)
  //     console.log("hook "+ colors +"\n clicked "+props.color)
  //     document.getElementById("fullScreen").style.backgroundColor = colors;
  // }

  return (
    <>
      <div className="p-3 h-screen items-end" id="fullScreen" style={{ backgroundColor: colors }}>
        <div className=" flex flex-wrap justify-center fixed bottom-5 w-screen">
          <ColorBar name="Green" color="green" onclick={(color) => {
            setColor(color)
          }} />
          <ColorBar name="Red" color="red" onclick={(color) => {
            setColor(color)
          }} />
          <ColorBar name="Blue" color="blue" onclick={(color) => {
            setColor(color)
          }} />
          <ColorBar name="Olive" color="olive" onclick={(color) => {
            setColor(color)
          }} />
          <ColorBar name="Gray" color="gray" onclick={(color) => {
            setColor(color)
          }} />
          <ColorBar name="Yellow" color="yellow" onclick={(color) => {
            setColor(color)
          }} />
          <ColorBar name="Pink" color="pink" onclick={(color) => {
            setColor(color)
          }} />
          <ColorBar name="Purple" color="purple" onclick={(color) => {
            setColor(color)
          }} />
          <ColorBar name="Lavender" color="lavender" onclick={(color) => {
            setColor(color)
          }} />
          <ColorBar name="Black" color="black" onclick={(color) => {
            setColor(color)
          }} />
          <ColorBar name="White" color="white" onclick={(color) => {
            setColor(color)
          }} />
        </div>
      </div>
    </>
  )
}

export default App
