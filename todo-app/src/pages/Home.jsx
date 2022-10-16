import LoginForm from '../components/LoginForm';
import LocalStorage from '../storage/localStorage';
import { useNavigate } from 'react-router-dom';
import { LOCAL_STORAGE_TOKEN_KEY } from '../constant';
import { useEffect } from 'react';
function Home() {
  const localStorage = new LocalStorage();
  const navigate = useNavigate();
  useEffect(() => {
    if (localStorage.getItem(LOCAL_STORAGE_TOKEN_KEY)) {
      navigate('/todo');
    }
  }, []);

  return <LoginForm />;
}

export default Home;
