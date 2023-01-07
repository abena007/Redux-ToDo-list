import './App.css';
import {useDispatch, useSelector} from 'react-redux'
import ToDoList from './components/ToDoList';
import AddTodo from './components/AddTodo';
import 'bootstrap/dist/css/bootstrap.min.css';
import { filterTodo } from './redux/actions/TodoActions';
import { Button } from 'react-bootstrap';

function App() { 
    const allTodos = useSelector (state => state.TodoReducer.todos)
    const todoFiltred = useSelector (state => state.TodoReducer.filter)
  const dispatch = useDispatch()
console.log (allTodos)
  return (
    <div className="App">
      
      <header   className='App-header'>
        <h1>Todo List </h1>
        <AddTodo></AddTodo>
        <div style={{display:"flex" , flexDirection : "row" , gap:"10px" , marginBottom:'5px'}}>
          <Button  variant='light' onClick={()=>dispatch(filterTodo('All'))} > All </Button>
          <Button variant='success' onClick={()=>dispatch(filterTodo(true))} > Done </Button>
          <Button  variant='danger'onClick={()=>dispatch(filterTodo(false))} > UnDone </Button>
        </div>
<ToDoList list={ todoFiltred ===  'All' ? allTodos : allTodos.filter(el => el.isDone === todoFiltred )}></ToDoList>
      </header>
    </div>
  );
}

export default App;
