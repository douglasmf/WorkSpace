import React, { useState, useEffect, useContext } from 'react';
import * as FS from './ContatosForm.style';
import * as S from '../Contatos.style';
import { ContatosContext } from '../../../context/ContatosContext';

const ContatosForm = () => {
  const { addContato, openCadastro, open, contatoToEdit, handleUpdateContato } = useContext(ContatosContext);

  const [nome, setNome] = useState('');
  const [email, setEmail] = useState('');
  const [telefone, setTelefone] = useState('');
  const [detalhes, setDetalhes] = useState('');

  useEffect(() => {
    if (contatoToEdit) {
      setNome(contatoToEdit.nome || '');
      setEmail(contatoToEdit.email || '');
      setTelefone(contatoToEdit.telefone || '');
      setDetalhes(contatoToEdit.detalhes || '');
    } else {
      setNome('');
      setEmail('');
      setTelefone('');
      setDetalhes('');
    }
  }, [contatoToEdit, open]);

  const handleSubmit = (e) => {
    e.preventDefault();
    if (contatoToEdit) {
      handleUpdateContato(contatoToEdit.id, { id: contatoToEdit.id, nome, email, telefone, detalhes });
    } else {
      addContato(nome, email, telefone, detalhes);
    }
  };

  return (
    <FS.FormContainer open={open}>
      <FS.CloseButton onClick={openCadastro}>X</FS.CloseButton>
      <S.Title>{contatoToEdit ? 'Editar Contato' : 'Novo Contato'}</S.Title>
      <FS.Formulario onSubmit={handleSubmit}>
        <input
          type="text"
          placeholder="Nome..."
          value={nome}
          onChange={(e) => setNome(e.target.value)}
          required
        />
        <input
          type="email"
          placeholder="Email..."
          value={email}
          onChange={(e) => setEmail(e.target.value)}
        />
        <input
          type="text"
          placeholder="Telefone..."
          value={telefone}
          onChange={(e) => setTelefone(e.target.value)}
        />
        <input
          type="text"
          placeholder="Detalhes..."
          value={detalhes}
          onChange={(e) => setDetalhes(e.target.value)}
        />
        <button type="submit">Enviar</button>
      </FS.Formulario>
    </FS.FormContainer>
  );
};

export default ContatosForm;
