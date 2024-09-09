import {useState} from 'react'
import { Link } from "react-router-dom"
import * as S from "./Header.style"
import Logo from "./components/Logo/Logo"
import MenuLG from "./components/MenuLG/MenuLG"
import ButtonMenu from "./components/ButtonMenu/ButtonMenu"
import MenuSM from "./components/MenuSM/MenuSM"

const Header = () => {
  const [openMenu, setOpenMenu] = useState(false)

  const handleOpenMenu = () => {
    setOpenMenu(!openMenu)
  }
  return (
    <S.HeaderStyle>
        <S.Navbar className="container">
          <Link to="/">
            <Logo menuSM={false}/>
          </Link>
          <MenuLG/>
          <ButtonMenu onClick={handleOpenMenu}/>
          <MenuSM openMenu={openMenu} onClick={handleOpenMenu}/>
        </S.Navbar>
    </S.HeaderStyle>
  )
}

export default Header