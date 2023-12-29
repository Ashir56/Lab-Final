import React from 'react'
import { useSelector } from 'react-redux';


const Category = () => {
    const data = useSelector((state) => state.category.items);

    return (
      <div>
        <ul>
          {data.map((category, index) => (
            <li key={index} >
            {category}
          </li>
          ))}
        
        </ul>
      </div>
    );
}

export default Category
