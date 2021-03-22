import React from 'react';
import { useParams } from 'react-router-dom';
import { useQuery } from '@apollo/client';
import { getOnePokemon } from '../queries/queries';

const Details = () => {
  const { id } = useParams();

  const { error, loading, data: { pokemon = {} } = {} } = useQuery(
    getOnePokemon,
    {
      variables: { id },
    }
  );

  if (loading) {
    return <div>Loading...</div>;
  }

  if (error) {
    return <div>Error: {error?.message}</div>;
  }

  return (
    <>
      <h1>Details</h1>
      <p>{pokemon.name}</p>
      <img src={pokemon.image} alt='' />
    </>
  );
};

export default Details;
