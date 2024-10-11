import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import { Mensaje } from './Mensaje'
import { Idioma } from './Idioma'
import { Contenedor } from './Contenedor'
import Contador from './Contador'




function App() {
  const [count, setCount] = useState(0)

  return (
   <>
   <Contador />
   <Contenedor>
    <Mensaje  nombre="Sandra"/>
    <Idioma nombre="Sandra" idioma="Aleman" />
    </Contenedor> 
   </>
  
  )
}

export default App




