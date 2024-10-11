import { useState } from "react";

  const Contador = () => {
  const [contar, setContador]  = useState(0)

  const incrementar = () => setContador(contar +1)
  const decrementar = () => setContador(contar -1)

  return(
      <div className="Contador">
          <h2>Contador: {contar}</h2>
          <button className="boton" onClick={incrementar}>+</button>
          <button  className="boton" onClick={decrementar}>-</button>
      </div>
  )
}

export default Contador