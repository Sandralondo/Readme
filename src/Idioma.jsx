 export function Idioma(props) {
    if (props.idioma == "espanol")
      return <p>Hola, Yo soy {props.nombre}</p>
    else if (props.idioma == "english")
      return <p>Hi, I am {props.nombre}</p>
      else if (props.idioma == "Aleman")
      return <p>Hallo, Ich bin  {props.nombre}</p>
      else (props.idioma == "italiano")
        return <p>Ciao, Io sono {props.nombre}</p>
  }