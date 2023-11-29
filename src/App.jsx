import ColorBar from "./ColorBar"

function App() {


  return (
    <>
      <div className="bg-white p-3 h-screen items-end" id="fullScreen" style={{ backgroundColor: "salmon" }}>
        <div className=" flex flex-wrap justify-center fixed bottom-5 w-screen">
          <ColorBar name="Green" color="green" />
          <ColorBar name="Red" color="red" />
          <ColorBar name="Blue" color="blue" />
          <ColorBar name="Olive" color="olive" />
          <ColorBar name="Gray" color="gray" />
          <ColorBar name="Yellow" color="yellow" />
          <ColorBar name="Pink" color="pink" />
          <ColorBar name="Purple" color="purple" />
          <ColorBar name="Lavender" color="lavender" />
          <ColorBar name="Black" color="black" />
          <ColorBar name="White" color="white" />
        </div>
      </div>
    </>
  )
}

export default App
