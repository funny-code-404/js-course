import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom';
import AppLayout from './components/AppLayout';
import PhonePage from './components/PhonePage';
import NamePage from './components/NamePage';
import NameDetails from './components/NamePage/nameDetails';
import PhonesDetails from './components/PhonePage/phoneDetails';

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<AppLayout />}>
          <Route path="names" element={<NamePage />} />
          <Route path="names/:id" element={<NameDetails />} />
          <Route path="phones" element={<PhonePage />} />
          <Route path="phones/:id" element={<PhonesDetails />} />
        </Route>
      </Routes>
    </Router>
  );
}

export default App;
