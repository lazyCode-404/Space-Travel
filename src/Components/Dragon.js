import React from 'react';
import { useDispatch } from 'react-redux';
import PropTypes from 'prop-types';
import { CHANGE_STATUE } from '../redux/dragons/dragons';

const Dragon = ({ dragon }) => {
  const dispatch = useDispatch();

  const buttonHandler = (id) => {
    dispatch({
      type: CHANGE_STATUE,
      id,
    });
  };

  return (
    <div className="Container">
      <img src={dragon.flickrImages} alt="Rocket-Banner" />
      <div className="Content">
        <h1 className="type">{dragon.name}</h1>
        <h4>{dragon.type}</h4>
        <p>
          {dragon.reserved && (<span className="badge">Reserved</span>)}
          {dragon.description}
        </p>
        <div>
          {dragon.reserved
            ? (
              <button
                className="cancelBtn"
                onClick={() => buttonHandler(dragon.id)}
                type="button"
              >
                Cancel Reservation
              </button>
            ) : (
              <button
                className="joinBtn"
                onClick={() => buttonHandler(dragon.id)}
                type="button"
              >
                Reserve Dragon
              </button>
            )}
        </div>
      </div>
    </div>
  );
};

Dragon.propTypes = {
  dragon: PropTypes.shape({
    id: PropTypes.string,
    name: PropTypes.string,
    type: PropTypes.string,
    description: PropTypes.string,
    flickrImages: PropTypes.string,
    reserved: PropTypes.bool,
  }).isRequired,
};

export default Dragon;
