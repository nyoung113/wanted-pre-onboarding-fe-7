import { useState, useEffect } from 'react';
import styled from 'styled-components';
import Input from '../components/Input';

const TodoList = ({ todos, onEdit, onDelete }) => {
  const [isEditingList, setIsEditingList] = useState(new Map());

  useEffect(() => {
    setIsEditingList(
      new Map(
        todos.map((todo) => [todo.id, { isEditing: false, todo: todo.todo }])
      )
    );
  }, [todos]);

  const handleEditTodo = (e, id) => {
    const { value } = e.target;
    setIsEditingList((isEditingList) => {
      isEditingList.set(id, {
        isEditing: true,
        todo: value,
      });
      return new Map([...isEditingList]);
    });
  };

  return (
    <ul>
      {todos.map((todo) => (
        <Todo key={todo.id}>
          {isEditingList.get(todo.id)?.isEditing ? (
            <StyledInput
              value={isEditingList.get(todo.id)?.todo}
              onChange={(e) => {
                handleEditTodo(e, todo.id);
              }}
            ></StyledInput>
          ) : (
            <TodoText
              completed={todo.isCompleted}
              onClick={() => {
                onEdit(todo.id, todo.todo, !todo.isCompleted);
              }}
            >
              {todo.todo}
            </TodoText>
          )}
          {isEditingList.get(todo.id)?.isEditing ? (
            <div>
              <Button
                onClick={() => {
                  onEdit(
                    todo.id,
                    isEditingList.get(todo.id).todo,
                    todo.isCompleted
                  );
                }}
              >
                ✅
              </Button>
              <Button
                onClick={() => {
                  setIsEditingList((isEditingList) => {
                    isEditingList.set(todo.id, {
                      isEditing: false,
                      todo: todo.todo,
                    });
                    return new Map([...isEditingList]);
                  });
                }}
              >
                ❎
              </Button>
            </div>
          ) : (
            <Button
              onClick={() => {
                setIsEditingList((isEditingList) => {
                  isEditingList.set(todo.id, {
                    isEditing: true,
                    todo: todo.todo,
                  });
                  return new Map([...isEditingList]);
                });
              }}
            >
              ✏️
            </Button>
          )}
          <Button
            onClick={() => {
              onDelete(todo.id);
            }}
          >
            ❌
          </Button>
        </Todo>
      ))}
    </ul>
  );
};

export default TodoList;

const Todo = styled.li`
  display: flex;
  align-items: center;
  height: 2rem;
`;

const TodoText = styled.p`
  width: 20rem;
  text-decoration: ${(props) => (props.completed ? 'line-through' : 'none')};
  :hover {
    cursor: pointer;
  }
`;

const Button = styled.button`
  margin: 0.1rem;
  width: 4rem;
  height: 3rem;
  border: none;
  border-radius: 1rem;
  background-color: lightgray;
  color: white;
  font-size: 1rem;
  :hover {
    cursor: pointer;
    background-color: gray;
  }
`;

const StyledInput = styled.input`
  width: 100%;
  height: 3rem;
  border: none;
  margin: 0 0.5rem 0.5rem 0.5rem;
  font-size: 1rem;
`;

const Flex = styled.input`
  display: flex;
`;
