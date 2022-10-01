import axios from 'axios';

const apiUrl = 'https://api.spacexdata.com/v3/rockets';
const FETCH_ROCKETS = 'rockets/FETCH_ROCKETS';
const CHANGE_STATUS = 'rockets/CHANGE_STATUS';

const initialState = [];

const onSuccess = (rockets) => ({
  type: FETCH_ROCKETS,
  payload: rockets,
});

export const fetchRockets = async (dispatch) => {
  const response = await axios.get(apiUrl);
  const fetchedData = response.data.map((item) => ({
    id: item.id,
    name: item.rocket_name,
    description: item.description,
    flickrImages: item.flickr_images[0],
  }));
  dispatch(onSuccess(fetchedData));
};

export const ChangeStatus = (id) => ({
  type: CHANGE_STATUS,
  id,
});

const rocketReducer = (state = initialState, action) => {
  switch (action.type) {
    case FETCH_ROCKETS: {
      return action.payload;
    }
    case CHANGE_STATUS: {
      return state.map((rocket) => {
        if (rocket.id !== action.id) { return rocket; }

        if (rocket.reserved === true) {
          return { ...rocket, reserved: false };
        }
        return { ...rocket, reserved: true };
      });
    }
    default: { return state; }
  }
};

export default rocketReducer;
