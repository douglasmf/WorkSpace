import * as S from './Todo.style'
import { FaEdit } from "react-icons/fa";

const Todo = ({ add, remove, complete, edit }) => {
  const todo = add;

  return (
    <S.TodoContainer>
      <S.TodoContent isComplete={todo.isComplete}>
        <p>{todo.text}</p>
      </S.TodoContent>
      <S.Buttons>
        <button className='complete' onClick={complete}>Completar</button>
        <button className='edit' onClick={edit}><FaEdit/></button>
        <button className='delete' onClick={() => remove(todo.id)}>X</button>
      </S.Buttons>
    </S.TodoContainer>
  )
}

export default Todo;