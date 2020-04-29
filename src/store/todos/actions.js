/**
 * 
 * @param {*} todo 
 */
export default function CreateTodo(todo){
    return {
        type: 'CREATE_TODO',
        payload: todo
    }
}
/**
 * 
 * @param {*} todo 
 */
export function UpdateTodo(todo){
    return {
        type: 'UPDATE_TODO',
        payload: todo
    }
}
/**
 * 
 * @param {*} todo 
 */
export function DeleteTodo(todo){
    return {
        type: 'DELETE_TODO',
        payload: todo
    }
}