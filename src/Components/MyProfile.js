import { React } from 'react';
import MyRockets from './RocketsForProfile/profileRockets';
import MyMissions from './MissionsForProfile/profileMissions';
import MyDragons from './DragonsForProfile/profileDragons';

const MyProfile = () => (
  <div className="myProfileContainer">
    <MyMissions />
    <MyRockets />
    <MyDragons />
  </div>
);

export default MyProfile;
