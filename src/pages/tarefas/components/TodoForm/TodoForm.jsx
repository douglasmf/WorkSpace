import { useState} from 'react'
import {Subtitle} from '../../Tarefas.style'
import { FormContainer, Formulario } from './TodoForm.style'

const TodoForm = ({ addTodo }) => {
    const [value, setValue] = useState("")

    const handleSubmit = (e) => {
      e.preventDefault()
      if(!value) return;
      addTodo(value)
      setValue("")
    }

    
  return (
    <FormContainer>
        <Subtitle>Criar tarefa:</Subtitle>
        <Formulario onSubmit={handleSubmit}>
          <input 
            type="text" 
            placeholder='Digite a tarefa...' 
            value={value}
            onChange={(e) => setValue(e.target.value)}
          /> 
          <button type='submit'>Criar</button>
        </Formulario>
    </FormContainer>
  )
}

export default TodoForm