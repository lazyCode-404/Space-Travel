import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import PropTypes from 'prop-types';
import { fetchRockets, ChangeStatus } from '../Redux/Rockets/Rockets';

const Rocket = ({ rocket }) => {
  const dispatch = useDispatch();
  const handleChangeBtn = (id) => {
    dispatch(ChangeStatus(id));
  };
  const rockets = useSelector((state) => state.rockets);
  useEffect(() => {
    if (!rockets.length) dispatch(fetchRockets());
  }, []);

  return (
    <div className="Container">
      <img src={rocket.flickrImages} alt="Rocket-Banner" />
      <div className="Content">
        <div>
          <h3>{rocket.name}</h3>
          <div>
            <p>
              {rocket.reserved && (
              <span className="badge">Reserved</span>
              )}
              {rocket.description}
            </p>
          </div>

        </div>
        <div>
          {rocket.reserved
            ? (
              <button
                className="cancelBtn"
                onClick={() => handleChangeBtn(rocket.id)}
                type="button"
              >
                Cancel Reservation
              </button>
            ) : (
              <button
                className="joinBtn"
                onClick={() => handleChangeBtn(rocket.id)}
                type="button"
              >
                Reserve Rocket
              </button>
            )}
        </div>
      </div>
    </div>
  );
};

Rocket.propTypes = {
  rocket: PropTypes.shape({
    id: PropTypes.number,
    name: PropTypes.string,
    reserved: PropTypes.bool,
    description: PropTypes.string,
    flickrImages: PropTypes.instanceOf(Array),
  }).isRequired,
};

export default Rocket;
