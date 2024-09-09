import styled from "styled-components";
import { lightTheme } from "../../../../themes/Themes";

export const TodoContainer = styled.div`
    display: flex;
    align-items: center;
    justify-content: space-between;
    padding:.5rem .8rem;
    width: 99%;
    box-shadow: 2px 0px 5px #0000001c;
    background-color: #fff;
    border: 2px solid #ffffff;
    border-radius: 6px;
    cursor: pointer;
    margin-right: .5rem;
    transition: .8s;
    &:hover{
        border: 2px solid ${lightTheme.colors.neutro400};
    }
`;



export const TodoContent = styled.div`
    width: 100%;
    overflow-x: auto;
    white-space: nowrap; /* Garante que o texto não quebre linhas */
    scrollbar-width: none; /* Oculta a barra de rolagem no Firefox */
      /* Permite scroll com o mouse */
    -ms-overflow-style: none;  /* IE e Edge */
    scrollbar-width: none;  /* Firefox */
    &::-webkit-scrollbar {
        display: none;
    }
    p {
        color: ${lightTheme.colors.neutro800};
        text-decoration: ${props => props.isComplete ? 'line-through' : 'none'};
    }
    
`;

export const Buttons = styled.div`
    display: flex;
    justify-content: flex-end;
    gap: .5rem;
    width: 45%;
    button {
        color: #fff;
        font-weight: bold;
        border: none;
        border-radius: 4px;
        cursor: pointer;
        opacity: .8;
        transition: .4s;
    }
    button:hover{
        opacity: 1;
    }
    .complete {
        padding: .4rem;
        background-color: ${lightTheme.colors.completeColor};
    }
    .edit{
        padding: .4rem;
        background-color: ${lightTheme.colors.editColor};
    }
    .delete {
        padding: .4rem .6rem;
        background-color: ${lightTheme.colors.deleteColor};
    }
`;