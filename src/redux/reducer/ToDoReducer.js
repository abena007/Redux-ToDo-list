
import { v4 as uuidv4 } from 'uuid';
import { ADD_TODO ,DELETE_TODO, EDIT_TODO, TOGGLE_FILTER, TOGGLE_TODO} from '../actions/actionTypes';

const initState = {
    filter :'All',
    todos : [
        {id: uuidv4(),description:'first task', isDone : false},
        {id: uuidv4(),description:'second task', isDone : false}
    ]
}
const TodoReducer = (state = initState, {type, payload})=> {
    switch (type) {
        case ADD_TODO :
            return {
                ...state,
                todos:[...state.todos , payload]
            } 
        case DELETE_TODO:
            return{
                ...state,
                todos:state.todos.filter(el => el.id !== payload)
        
            }
        case TOGGLE_TODO:
            return {
                ...state,
                todos: state.todos.map(elm => elm.id === payload ? {...elm , isDone : !elm.isDone}:elm)
            }
        case EDIT_TODO:
            return {
                ...state,
                todos : state.todos.map(elm => elm.id === payload.id? payload : elm)
            }
            case TOGGLE_FILTER : 
            return {
                ...state,
                filter : payload
            }

    
    default:
        return state
    } 
}

export default TodoReducer