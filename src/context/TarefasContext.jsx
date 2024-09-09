import React, { createContext, useState, useEffect } from 'react';

export const TarefasContext = createContext();

export const TarefasProvider = ({ children }) => {
  const [tarefas, setTarefas] = useState(() => {
    const storedTarefas = localStorage.getItem('tarefas');
    return storedTarefas ? JSON.parse(storedTarefas) : [];
  });

  useEffect(() => {
    localStorage.setItem('tarefas', JSON.stringify(tarefas));
  }, [tarefas]);

  const addTarefa = (text, data) => {
    const newTarefa = {
      id: Math.floor(Math.random() * 10000).toString(),
      text,
      isComplete: false,
      data,
    };
    setTarefas([newTarefa, ...tarefas]);
  };

  const removeTarefa = (id) => {
    setTarefas(tarefas.filter((tarefa) => tarefa.id !== id));
  };

  const editTarefa = (id, newText) => {
    setTarefas(tarefas.map((tarefa) => 
      tarefa.id === id ? { ...tarefa, text: newText } : tarefa
    ));
  };

  const completeTarefa = (id) => {
    setTarefas((prevTarefas) => {
      return prevTarefas
        .map((tarefa) =>
          tarefa.id === id ? { ...tarefa, isComplete: !tarefa.isComplete } : tarefa
        )
        .sort((a, b) => {
          if (a.isComplete && !b.isComplete) return 1; // Move tarefas completas para o final
          if (!a.isComplete && b.isComplete) return -1; // Move tarefas incompletas para o topo
          return 0;
        });
    });
  };

  return (
    <TarefasContext.Provider value={{ tarefas, addTarefa, removeTarefa, editTarefa, completeTarefa }}>
      {children}
    </TarefasContext.Provider>
  );
};
