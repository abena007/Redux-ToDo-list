import React, { useState } from 'react'
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import InputGroup from 'react-bootstrap/InputGroup';
import { addTodo } from '../redux/actions/TodoActions';
import { useDispatch } from 'react-redux';

const AddTodo = () => {
  const dispatch = useDispatch()
  const [input,setInput]=useState(
    {description:''
  })  
  const AddNewTodo = ()=> {
  dispatch(addTodo(input))
  setInput({description : ''})
}
  
  
  return (
    <div className='AddTodo'>
      <InputGroup className="mb-5 input">
        <Form.Control
          placeholder="Add new task..."
          aria-label="Recipient's username"
          aria-describedby="basic-addon2"
          onChange={(e)=> setInput({description:e.target.value})}
        />
        
        <Button variant="outline-secondary" id="button-addon2" onClick={AddNewTodo}>
          Add
        </Button>
      </InputGroup>
    </div>
  )
}

export default AddTodo
