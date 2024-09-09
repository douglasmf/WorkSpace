import { useContext, useState, useEffect } from 'react';
import { TarefasContext } from '../../context/TarefasContext';
import * as S from './Tarefas.style';
import PesquisaContainer from './components/Pesquisa/PesquisaContainer';
import Todo from './components/Todo/Todo';
import TodoForm from './components/TodoForm/TodoForm';


const TarefasPage = () => {
  const { tarefas, addTarefa, removeTarefa, editTarefa, completeTarefa } = useContext(TarefasContext);
  const [scrollList, setScrollList] = useState(false);
  const [notTodo, setNotTodo] = useState(true);
  const [pesquisa, setPesquisa] = useState('');
  const [filtro, setFiltro] = useState('Todos');
  const [openEdit, setOpenEdit] = useState(false);
  const [currentTaskId, setCurrentTaskId] = useState(null);
  const [taskText, setTaskText] = useState('');

  // Pegar a data atual do computador
  const dataAtual = new Date().toISOString().split('T')[0];

   // Filtrar tarefas com base na data e em outros critérios como pesquisa e filtro
   const tarefasFiltradas = tarefas.filter((tarefa) => {
    const mesmaData = tarefa.data === dataAtual;
    const filtroCondicao = 
      (filtro === 'emAndamento' && !tarefa.isComplete) ||
      (filtro === 'concluidas' && tarefa.isComplete) ||
      (filtro === 'Todos');
    const pesquisaCondicao = tarefa.text?.toLowerCase().includes(pesquisa.toLowerCase());
    
    return mesmaData && filtroCondicao && pesquisaCondicao;
  });

  useEffect(() => {
    setScrollList(tarefasFiltradas.length > 4);
    setNotTodo(tarefasFiltradas.length === 0);
  }, [tarefasFiltradas]);

  const handleAddTodo = (text) => {
    addTarefa(text, dataAtual);
    setTaskText('');
  };

  const handleEditTask = () => {
    if (taskText.trim() === '' || currentTaskId === null) return;

    editTarefa(currentTaskId, taskText);
    setCurrentTaskId(null);
    setTaskText(''); 
    setOpenEdit(false); 
  };

  const handleOpenEditTask = (task) => {
    setTaskText(task.text); // Atualiza o texto ao abrir o modal de edição
    setCurrentTaskId(task.id);
    setOpenEdit(true);
  };

  const handlePesquisaChange = (e) => {
    setPesquisa(e.target.value);
  };

  const handleFiltroChange = (e) => {
    setFiltro(e.target.value);
  };

  const handleOpen = () => {
    setOpenEdit(!openEdit);
    if (!openEdit) {
      setTaskText(''); // Limpa o texto ao abrir o modal de edição
      setCurrentTaskId(null);
    }
  };

  return (
    <S.TarefasContainer>
      <S.Title>Lista de tarefas</S.Title>
      <PesquisaContainer 
        pesquisa={pesquisa}
        onPesquisaChange={handlePesquisaChange} 
        filtro={filtro}
        onFiltroChange={handleFiltroChange}  
      />
      <S.TodoList overFlow={scrollList}>
        {notTodo ? <p id='message'>Não Há Tarefas</p> :
        tarefasFiltradas.map((tarefa) => (
          <Todo 
            key={tarefa.id} 
            add={tarefa} 
            remove={() => removeTarefa(tarefa.id)} 
            complete={() => completeTarefa(tarefa.id)}
            edit={() => handleOpenEditTask(tarefa)} />
        ))}
      </S.TodoList>
      <TodoForm 
        addTodo={handleAddTodo} 
        taskText={taskText}
        setTaskText={setTaskText}
      />
      {openEdit && (
        <S.TarefasEdit open={openEdit}>
          <h2>Editar tarefa</h2>
          <button className='close' onClick={handleOpen}>X</button>
          <div className='inputButton'>
            <input
              type="text"
              value={taskText} 
              onChange={(e) => setTaskText(e.target.value)} 
              onKeyDown={(e) => {
                if (e.key === 'Enter') {
                  handleEditTask();
                }
              }}
            />
            <button 
              type='submit'
              onClick={handleEditTask}
            >
              Salvar
            </button>
          </div>
        </S.TarefasEdit>
      )}
    </S.TarefasContainer>
  );
};

export default TarefasPage;
