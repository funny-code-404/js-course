import { Route, BrowserRouter as Router, Routes } from 'react-router-dom';
import Details from './components/Details';
import MainPage from './components/MainPage';

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<MainPage />} />
        <Route path="/:id" element={<Details />} />
      </Routes>
    </Router>
  );
}

export default App;
