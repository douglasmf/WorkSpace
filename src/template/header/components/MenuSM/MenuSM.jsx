import { Link } from 'react-router-dom'
import * as S from './MenuSM.style'
import Logo from '../Logo/Logo'


const MenuSM = (props) => {
  return (
    <S.MenuStyle openingMenu={props.openMenu}>
        <S.HeaderMenu>
            <Logo menuSM={true}/> 
            <button onClick={props.onClick}>X</button>
        </S.HeaderMenu>
        <S.Links>
            <Link to='/tarefas' onClick={props.onClick}>Tarefas</Link>
            <Link to='/calendario' onClick={props.onClick}>Calendario</Link>
            <Link to='/contatos' onClick={props.onClick}>Contatos</Link>
        </S.Links>
    </S.MenuStyle>
  )
}

export default MenuSM