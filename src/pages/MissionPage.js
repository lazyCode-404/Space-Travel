/* eslint-disable jsx-a11y/control-has-associated-label */
import { React, useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { fetchMissions } from '../Redux/Missions/missions';

const Missions = () => {
  const missions = useSelector((state) => state.missionsReducer);
  const dispatch = useDispatch();
  useEffect(() => {
    if (!missions.length) dispatch(fetchMissions());
  }, []);
  const buttonHandler = (id) => {
    dispatch({
      type: 'change',
      id,
    });
  };
  return (
    <table>
      <tbody>
        <tr className="th">
          <th>Mission</th>
          <th>Description</th>
          <th>Statue</th>
          <th />

        </tr>
        {missions.map((mission) => (
          <tr key={mission.mission_id}>
            <th>{mission.mission_name}</th>
            <td>{mission.description}</td>
            <td style={{
              textAlign: 'center',
              width: '13%',
            }}
            >
              {' '}
              <span className={mission.active ? 'status1' : 'status2'}>{mission.active ? 'Active Member' : 'NOT A MEMBER'}</span>
            </td>
            <td style={{
              textAlign: 'center',
              width: '13%',
            }}
            >
              {mission.active
                ? (
                  <button
                    className="cancelBtn"
                    onClick={() => buttonHandler(mission.mission_id)}
                    type="button"
                  >
                    Leave Mission
                  </button>
                ) : (
                  <button
                    className="joinBtn"
                    onClick={() => buttonHandler(mission.mission_id)}
                    type="button"
                  >
                    Join Mission
                  </button>
                )}
            </td>
          </tr>
        ))}
      </tbody>
    </table>
  );
};

export default Missions;
