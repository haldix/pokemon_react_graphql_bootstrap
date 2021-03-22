import React from 'react';
import { Link } from 'react-router-dom';

const Card = ({ pokemon: { name, id, height, weight } }) => {
  return (
    <div>
      <p>
        {name} {id}
      </p>
      <p>{height.maximum}</p>
      <p>{weight.maximum}</p>
      <Link to={`/pokemon/${id}`} />
    </div>
  );
};

export default Card;
