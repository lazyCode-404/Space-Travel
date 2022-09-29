import './App.css';
import { Routes, Route } from 'react-router-dom';
import Nav from './components/Nav';
import Missions from './components/pages/Missions';
import Profile from './components/pages/Profile';

function App() {
  return (
    <div className="App">
      <Nav />
      <Routes>
        <Route path="/missions" element={<Missions />} />
        <Route path="/profile" element={<Profile />} />
      </Routes>
    </div>
  );
}

export default App;
