// src/redux/tarefasSlice.js
import { createSlice } from '@reduxjs/toolkit';

// Estado inicial das tarefas
const initialState = {
  tarefas: [],
};

// Slice de tarefas
const tarefasSlice = createSlice({
  name: 'tarefas',
  initialState,
  reducers: {
    addTarefa: (state, action) => {
      state.tarefas.push(action.payload);
    },
    removeTarefa: (state, action) => {
      state.tarefas = state.tarefas.filter(tarefa => tarefa.id !== action.payload);
    },
    completeTarefa: (state, action) => {
      const tarefa = state.tarefas.find(tarefa => tarefa.id === action.payload);
      if (tarefa) {
        tarefa.isComplete = !tarefa.isComplete;
      }
    },
    editTarefa: (state, action) => {
      const {id, newText} = action.payload;
      const tarefa = state.tarefas.find(tarefa=> tarefa.id === id)
      if (tarefa) {
        tarefa.text = newText;
        tarefa.data = newDate || tarefa.data;
      }
    }
  },
});

export const { addTarefa, removeTarefa, completeTarefa, editTarefa } = tarefasSlice.actions;
export default tarefasSlice.reducer;
