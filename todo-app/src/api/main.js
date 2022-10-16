import instance from './core';
import LocalStorage from '../storage/localStorage';
import { LOCAL_STORAGE_TOKEN_KEY } from '../constant';

export const postSignIn = async ({ email, password }) => {
  const localStorage = new LocalStorage();
  try {
    const response = await instance.post(`/auth/signin`, {
      email,
      password,
    });
    localStorage.setItem(LOCAL_STORAGE_TOKEN_KEY, response.data.access_token);
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
    const response = await instance.post(`/auth/signup`, {
      email,
      password,
    });
  } catch (error) {
    alert(error.response.data.message);
  }
};

export const getTodos = async () => {
  try {
    const localStorage = new LocalStorage();
    const response = await instance.get('/todos', {
      headers: {
        Authorization: `Bearer ${localStorage.getItem(
          LOCAL_STORAGE_TOKEN_KEY
        )}`,
      },
    });
    return response.data;
  } catch (error) {
    console.log(error);
  }
};

export const postTodos = async (todo) => {
  try {
    const localStorage = new LocalStorage();
    const response = await instance.post(
      '/todos',
      {
        todo,
      },
      {
        headers: {
          Authorization: `Bearer ${localStorage.getItem(
            LOCAL_STORAGE_TOKEN_KEY
          )}`,
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
    const localStorage = new LocalStorage();
    const response = await instance.put(
      `/todos/${id}`,
      {
        todo,
        isCompleted,
      },
      {
        headers: {
          Authorization: `Bearer ${localStorage.getItem(
            LOCAL_STORAGE_TOKEN_KEY
          )}`,
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
    const localStorage = new LocalStorage();
    await instance.delete(`/todos/${id}`, {
      headers: {
        Authorization: `Bearer ${localStorage.getItem(
          LOCAL_STORAGE_TOKEN_KEY
        )}`,
      },
    });
  } catch (error) {
    console.log(error);
  }
};
