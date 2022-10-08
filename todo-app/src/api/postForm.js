import axios from 'axios';

export const postSignUp = (email, password) => {
  const res = axios
    .post(
      '/auth/signup',
      {
        email,
        password,
      },
      {
        headers: {
          'Content-Type': 'application/json',
        },
      }
    )
    .then((response) => response)
    .catch(function (error) {
      alert(error);
    });
  console.log(res);
};

export const postSignIn = (email, password) => {
  const res = axios
    .post(
      '/auth/signIn',
      {
        email,
        password,
      },
      {
        headers: {
          'Content-Type': 'application/json',
        },
      }
    )
    .then((response) => response)
    .catch(function (error) {
      alert(error);
    });
  console.log(res);
};
