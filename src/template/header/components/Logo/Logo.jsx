import { SlNotebook } from "react-icons/sl";
import { FaPenAlt } from "react-icons/fa";
import { LogoStyle } from "./Logo.style";


const Logo = (props) => {
  return (
    <LogoStyle isMenuSM={props.menuSM}>
        <h1>
            <SlNotebook id="notebook"/>
            <FaPenAlt id="pen"/>
            <span>WorkSpace</span>
        </h1>
    </LogoStyle>
  )
}

export default Logo