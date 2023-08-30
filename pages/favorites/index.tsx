import { useEffect, useState } from 'react';

import { Layout } from '../../components/layouts';
import { NoFavorites } from '../../components/ui';
import { localFavorites } from '../../utils';
import { FavoritePokemon } from '../../components/pokemon';

const FavoritesPage = () => {
  const [FavoritePokemons, setFavoritePokemons] = useState<number[]>([]);

  useEffect(() => {
    setFavoritePokemons(localFavorites.pokemons());
  }, []);

  return (
    <Layout title="Pokémons - Favoritos">
      {FavoritePokemons.length === 0 ? (
        <NoFavorites />
      ) : (
        <FavoritePokemon pokemons={FavoritePokemons} />
      )}
    </Layout>
  );
};

export default FavoritesPage;
