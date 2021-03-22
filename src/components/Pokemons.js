import React from 'react';
import { useQuery } from '@apollo/client';
import { getAllPokemons } from '../queries/queries';
import Card from './Card';

const Pokemons = () => {
  const { error, loading, data: { pokemons = [] } = {} } = useQuery(
    getAllPokemons,
    {
      variables: { first: 9 },
    }
  );

  if (loading) {
    return <div>Loading...</div>;
  }

  if (error) {
    return <div>{error?.message}</div>;
  }

  return (
    <div>
      {pokemons.map((p) => (
        <Card pokemon={p} />
      ))}
    </div>
  );
};

export default Pokemons;
