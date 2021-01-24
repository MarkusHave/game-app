import React, { useState, useEffect } from 'react';
import { useStyles } from './styles';
import axios from 'axios';
import { Game } from './interfaces/game.interface';
import { Container, Typography, Box } from '@material-ui/core';

const App = () => {
  const [gamesData, setGamesData] = useState<Array<Game> | undefined>(
    undefined
  );
  const styles = useStyles();
  const BASE_URL = 'https://api.rawg.io/api';

  const getData = async (query: string): Promise<void> => {
    axios
      .get(`${BASE_URL}${query}`)
      .then((res) => {
        const gamesList: Array<Game> = res.data.results.map((game: any) => {
          return {
            id: game.id,
            name: game.name,
            platforms: game.platforms,
            background_image: game.background_image,
            releaseDate: game.released,
            metacritic: game.metacritic,
          };
        });

        setGamesData(gamesList);
        console.log(gamesData);
      })
      .catch((err) => {
        console.log(err);
      });
  };

  useEffect(() => {
    getData('/games');
  }, []);

  return (
    <Container className={styles.root} maxWidth='sm'>
      <Box>
        <Typography variant='h2'>GameApp</Typography>
      </Box>
      <Typography>Test</Typography>
    </Container>
  );
};

export default App;
