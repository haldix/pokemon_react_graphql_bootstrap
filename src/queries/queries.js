import { gql } from '@apollo/client';

export const getAllPokemons = gql`
  query pokemons($first: Int!) {
    pokemons(first: $first) {
      id
      name
      image
      weight {
        minimum
        maximum
      }
      height {
        minimum
        maximum
      }
      maxHP
      maxCP
      attacks {
        special {
          name
          damage
        }
      }
    }
  }
`;

export const getOnePokemon = gql`
  query pokemon($id: String!) {
    pokemon(id: $id) {
      id
      name
      image
      types
      weaknesses
      classification
      weight {
        minimum
        maximum
      }
      height {
        minimum
        maximum
      }
      maxHP
      maxCP
      attacks {
        special {
          name
          damage
        }
      }
    }
  }
`;
