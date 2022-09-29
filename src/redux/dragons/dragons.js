/* eslint-disable no-case-declarations */
const url = 'https://api.spacexdata.com/v3/dragons';
const GET_DRAGONS = 'GET_DRAGONS';
const RESERVE_DRAGONS = 'RESERVE_DRAGONS';
const FETCHING_DRAGONS_FAILED = 'FETCHING_DRAGONS_FAILED';
const CANCEL_RESERVATION = 'CANCEL_RESERVATION';

const initialState = [];

const loadDragons = (dragons) => ({
  type: GET_DRAGONS,
  payload: dragons,
});

export const reserve = (id) => ({
  type: RESERVE_DRAGONS,
  payload: id,
});

export const cancelReservation = (id) => ({
  type: CANCEL_RESERVATION,
  payload: id,
});

export const fetchDragons = () => async (dispatch) => {
  try {
    const response = await fetch(url);
    const dragons = await response.json();

    dispatch(
      loadDragons(
        dragons.map((dragons) => {
          const {
            id,
            name,
            type,
            flickr_images: images,
            reserved = false,
          } = dragons;

          return {
            id,
            name,
            type,
            images,
            reserved,
          };
        }),
      ),
    );
  } catch (err) {
    throw new Error(err);
  }
};

const dragonsReducer = (state = initialState, action) => {
  switch (action.type) {
    case GET_DRAGONS:
      return {
        ...state,
        dragons: action.payload,
      };

    case FETCHING_DRAGONS_FAILED:
      return {
        ...state,
        loading: false,
        error: action.payload,
      };
    case RESERVE_DRAGONS:
      const currentState = state.dragons.map((dragons) => {
        if (dragons.id === action.payload) {
          return { ...dragons, reserved: !dragons.reserved };
        }
        return dragons;
      });
      return { ...state, dragons: currentState };
    case CANCEL_RESERVATION:
      const cancelState = state.dragons.map((item) => {
        if (item.id === action.payload) {
          return { ...item, reserved: !item.reserved };
        }
        return item;
      });
      return { ...state, dragons: cancelState };
    default:
      return state;
  }
};

export default dragonsReducer;
