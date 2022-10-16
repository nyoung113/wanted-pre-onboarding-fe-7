import LoginForm from '../components/LoginForm';
import { getItem } from '../storage/localStorage';
import { useNavigate } from 'react-router-dom';
import { LOCAL_STORAGE_TOKEN_KEY } from '../constant';
import { useEffect } from 'react';

function Home() {
  const navigate = useNavigate();
  useEffect(() => {
    if (getItem(LOCAL_STORAGE_TOKEN_KEY)) {
      navigate('/todo');
    }
  }, []);

  return <LoginForm />;
}

export default Home;
