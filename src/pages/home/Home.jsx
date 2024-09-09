import * as S from './Home.style'
import { Link } from 'react-router-dom'
import { FaArrowAltCircleRight } from "react-icons/fa";


const Home = () => {
  return (
    <S.HomeContainer>
      <S.HomeHeader>
        <S.Title>WorkSpace</S.Title>
        <S.Subtitle>Organize suas tarefas, gerencie seu tempo e seus contatos</S.Subtitle>
      </S.HomeHeader>
      <S.MainContent>
        <S.Card>
          <h1>Tarefas</h1>
          <p>Mantenha suas tarefas organizadas e acompanhe o progresso.</p>
          <Link to="/tarefas" id='btnTarefas'>Entrar<FaArrowAltCircleRight/>
          </Link>
        </S.Card>
        <S.Card>
          <h1>Calendario</h1>
          <p>Agende e visualize suas tarefas do dia</p>
          <Link to="/calendario" id='btnNovo'>Entrar<FaArrowAltCircleRight/></Link>
        </S.Card>
        <S.Card>
          <h1>Contatos</h1>
          <p>Mantenha suas informações de contato organizadas e acessíveis</p>
          <Link to="/contatos" id='btnContatos'>Entrar<FaArrowAltCircleRight/></Link>
        </S.Card>
      </S.MainContent>
    </S.HomeContainer>
  )
}

export default Home