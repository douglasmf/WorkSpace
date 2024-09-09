import { MenuStyle } from './MenuLG.style'
import { Link } from 'react-router-dom'

const MenuLG = () => {
  return (
    <MenuStyle>
        <Link to='/tarefas'>Tarefas</Link>
        <Link to='/calendario'>Calendario</Link>
        <Link to='/contatos'>Contatos</Link>
    </MenuStyle>
  )
}

export default MenuLG