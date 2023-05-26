import { useState } from "react";

const Cat = () => {

    const[cat, setCat] = useState({nombre: 'Gringuito', edad:10});
    const [cambio, setCambio] = useState(true);

   
//componente boton que va a generar el cambio de lado de los elementos
const CambiarDatos = () => {
    const handleCambio = () => {
        setCambio(!cambio);
        console.log(cambio);
   }
   return(
    <div>
       <button className="btn btn-secondary" onClick={handleCambio}>Cambiar</button>
       {cambio ? <h2>{cat.edad} - {cat.nombre}</h2>: <h2>{cat.nombre}-{cat.edad}</h2>}
    </div>
   )
}
 
    const handleButton = () => {
        setCat({...cat, edad:cat.edad +1})
    }

    return(
        <div>
             <h1>CAT</h1>
            <h2>{cat.nombre} - {cat.edad}</h2>
            <button type="button" className="btn btn-primary" onClick={handleButton}>Enviar</button>  
            <br></br><br></br>
            <CambiarDatos /> 
            
        </div>

    )
}

export default Cat;