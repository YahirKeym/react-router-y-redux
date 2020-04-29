import React,{useState} from 'react';
import createTodo, {UpdateTodo, DeleteTodo} from '../store/todos/actions.js';
import {GetTodos} from '../store/todos/reducers.js';
import {connect} from 'react-redux';

function ActualizarTodo(setPrueba,Prueba,Id,UpdateTodo,xId){
    UpdateTodo({
        id:Id,
        Titulo: 'Otro Titulo',
        Contenido: 'Otro contenido',
        idEnArray: xId
    })
    setPrueba(!Prueba)
}
/**
 * 
 */
function CreateTodo(createTodo,setPrueba,prueba, TodoLast){
	createTodo({
        id:TodoLast+1,
        title:'Prueba',
        contenido:'Contenido de nuestro todo'
    })
    setPrueba(!prueba);
}
/**
 * 
 * @param {*} param0 
 */
function EliminarTodo(setPrueba,prueba,DeleteTodo,xId){
    DeleteTodo(xId);
    setPrueba(!prueba);
}
/***
 * 
 */
function Home({createTodo, todoReducer,UpdateTodo,DeleteTodo}) {
    const [prueba,setPrueba] = useState(true);
    let TodoLast = todoReducer.length;
	return (
		<div>
			<button onClick={()=>{CreateTodo(createTodo, setPrueba,prueba, TodoLast)}}>Create todo</button>
                {todoReducer.map(({id,title,contenido},xId)=>{
                    return (
                    <div>
                        <h1>{title}</h1>
                        <p>{contenido}</p>
                        <button onClick={()=>{EliminarTodo(setPrueba,prueba,DeleteTodo,xId)}}>Eliminar Todo</button>
                        <button onClick={()=>{ActualizarTodo(setPrueba,prueba,id,UpdateTodo,xId)}}>Update</button>
                    </div>)
                })}
		</div>
	);
}

const MapToState = state => {
    return {
            ...state,
            ...GetTodos(state)
        }
}
export default connect(MapToState,{createTodo,UpdateTodo,DeleteTodo})(Home);