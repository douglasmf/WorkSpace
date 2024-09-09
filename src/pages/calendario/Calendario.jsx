import { useContext, useState } from 'react';
import * as S from './Calendario.style';
import Calendar from 'react-calendar';
import { TarefasContext } from '../../context/TarefasContext';
import 'react-calendar/dist/Calendar.css';
import { FaEdit, FaRegCalendarAlt } from "react-icons/fa";


const Calendario = () => {
  const [selectedDate, setSelectedDate] = useState(new Date());
  const [taskText, setTaskText] = useState('');
  const [editMode, setEditMode] = useState(false);
  const [currentTaskId, setCurrentTaskId] = useState(null);
  const [openEdit, setOpenEdit] = useState(false);
  const [openCalendar, setOpenCalendar] = useState(false)

  const { tarefas, addTarefa, editTarefa, removeTarefa } = useContext(TarefasContext);

  const handleDateChange = (date) => {
    setSelectedDate(date);
    setEditMode(false); // Sai do modo de edição ao selecionar uma nova data
    setTaskText(''); // Limpa o campo de texto ao selecionar uma nova data
    setOpenCalendar(false); // Fecha o calendário após selecionar a data
  };

  const handleAddTask = () => {
    if (taskText.trim() === '') return;
    addTarefa(taskText, selectedDate.toISOString().split('T')[0]);
    setTaskText('');
  };

  const handleEditTask = () => {
    if (taskText.trim() === '' || currentTaskId === null) return;
    editTarefa(currentTaskId, taskText);
    setEditMode(false);
    setCurrentTaskId(null);
    setTaskText(''); // Limpar o campo de editar tarefa
    setOpenEdit(false); // Fechar o modal de edição
  };

  const handleDeleteTask = (taskId) => {
    removeTarefa(taskId); 
  };

  const handleOpenEditTask = (task) => {
    setTaskText(task.text); // Atualiza o texto ao abrir o modal de edição
    setEditMode(true);
    setCurrentTaskId(task.id);
    setOpenEdit(true);
  };

  const handleOpenEdit = () => {
    setOpenEdit(!openEdit);
    if (!openEdit) {
      setTaskText(''); // Limpa o texto ao abrir o modal de edição
    }
  };

  const handleOpenCalendar = () => {
    setOpenCalendar(!openCalendar)
  }

  // Filtra as tarefas para o dia selecionado
  const tarefasDoDia = tarefas.filter(tarefa => 
    tarefa.data === selectedDate.toISOString().split('T')[0] && !tarefa.isComplete
  );

  return (
    <S.CalendarioPage>
      <h1>Agende suas Tarefas</h1>
      <S.CalendarioContainer >
        <S.Calendario open={openCalendar}>
          <button 
            className='btnClose'
            onClick={handleOpenCalendar}
          >
            X
          </button>
          <Calendar 
            onChange={handleDateChange} 
            value={selectedDate} 
            className='calendarStyle'
          />
        </S.Calendario>
        <S.TarefasContainer>
          <S.BtnToggleCalendar 
            onClick={handleOpenCalendar}
          >
              <FaRegCalendarAlt />
          </S.BtnToggleCalendar>
          <S.TarefasTop>
            <S.Titles>
              <h2>Tarefas</h2>
              <h3>{selectedDate.toLocaleDateString('pt-BR', { day: '2-digit', month: '2-digit', year: 'numeric' })}</h3>
            </S.Titles>
            <S.Tarefas numTarefas={tarefasDoDia.length}>
              {tarefasDoDia.length > 0 ? (
                tarefasDoDia.map(tarefa => (
                  <S.Tarefa key={tarefa.id}>
                    <div className='tarefaText'>{tarefa.text} {tarefa.isComplete ? "(Concluída)" : ""}</div>
                    <S.TarefaButtons>
                      <button 
                        onClick={() => handleOpenEditTask(tarefa)}
                        className="edit"
                      >
                        <FaEdit />
                      </button>
                      <button 
                        onClick={() => handleDeleteTask(tarefa.id)}
                        className='del'
                      >
                          X
                        </button>
                    </S.TarefaButtons>
                  </S.Tarefa>
                ))
              ) : (
                <p>Nenhuma tarefa para este dia.</p>
              )}
            </S.Tarefas>
          </S.TarefasTop>
          <S.TarefasSave>
            <input
              type="text"
              value={!editMode ? taskText : ''}
              onChange={(e) => !editMode && setTaskText(e.target.value)} // Atualiza o texto somente se não estiver em modo de edição
              placeholder="Adicionar nova tarefa"
              onKeyDown={(e) => {
                if (e.key === 'Enter') {
                  handleAddTask();
                }
              }}
            />
            <button 
              type='submit'
              onClick={handleAddTask}
              className='add'
            >
              OK
            </button>
          </S.TarefasSave>
          <S.TarefasEdit open={openEdit}>
            <h2>Editar tarefa</h2>
            <button className='close' onClick={handleOpenEdit}>X</button>
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
        </S.TarefasContainer>
      </S.CalendarioContainer>
    </S.CalendarioPage>
  );
}

export default Calendario;
