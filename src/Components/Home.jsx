// import { useState } from 'react'
import React from 'react';
import { useSelector } from 'react-redux';


const handleClick = (e) => {
  console.log(e)

}

const Home = () => {
  const data = useSelector((state) => state.data.items);
  const status = useSelector((state) => state.data.status);
  const error = useSelector((state) => state.data.error);
  if (status === 'loading') {
    return <p>Loading...</p>;
  }

  if (status === 'failed') {
    return <p>Error: {error}</p>;
  }

  return (
    <div>
      <ul>
        {data.map((category, index) => (
          <li key={index} onClick={() => handleClick(category)}>
          {category}
        </li>
        ))}
      
      </ul>
    </div>
  );

}

export default Home



