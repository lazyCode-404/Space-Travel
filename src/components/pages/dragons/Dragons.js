import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { fetchDragons, reserve, cancelReservation } from '../../../redux/dragons/dragons';
import styles from './styles/dragons.module.css';

export default function Dragons() {
  const dragons = useSelector((state) => state.dragons.dragons);
  const dispatch = useDispatch();

  useEffect(() => {
    if (!dragons) {
      dispatch(fetchDragons());
    }
  }, []);

  const handleReserve = (id) => {
    dispatch(reserve(id));
  };

  const cancelReserve = (id) => {
    dispatch(cancelReservation(id));
  };

  return (
    <section className={styles.main}>
      {dragons?.map((drag) => (
        <div key={drag.id} className={styles.dragonList}>
          <div>
            <img src={drag.images} className={styles.images} alt="" />
          </div>
          <div>
            <h1>{drag.name}</h1>
            <p>{drag.type}</p>
            <div className={styles.cardItems}>
              <h3>{drag.names}</h3>
              <p>
                <span className={drag.reserved ? styles.badge : styles.noBadge}>
                  Reserved
                </span>
                {drag.description}
              </p>
              {drag.reserved ? (
                <button
                  id={drag.id}
                  className={styles.cancelDragon}
                  type="button"
                  onClick={(e) => {
                    cancelReserve(e.target.id);
                  }}
                >
                  Cancel Reservation
                </button>
              ) : (
                <button
                  id={drag.id}
                  className={styles.button}
                  type="button"
                  onClick={(e) => {
                    handleReserve(e.target.id);
                  }}
                >
                  Reserve Dragon
                </button>
              )}
            </div>
          </div>
        </div>
      ))}
    </section>
  );
}
