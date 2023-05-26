import { useRef, useState } from "react";

const FormularioNoControlado = () => {
   
    const form = useRef(null);
    const [error, setError] = useState("");
    const handleSumbit = (e) => {
        e.preventDefault();
        setError('');
        const data = new FormData(form.current);
        console.log([...data.entries()]);

        //capturar los datos
        const dataObject = Object.fromEntries([...data.entries()]);
        const {title, description, state} = Object.fromEntries([...data.entries()])

        //validar los datos
        if(!title.trim() || !description.trim() || !state.trim()) 
            return setError('Debes llenar todos los campos');
   
        //enviar los datos
    }
    return(
        <form onSubmit={handleSumbit} ref={form}>
            <input 
                className="form-control mb-2"
                type="text" 
                placeholder="Ingrese título todo" 
                name='title'
            />
            <textarea className="form-control mb-2" 
                      placeholder="Ingrese descripción"
                      name="description"
            ></textarea>
            <select className="form-select mb-2" name="state">
                <option value="pendiente">Pendiente</option>
                <option value="completado">Completado</option>
            </select>
            <button type='submit' className="btn btn-primary">Procesar</button>
            {error !== '' && error}
        </form>
    )
}

export default FormularioNoControlado;