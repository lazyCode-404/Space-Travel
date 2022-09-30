import './App.css';
import { useEffect } from 'react';
import { Routes, Route } from 'react-router-dom';
import { useDispatch } from 'react-redux';
import { fetchDragons } from './redux/dragons/dragons';

import Nav from './components/Nav';
import Missions from './components/pages/Missions';
import Dragons from './components/pages/dragons/Dragons';
import Profile from './components/pages/Profile';

export default function App() {
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(fetchDragons());
  }, []);
  return (
    <div className="App">
      <Nav />
      <Routes>
        <Route path="/missions" element={<Missions />} />
        <Route path="/dragons" element={<Dragons />} />
        <Route path="/profile" element={<Profile />} />
      </Routes>
    </div>
  );
}
