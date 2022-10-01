const apiUrl = 'https://api.spacexdata.com/v3/dragons';
const FETCH_DRAGONS = 'dragons/FETCH_DRAGONS';
export const CHANGE_STATUE = 'dragon/CHANGE_STATUE';

const initialState = [];

const dragonReducer = (state = initialState, action) => {
  switch (action.type) {
    case FETCH_DRAGONS:
      return action.payload;
    case CHANGE_STATUE:
      return state.map((dragon) => {
        if (dragon.id === action.id) {
          return { ...dragon, reserved: !dragon.reserved };
        }
        return dragon;
      });
    default: { return state; }
  }
};

const onSuccess = (dragons) => ({
  type: FETCH_DRAGONS,
  payload: dragons,
});

export const fetchDragons = async (dispatch) => {
  const response = await fetch(apiUrl).then((response) => response.json())
    .then((data) => data.map((item) => ({
      id: item.id,
      name: item.name,
      description: item.description,
      type: item.type,
      flickrImages: item.flickr_images[0],
      reserved: false,
    })));
  dispatch(onSuccess(response));
};

export default dragonReducer;
