import styled from 'styled-components';
import Input from '../components/Input';
import useForm from '../hooks/useForm';
import { validateLoginForm } from '../utils/formValidation';
import { useNavigate } from 'react-router-dom';

import {
  INPUT_EMAIL_NAME,
  INPUT_EMAIL_PLACEHOLDER,
  INPUT_PASSWORD_NAME,
  INPUT_PASSWORD_PLACEHOLDER,
} from '../constant';
import { postSignIn, postSignUp } from '../api/main';

const LoginForm = () => {
  const navigate = useNavigate();
  const {
    values,
    errors,
    isValidate,
    handleChange,
    handleSignIn,
    handleSignUp,
  } = useForm({
    initialValues: {
      [INPUT_EMAIL_NAME]: '',
      [INPUT_PASSWORD_NAME]: '',
    },
    onSignIn: async (values) => {
      const response = await postSignIn(values);
      if (response.statusText === 'OK') {
        navigate('/todo');
      }
    },
    onSignUp: (values) => {
      postSignUp(values);
    },
    validate: validateLoginForm,
  });

  return (
    <FormContainer>
      <form>
        <Input
          name={INPUT_EMAIL_NAME}
          value={values[INPUT_EMAIL_NAME]}
          placeholder={INPUT_EMAIL_PLACEHOLDER}
          errorMessage={errors[INPUT_EMAIL_NAME]}
          onChange={handleChange}
        />
        <Input
          name={INPUT_PASSWORD_NAME}
          type={'password'}
          value={values[INPUT_PASSWORD_NAME]}
          placeholder={INPUT_PASSWORD_PLACEHOLDER}
          errorMessage={errors[INPUT_PASSWORD_NAME]}
          onChange={handleChange}
        />
        <Button onClick={handleSignIn} disabled={!isValidate}>
          로그인 하기
        </Button>
        <Button onClick={handleSignUp} disabled={!isValidate}>
          회원가입 하기
        </Button>
      </form>
    </FormContainer>
  );
};

export default LoginForm;

const FormContainer = styled.div`
  display: flex;
  width: 100%;
  align-items: center;
  flex-direction: column;
`;

const Button = styled.button`
  margin: 1rem;
  width: 10rem;
  height: 3rem;
  border: none;
  border-radius: 1rem;
  background-color: gray;
  color: white;
  font-size: 1.1rem;
  font-weight: 600;
  :hover {
    cursor: pointer;
    background-color: black;
  }
`;
