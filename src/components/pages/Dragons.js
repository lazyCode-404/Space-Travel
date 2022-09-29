import React from 'react';

const Dragons = () => {
  const fetchDragons = () => {
    fetch('https://api.spacexdata.com/v3/dragons')
      .then((res) => res.json())
      .then((json) => console.log(json));
  };
  fetchDragons();
  return (
    <div>Dragons</div>
  );
};

export default Dragons;
