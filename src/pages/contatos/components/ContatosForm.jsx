import { useState, useEffect, useContext } from 'react';
import * as FS from './ContatosForm.style';
import { ContatosContext } from '../../../context/ContatosContext';

const ContatosForm = () => {
  const { addContato, handleUpdateContato, contatoToEdit, openCadastro } = useContext(ContatosContext);

  const [nome, setNome] = useState('');
  const [email, setEmail] = useState('');
  const [telefone, setTelefone] = useState('');
  const [detalhes, setDetalhes] = useState('');

  useEffect(() => {
    if (contatoToEdit) {
      setNome(contatoToEdit.nome);
      setEmail(contatoToEdit.email);
      setTelefone(contatoToEdit.telefone);
      setDetalhes(contatoToEdit.detalhes);
    }
  }, [contatoToEdit]);

  const handleSubmit = (e) => {
    e.preventDefault();

    if (contatoToEdit) {
      handleUpdateContato(contatoToEdit.id, { ...contatoToEdit, nome, email, telefone, detalhes });
    } else {
      addContato(nome, email, telefone, detalhes);
    }

    setNome('');
    setEmail('');
    setTelefone('');
    setDetalhes('');
  };

  return (
    <FS.FormContainer open>
      
      <FS.Form onSubmit={handleSubmit}>
        <FS.CloseButton onClick={openCadastro}>X</FS.CloseButton>
        <FS.Input
          type="text"
          placeholder="Nome"
          value={nome}
          onChange={(e) => setNome(e.target.value)}
          required
        />
        <FS.Input
          type="email"
          placeholder="Email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          required
        />
        <FS.Input
          type="text"
          placeholder="Telefone"
          value={telefone}
          onChange={(e) => setTelefone(e.target.value)}
          required
        />
        <FS.TextArea
          placeholder="Detalhes"
          value={detalhes}
          onChange={(e) => setDetalhes(e.target.value)}
        />
        <FS.Button type="submit">{contatoToEdit ? 'Atualizar' : 'Adicionar'} Contato</FS.Button>
      </FS.Form>
    </FS.FormContainer>
  );
};

export default ContatosForm;