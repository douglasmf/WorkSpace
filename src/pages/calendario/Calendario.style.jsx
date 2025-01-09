import styled from 'styled-components';
import { lightTheme } from '../../themes/Themes';

export const CalendarioPage = styled.div`
  max-width: 1100px;
  margin: 1rem auto;
  
  h1 {
    color: ${lightTheme.colors.neutro900}; 
    text-align: center;
    margin-bottom: 2rem;
  }
  @media (max-width: 1039px){
    padding: 0 1rem;
  }
  @media (max-width: 768px) {
    padding: 0 2rem;
  }
  @media (max-width: 599px) {
    font-size: .8rem;
  }
`;

export const CalendarioContainer = styled.div`
  position: relative;
  display: flex;
  justify-content: space-between;
  height: 700px;
  padding: 1rem 0;

  @media (max-width: 769px) {
    flex-direction: column;
    align-items: center;
    height: auto;
  }
`;

export const Calendario = styled.div`
  max-width: 64%; 
  height: 82%;
  margin-bottom: 2rem; 
  background-color: white;
  box-shadow: 0px 4px 8px rgba(0, 0, 0, 0.1);
  .btnClose {
    position: absolute;
    top: .2rem;
    right: .2rem;
    background-color: ${lightTheme.colors.delete_close};
    padding: .2rem;
    border: none;
    font-size: 1rem;
    font-weight: bold;
    color: #fff;
    cursor: pointer;
    z-index: 101;
  }
  .calendarStyle {
    width: 100%;
    height: 100%;
    font-size: 1.6rem; 
    padding: .5rem;
    border: none;
    
  }
  .react-calendar__navigation button { 
    font-size: 1.2rem; 
    padding: 0.5rem; 
  }

  .react-calendar__month-view__days__day--weekend {
    color: ${lightTheme.colors.delete_close};
  }

  .react-calendar__tile--active {
    background-color: ${lightTheme.colors.save_linkHover} !important; 
    color: white;
  }

  .react-calendar__tile--now {
    background-color: ${lightTheme.colors.completeColor} !important; 
    color: white;
  }

  .react-calendar__month-view__days__day{
    padding: 20px 6.6667px;
  }
  @media (min-width: 770px){
    .btnClose{
      display: none;
    }
  }
  @media (max-width: 769px) {
    position: absolute;
    top: 0;
    left: 0;
    padding-top: 1rem;
    display: ${(props) => props.open ? 'block' : 'none'};
    max-width: 80%;
    height: auto;
    z-index: 100;

    .calendarStyle {
      font-size: 1.2rem; 
    }

    .react-calendar__navigation button {
      font-size: 1rem;
      padding: 0.7rem; 
    }

    .react-calendar__tile {
      padding: 10px 5px; 
    }
  }
  @media (max-width: 499px){
    max-width: 100%;
  }
  
`;

export const TarefasContainer = styled.div`
  position: relative;
  width: 34%;
  height: 100%;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  padding: 1rem 2rem;
  background-color: white;
  box-shadow: 0px 4px 8px rgba(0, 0, 0, 0.1);

  h2 {
    margin-bottom: 1rem;
  }

  h3 {
    color: #808080;
    margin-bottom: 1rem;
  }

  @media (max-width: 769px) {
    width: 100%;
    padding: 1rem 3rem;
  }
  @media (max-width: 599px){
    padding: 1rem 2rem;
  }
`;

export const BtnToggleCalendar = styled.button`
  position: absolute;
  top: 1rem;
  left: 3rem;
  border: none;
  font-size: 1.7rem;
  background-color: transparent;
  @media (min-width: 770px){
    display: none;
  }
  @media (max-width: 599px){
    left: 2rem;
  }
`;

export const TarefasTop = styled.div`
  width: 100%;
`;

export const Titles = styled.div`
  h2 {
    color: ${lightTheme.colors.neutro900}; 
    margin-bottom: 1rem;
    text-align: center;
  }
  
  h3 {
    color: #808080;
    margin-bottom: 1rem;
    text-align: center;
  }
`;

export const Tarefas = styled.ul`
  list-style: none;
  padding: 0;
  width: 98%;
  p {
    width: 100%;
    margin-top: 1rem;
    margin-bottom: 1rem;
    text-align: center;
    font-size: 1.1rem;
  }
  max-height: 450px;
  overflow-y: ${({ numTarefas }) => numTarefas > 9 ? 'auto' : 'hidden'};
  scrollbar-width: thin; /* Firefox */
  scrollbar-color:  transparent; /* Cores para Firefox */
  
  /* Estilos para Chrome, Edge, e Safari */
  &::-webkit-scrollbar {
    width: 8px;
    opacity: ${({ numTarefas }) => numTarefas > 9 ? '1' : '0'}; 
    transition: opacity 0.3s ease; 
  }
  
  &::-webkit-scrollbar-thumb {
    background-color: ${lightTheme.colors.neutro100}; 
    border-radius: 8px;
    opacity: ${({ numTarefas }) => numTarefas > 9 ? '1' : '0'}; 
    transition: opacity 0.3s ease; 
  }
  
`;

export const Tarefa = styled.li`
  box-shadow: 0px 4px 8px rgba(0, 0, 0, 0.1);
  margin-bottom: 1rem;
  padding-left: .5rem;
  align-items: center;
  display: flex;
  justify-content: space-between;
  width: 100%;

  .tarefaText {
    overflow-x: auto;
    white-space: nowrap;
    scrollbar-width: none;
    -ms-overflow-style: none;  
    scrollbar-width: none;  
  }

  .tarefaText::-webkit-scrollbar {
    display: none;
  }
`;

export const TarefaButtons = styled.div`
  display: flex;
  margin-left: .8rem;
  button {
    margin-left: .2rem;
    padding: 0.5rem;
    border: none;
    color: #ffffff;
    cursor: pointer;
    transition: 0.5s;
    opacity: .8;

    &:hover {
      opacity: 1;
    }
  }

  button.edit {
    background-color: ${lightTheme.colors.editColor}; 
  }

  button.del {
    background-color: ${lightTheme.colors.delete_close}; 
  }
`;

export const TarefasSave = styled.div`
  width: 100%;
  display: flex;
  input {
    width: 100%;
    padding: 0.5rem;
    border: 1px solid #ccc;
    border-radius: 4px;
  }
  
  button {
    padding: 0.5rem 1rem;
    border: none;
    background-color: ${lightTheme.colors.save_linkHover};
    font-weight: bold;
    color: #fff;
    cursor: pointer;
    opacity: .8;
    transition: 0.5s;

    &:hover {
      opacity: 1;
    }
  }

  @media (max-width: 769px) {
    width: 80%;
    margin: 1rem auto 0 auto;
  }
`;

export const TarefasEdit = styled.div`
  position: absolute;
  top: 50%;
  left: 50%;
  width: 80%;
  height: 20%;
  padding: 2rem 1.5rem;
  transform: translate(-50%, -50%);
  display: ${(props) => props.open ? 'flex' : 'none'};
  flex-direction: column;
  align-items: center;
  justify-content: space-between;
  background-color: ${lightTheme.colors.neutro100};
  box-shadow: 0px 4px 8px rgba(0, 0, 0, 0.1);
  border-radius: 10px;

  .close {
    position: absolute;
    top: 4%;
    right: 2%;
    color: ${lightTheme.colors.delete_close}; 
    font-weight: bold;
    border: none;
    font-size: 1.4rem;
    cursor: pointer;
  }

  .inputButton {
    display: flex;
    width: 100%;

    input {
      width: 100%;
      padding: 0.5rem;
      border: 1px solid #ccc;
    }

    button {
      padding: 0.5rem 1rem;
      margin-left: 1rem;
      border: none;
      background-color: ${lightTheme.colors.save_linkHover}; 
      color: white;
      cursor: pointer;
      opacity: .8;
      transition: .5s;

      &:hover {
        opacity: 1;
      }
    }
  }
  @media (max-width: 1048px){
    width: 40%;
  }

  @media (max-width: 769px) {
    width: 60%;
    height: 60%;
  }
  @media (max-width: 599px) {
    width: 70%;
  }
`;
