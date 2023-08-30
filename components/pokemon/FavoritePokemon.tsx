import { Grid } from '@nextui-org/react';
import { FC } from 'react';
import { FavoriteCardPokemon } from './FavoriteCardPokemon';

interface Props {
  pokemons: number[];
}

export const FavoritePokemon: FC<Props> = ({ pokemons }) => {
  return (
    <Grid.Container gap={2} direction="row" justify="flex-start">
      {pokemons.map((id) => (
        <FavoriteCardPokemon key={id} pokemonID={id} />
      ))}
    </Grid.Container>
  );
};
