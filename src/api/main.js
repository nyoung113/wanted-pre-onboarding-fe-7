import instance from './core';
import { getItem, setItem } from '../storage/localStorage';
import { LOCAL_STORAGE_TOKEN_KEY } from '../constant';

export const postSignIn = async ({ email, password }) => {
  try {
    const response = await instance.post(`/auth/signin`, {
      email,
      password,
    });
    setItem(LOCAL_STORAGE_TOKEN_KEY, response.data.access_token);
    return response;
  } catch (error) {
    if (error.response.status === 401) {
      alert('비밀번호가 다릅니다.');
    }
    if (error.response.status === 404) {
      alert('회원정보가 없습니다.');
    }
  }
};

export const postSignUp = async ({ email, password }) => {
  try {
    await instance.post(`/auth/signup`, {
      email,
      password,
    });
  } catch (error) {
    alert(error.response.data.message);
  }
};

export const getTodos = async () => {
  try {
    const response = await instance.get('/todos', {
      headers: {
        Authorization: `Bearer ${getItem(LOCAL_STORAGE_TOKEN_KEY)}`,
      },
    });
    return response.data;
  } catch (error) {
    console.log(error);
  }
};

export const postTodos = async (todo) => {
  try {
    const response = await instance.post(
      '/todos',
      {
        todo,
      },
      {
        headers: {
          Authorization: `Bearer ${getItem(LOCAL_STORAGE_TOKEN_KEY)}`,
        },
      }
    );
    return response.data;
  } catch (error) {
    console.log(error);
  }
};

export const updateTodo = async ({ id, todo, isCompleted }) => {
  try {
    const response = await instance.put(
      `/todos/${id}`,
      {
        todo,
        isCompleted,
      },
      {
        headers: {
          Authorization: `Bearer ${getItem(LOCAL_STORAGE_TOKEN_KEY)}`,
        },
      }
    );
    return response.data;
  } catch (error) {
    console.log(error);
  }
};

export const deleteTodo = async ({ id }) => {
  try {
    await instance.delete(`/todos/${id}`, {
      headers: {
        Authorization: `Bearer ${getItem(LOCAL_STORAGE_TOKEN_KEY)}`,
      },
    });
  } catch (error) {
    console.log(error);
  }
};
