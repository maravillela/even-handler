import { useState } from "react";
//import Button from "./components/button"

function App() {
  const [contador, setContador] = useState(0)
  return (
    <>
    <p>{contador}</p>
    <button onClick={() => setContador(contador - 1)}>-</button>
    </>

  );

 // return <Button text="dame click perro 🐶" />;
}

export default App
