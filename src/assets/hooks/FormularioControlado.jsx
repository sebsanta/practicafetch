import { useState } from "react";

const FormularioControlado = () => {

    const [todo, setTodo] = useState({
        title:'',
        description: '',
        setState:''
    })

    const handleSumbit = (e) => {
        e.preventDefault();
    }
    return(
        <form onSubmit={handleSumbit} >
            <input 
                className="form-control mb-2"
                type="text" 
                placeholder="Ingrese título todo" 
                name='title'
                value={todo.title}
                onChange={e => setTodo({
                    ...todo, title: e.target.value
                })}
            />
            <textarea className="form-control mb-2" 
                      placeholder="Ingrese descripción"
                      name="description"
                      value={todo.description}
                      onChange={e => setTodo({
                         ...todo, description: e.target.value
                    })}
            ></textarea>
            <select className="form-select mb-2" name="state" value={todo.state} onChange={e => setTodo({
                ...todo,state: e.target.value})}>
                <option value="pendiente">Pendiente</option>
                <option value="completado">Completado</option>
            </select>
            <button type='submit' className="btn btn-primary">Procesar</button>
        </form>
    )
}
export default FormularioControlado;