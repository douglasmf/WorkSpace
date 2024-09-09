import { useContext, useEffect, useState } from 'react';
import * as S from './Contatos.style';
import ContatosForm from './components/ContatosForm';
import { FaRegEdit } from "react-icons/fa";
import { MdDelete } from "react-icons/md";
import { lightTheme } from '../../themes/Themes';
import { ContatosContext } from '../../context/ContatosContext';

const Contatos = () => {
  const { listContatos, openCadastro, handleEditContato, handleDeleteContato, open } = useContext(ContatosContext);
  const [scrolling, setScrolling] = useState(listContatos.length > 10);

  useEffect(() => {
    setScrolling(listContatos.length > 10);
  }, [listContatos.length]);

  return (
    <S.ContatosContainer>
      <S.Title>Lista de Contatos</S.Title>
      {listContatos.length > 0 ? (
        <S.TabelaContainer scrolling={scrolling}>
          <S.Tabela>
            <thead>
              <tr>
                <th>Nome</th>
                <th>Email</th>
                <th>Telefone</th>
                <th>Detalhes</th>
                <th></th>
              </tr>
            </thead>
            <tbody>
              {listContatos.map((list, index) => (
                <tr
                  key={list.id}
                  style={{ backgroundColor: index % 2 === 0 ? lightTheme.colors.neutro100 : lightTheme.colors.neutro200 }}
                >
                  <td>{list.nome}</td>
                  <td>{list.email}</td>
                  <td>{list.telefone}</td>
                  <td>{list.detalhes}</td>
                  <td className='acoes'>
                    <button
                      className='edit'
                      onClick={() => handleEditContato(list)}
                    >
                      <FaRegEdit />
                    </button>
                    <button
                      className='delete'
                      onClick={() => handleDeleteContato(list.id)}
                    >
                      <MdDelete />
                    </button>
                  </td>
                </tr>
              ))}
            </tbody>
          </S.Tabela>
        </S.TabelaContainer>
      ) : (
        <p>Nenhum contato adicionado</p>
      )}

      <S.ButtonAdd onClick={openCadastro}>Novo Contato</S.ButtonAdd>
      {open && <ContatosForm />}
    </S.ContatosContainer>
  );
}

export default Contatos;
