import { FaBars } from "react-icons/fa";
import {ButtonStyle} from './ButtonMenu.style'



const ButtonMenu = (props) => {
  return (
    <ButtonStyle onClick={props.onClick}>
      <FaBars/>
    </ButtonStyle>
  )
}

export default ButtonMenu