import styled from 'styled-components';
import Input from '../components/Input';
import { validateEmail, validatePassword } from '../utils/validation';
import { postSignUp, postSignIn } from '../api/postForm';
import { useState } from 'react';

function LoginForm() {
  const [isEmailValidate, setIsEmailValidate] = useState(false);
  const [isPasswordValidate, setIsPasswordValidate] = useState(false);

  const handleSignUp = (e) => {
    e.preventDefault();
    console.log('clicked');
  };

  const handleSignIn = (e) => {
    e.preventDefault();
    console.log('clicked');
  };

  const handleEmailChange = (email) => {
    console.log(email);
    setIsEmailValidate(validateEmail(email));
  };

  const handlePasswordChange = (password) => {
    console.log(password);
    setIsPasswordValidate(validatePassword(password));
  };

  return (
    <FormContainer>
      <FormTitle>로그인 / 회원가입</FormTitle>
      <form>
        <Input
          placeholder={'이메일을 입력하세요'}
          errorMessage={'이메일 형식에 맞지 않습니다'}
          isValidate={isEmailValidate}
          onChange={handleEmailChange}
        />
        <Input
          placeholder={'비밀번호를 입력하세요'}
          errorMessage={'비밀번호는 8자 이상이어야 합니다'}
          isValidate={isPasswordValidate}
          onChange={handlePasswordChange}
        />
        <Button
          onClick={handleSignIn}
          disabled={!(isPasswordValidate && isEmailValidate)}
        >
          로그인 하기
        </Button>
        <Button
          onClick={handleSignUp}
          disabled={!(isPasswordValidate && isEmailValidate)}
        >
          회원가입 하기
        </Button>
      </form>
    </FormContainer>
  );
}

export default LoginForm;

const FormContainer = styled.div`
  display: flex;
  flex-direction: column;
  padding: 20px;
`;
const FormTitle = styled.h2``;

const Button = styled.button`
  :hover {
    cursor: pointer;
  }
`;
