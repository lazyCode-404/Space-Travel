import { useSelector, useDispatch } from 'react-redux';
import { useEffect } from 'react';
import { fetchDragons } from '../redux/dragons/dragons';
import Dragon from '../Components/Dragon';

const Dragons = () => {
  const dispatch = useDispatch();
  const dragons = useSelector((state) => state.dragons);
  useEffect(() => {
    dispatch(fetchDragons);
  }, []);

  return (
    <div className="mb-5 mt-5 ">
      {dragons.length ? dragons.map((dragon) => <Dragon key={dragon.id} dragon={dragon} />)
        : <p>No Dragons available!</p>}
    </div>
  );
};

export default Dragons;
