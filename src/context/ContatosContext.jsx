import React, { createContext, useState, useEffect } from 'react';

// Criação do contexto
export const ContatosContext = createContext();

// Provedor do contexto
export const ContatosProvider = ({ children }) => {
  const [listContatos, setListContatos] = useState([]);
  const [contatoToEdit, setContatoToEdit] = useState(null);
  const [open, setOpen] = useState(false);

  useEffect(() => {
    const storedContatos = localStorage.getItem('listContatos');
    if (storedContatos) {
      setListContatos(JSON.parse(storedContatos));
    }
  }, []);

  useEffect(() => {
    localStorage.setItem('listContatos', JSON.stringify(listContatos));
  }, [listContatos]);

  const addContato = (nome, email, telefone, detalhes) => {
    const newContato = {
      id: Date.now(),
      nome,
      email,
      telefone,
      detalhes,
    };
    setListContatos([newContato, ...listContatos]);
    setOpen(false);
  };

  const handleEditContato = (contato) => {
    setContatoToEdit(contato);
    setOpen(true);
  };

  const handleUpdateContato = (id, updatedContato) => {
    setListContatos((prevContatos) =>
      prevContatos.map((contato) => (contato.id === id ? updatedContato : contato))
    );
    setContatoToEdit(null);
    setOpen(false);
  };

  const handleDeleteContato = (id) => {
    setListContatos((prevContatos) => prevContatos.filter((contato) => contato.id !== id));
  };

  const openCadastro = () => {
    setContatoToEdit(null);
    setOpen(!open);
  };

  return (
    <ContatosContext.Provider
      value={{
        listContatos,
        contatoToEdit,
        open,
        addContato,
        handleEditContato,
        handleUpdateContato,
        handleDeleteContato,
        openCadastro,
      }}
    >
      {children}
    </ContatosContext.Provider>
  );
};
