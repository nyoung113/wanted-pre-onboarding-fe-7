import LoginForm from '../components/LoginForm';
import { getItem } from '../storage/localStorage';
import { useNavigate } from 'react-router-dom';
import { LOCAL_STORAGE_TOKEN_KEY } from '../constant';
import { useEffect } from 'react';
import styled from 'styled-components';

function Home() {
  const navigate = useNavigate();
  useEffect(() => {
    if (getItem(LOCAL_STORAGE_TOKEN_KEY)) {
      navigate('/todo');
    }
  }, []);

  return (
    <div>
      <FormTitle>로그인 / 회원가입</FormTitle>
      <LoginForm />
    </div>
  );
}

export default Home;
const FormTitle = styled.h2``;
