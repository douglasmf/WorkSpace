import { configureStore, combineReducers } from '@reduxjs/toolkit';
import tarefasSlice from './tarefasSlice';
import { persistStore, persistReducer } from 'redux-persist';
import storage from 'redux-persist/lib/storage';

// Configuração do redux-persist
const persistConfig = {
  key: 'root', // chave que identifica os dados no localStorage
  storage,     // define o localStorage como local de armazenamento
};

// Combine os reducers, caso tenha mais de um
const rootReducer = combineReducers({
  tarefas: tarefasSlice, // Aqui você pode adicionar outros reducers se houver
});

// Aplicar persistReducer com a configuração do redux-persist
const persistedReducer = persistReducer(persistConfig, rootReducer);

// Criar a store utilizando o persistedReducer
export const store = configureStore({
  reducer: persistedReducer,
});

// Criar o persistor para gerenciar o armazenamento persistente
export const persistor = persistStore(store);