import { useState } from "react";

const Calculadora = () => {
  const [contador, setContador] = useState(0);

  function Aumentar() {
    setContador(contador+ 1);
  }

  return (
    <div>
      <label>Calculadora: {contador}</label>
      <br />
      <button onClick={Aumentar}>Aumentar</button>
    </div>
  );
};

export default Calculadora;
