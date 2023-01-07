import React,{useState} from 'react'
import { Button, FormControl, InputGroup } from 'react-bootstrap';
import Form from 'react-bootstrap/Form';
import { useDispatch } from 'react-redux';
import { deleteTodo, editTodo, toggleTodo } from '../redux/actions/TodoActions';


const ToDo = ({elm}) => {
    
    const [todoUp,setUp] = useState(elm)
    const dispatch = useDispatch()

    const delTodo = () => {
        dispatch(deleteTodo(elm.id))
    }
    const handletoggle = () => {
        dispatch (toggleTodo(elm.id))
    }
    const updateTodo = () => {
        dispatch (editTodo(todoUp))
    }
return (<>
<div className='Todo '>
    
<h2 style={{textDecoration:elm.isDone ? 'line-through' :'none' }}>{elm.description} </h2> 
    <div style={{marginBottom:'2px',display:'flex',gap:'8px'}}>
        <Form>
            <Form.Check onClick={handletoggle}/>
        </Form>

        <Button variant='danger' onClick={delTodo}>Delete</Button>
        </div>
    
</div>

<InputGroup className="mb-3 " style={{width:'50vh',marginLeft:'5vh'}}>
    <Form.Control
        placeholder="Edit this task... "
        aria-label="Recipient's username"
        aria-describedby="basic-addon2"
        onChange={(e) => setUp( {...todoUp,description:e.target.value})}
        
    />
    <Button variant="primary" id="button-addon2" onClick={updateTodo} >
        Update
    </Button>
</InputGroup>
<hr/>
</>
)
}

export default ToDo