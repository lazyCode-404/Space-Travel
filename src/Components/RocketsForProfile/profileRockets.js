import { useSelector } from 'react-redux';

const MyRockets = () => {
  const rockets = useSelector((state) => state.rockets).filter(
    (rocket) => rocket.reserved === true,
  );
  if (rockets.length === 0) {
    return (
      <>
        <div className="myRockets">
          <h1>My Rockets</h1>
          <p>No rockets reserved</p>
        </div>
      </>
    );
  }
  return (
    <>
      <div className="myRockets">
        <h1>My Rockets</h1>
        { rockets.map((rocket) => (
          <p className="listItem" key={rocket.id}>
            {rocket.name}
          </p>
        ))}
      </div>
    </>
  );
};

export default MyRockets;
