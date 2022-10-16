import styled from 'styled-components';
import Input from '../components/Input';
import TodoList from '../components/TodoList';
import { useState, useEffect } from 'react';
import { getTodos, postTodos, updateTodo, deleteTodo } from '../api/main';
import LocalStorage from '../storage/localStorage';
import { LOCAL_STORAGE_TOKEN_KEY } from '../constant';
import { useNavigate } from 'react-router-dom';

function Main() {
  const localStorage = new LocalStorage();
  const navigate = useNavigate();

  const [todo, setTodo] = useState('');
  const [todoList, setTodoList] = useState([]);

  const getTodoList = async () => {
    const data = await getTodos();
    setTodoList(data);
  };

  useEffect(() => {
    if (!localStorage.getItem(LOCAL_STORAGE_TOKEN_KEY)) {
      navigate('/');
    }
    getTodoList();
  }, []);

  const handleChange = (e) => {
    const { value } = e.target;
    setTodo(value);
  };

  const handleClick = async () => {
    if (todo === '') return;
    await postTodos(todo);
    getTodoList();
    setTodo('');
  };

  const handleEditTodo = async (id, todo, isCompleted) => {
    await updateTodo({ id, todo, isCompleted });
    getTodoList();
  };

  const handleDeleteButtonClick = async (id) => {
    await deleteTodo({ id });
    getTodoList();
  };

  return (
    <MainContainer>
      <AddInputContainer>
        <Input value={todo} onChange={handleChange} />
        <AddButton onClick={handleClick}>추가</AddButton>
      </AddInputContainer>
      <TodoList
        todos={todoList}
        onEdit={handleEditTodo}
        onDelete={handleDeleteButtonClick}
      />
    </MainContainer>
  );
}

export default Main;

const MainContainer = styled.div`
  width: 50%;
`;

const AddInputContainer = styled.div`
  display: flex;
`;

const AddButton = styled.button`
  width: 3rem;
`;
