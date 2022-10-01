import React from 'react';
import { Route, Routes, Navigate } from 'react-router-dom';
import Header from './Components/Header';
import RocketPage from './pages/RocketPage';
import Missions from './pages/MissionPage';
import MyProfile from './Components/MyProfile';
import Dragons from './pages/dragonPage';

export const App = () => (
  <>
    <Header />
    <Routes>
      <Route exact path="/" element={<Navigate to="/Rockets" />} />
      <Route exact path="/Rockets" element={<RocketPage />} />
      <Route exact path="/Dragons" element={<Dragons />} />
      <Route exact path="/Missions" element={<Missions />} />
      <Route exact path="/MyProfile" element={<MyProfile />} />
    </Routes>
  </>
);

export default App;
