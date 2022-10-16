import { Routes, Route } from 'react-router';
import Layout from './layout/Layout';
import Home from './pages/Home';
import Main from './pages/Main';

function App() {
  return (
    <div className="App">
      <Routes>
        <Route
          exact={true}
          path="/"
          element={
            <Layout>
              <Home />
            </Layout>
          }
        />
        <Route
          path="/todo"
          element={
            <Layout>
              <Main />
            </Layout>
          }
        />
      </Routes>
    </div>
  );
}

export default App;
