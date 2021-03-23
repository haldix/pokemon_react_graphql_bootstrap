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
    <div class='album py-5 bg-light'>
      <div class='container'>
        <div class='row row-cols-1 row-cols-sm-2 row-cols-md-3 g-3'>
          {pokemons.map((p) => (
            <Card key={p.id} pokemon={p} />
          ))}
        </div>
      </div>
    </div>
  );
};

export default Pokemons;
