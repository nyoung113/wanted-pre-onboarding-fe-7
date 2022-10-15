import { Routes, Route } from 'react-router';
import Home from './pages/Home';
import Main from './pages/Main';

function App() {
  return (
    <div className="App">
      <Routes>
        <Route exact={true} path="/" element={<Home />} />
        <Route path="/todo" element={<Main />} />
      </Routes>
    </div>
  );
}

export default App;
