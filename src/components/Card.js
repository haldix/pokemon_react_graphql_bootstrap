import React from 'react';
import { Link } from 'react-router-dom';

const Card = ({ pokemon: { name, id, image } }) => {
  return (
    <div className='col'>
      <Link to={`/pokemon/${id}`} className='text-decoration-none'>
        <div className='card p-2' style={{ width: '18rem' }}>
          <img src={image} className='card-img-top' alt={name} />
          <div className='card-body'>
            <h5 className='card-title text-center '>{name}</h5>
          </div>
        </div>
      </Link>
    </div>
  );
};

export default Card;
