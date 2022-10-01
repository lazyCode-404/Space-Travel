import { NavLink } from 'react-router-dom';
import logo from '../assets/space-traveler-logo.png';

const Header = () => (
  <>
    <header>
      <div>
        <img src={logo} alt="logo" />
        <h1>Space Travelers Hub</h1>
      </div>
      <nav>
        <NavLink
          to="/Rockets"
          style={({ isActive }) => ({
            color: isActive ? '#fff' : '#545e6f',
            background: isActive ? '#7600dc' : '#f0f0f0',
          })}
        >
          Rockets
        </NavLink>
        <NavLink
          to="/Dragons"
          style={({ isActive }) => ({
            color: isActive ? '#fff' : '#545e6f',
            background: isActive ? '#7600dc' : '#f0f0f0',
          })}
        >
          Dragons
        </NavLink>
        <NavLink
          to="/Missions"
          style={({ isActive }) => ({
            color: isActive ? '#fff' : '#545e6f',
            background: isActive ? '#7600dc' : '#f0f0f0',
          })}
        >
          Missions
        </NavLink>
        <NavLink
          to="/MyProfile"
          style={({ isActive }) => ({
            color: isActive ? '#fff' : '#545e6f',
            background: isActive ? '#7600dc' : '#f0f0f0',
          })}
        >
          MyProfile
        </NavLink>
      </nav>
    </header>
    <div className="Line" />

  </>
);

export default Header;
