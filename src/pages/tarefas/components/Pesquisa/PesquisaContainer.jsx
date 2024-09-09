import { PesquisaStyle} from './PesquisaContainer.style'
import { FaSearch } from "react-icons/fa";



const PesquisaContainer = (props) => {
  return (
    <PesquisaStyle>
      <form>
          <div className="pesquisaContain">
            <input
              type="text"
              placeholder='Pesquisar...'
              id='pesquisa'
              value={props.pesquisa}
              onChange={props.onPesquisaChange}
            />
            <button type='button'onClick={e => e.preventDefault()}>
              <FaSearch/>
            </button>
          </div>
        <select value={props.filtro} onChange={props.onFiltroChange}>
          <option value="Todos">Todos</option>
          <option value="emAndamento">Em andamento</option>
          <option value="concluidas">Concluidos</option>
        </select>
        
      </form>
    </PesquisaStyle>
  )
}

export default PesquisaContainer