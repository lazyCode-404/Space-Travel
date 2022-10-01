import axios from 'axios';

const missinsAPI = 'https://api.spacexdata.com/v3/missions';
const FETCH_MISSIONS = 'FETCH_MISSIONS';
const initialState = [];

export const fetchMissions = () => async (dispatch) => {
  const response = await axios.get(missinsAPI);
  return dispatch({
    type: FETCH_MISSIONS,
    payload: response.data,
  });
};

const missionsReducer = (state = initialState, action) => {
  switch (action.type) {
    case FETCH_MISSIONS:
      return action.payload.map((mission) => (
        {
          mission_id: mission.mission_id,
          mission_name: mission.mission_name,
          description: mission.description,
          active: false,
        }));
    case 'change':
      return state.map((mission) => {
        if (mission.mission_id === action.id) {
          return { ...mission, active: !mission.active };
        }
        return mission;
      });
    default:
      return state;
  }
};
export default missionsReducer;
