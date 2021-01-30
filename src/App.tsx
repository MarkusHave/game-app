import React, { useState, useEffect } from 'react';
import { useStyles } from './styles';
import axios from 'axios';
import { Game } from './interfaces/game.interface';
import { GameCard } from './components/GameCard';
import { PaginationBox } from './components/PaginationBox';
import { Container, Typography, Box, Grid, Button } from '@material-ui/core';

const App = () => {
  const [page, setPage] = useState<number>(1);
  const [query, setQuery] = useState<string>('');
  const [gamesData, setGamesData] = useState<Array<Game> | undefined>(
    undefined
  );
  const styles = useStyles();
  const BASE_URL = 'https://api.rawg.io/api/games';

  const getData = async (_page = page, _query = query): Promise<void> => {
    setPage(_page);
    setQuery(_query);
    setGamesData(undefined);

    axios
      .get(`${BASE_URL}?page=${_page}${_query}`)
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
      })
      .catch((err) => {
        console.log(err);
      });
  };

  useEffect(() => {
    getData();
  }, []);

  return (
    <Container className={styles.root} maxWidth='sm'>
      <Box>
        <Typography variant='h2'>GameApp</Typography>
      </Box>
      <Box>
        <Typography variant='h6'>Sort by:</Typography>
        <Box>
          <Grid
            container
            direction='row'
            justify='space-evenly'
            alignItems='center'>
            <Button
              variant='contained'
              color='primary'
              onClick={() => getData(page, '&ordering=name')}>
              Name
            </Button>
            <Button
              variant='contained'
              color='primary'
              onClick={() => getData(page, '&ordering=-metacritic')}>
              Metascore
            </Button>
            <Button
              variant='contained'
              color='primary'
              onClick={() => getData(page, '&ordering=-released')}>
              Release date
            </Button>
            <Button
              variant='contained'
              color='secondary'
              onClick={() => getData(1, '')}>
              Reset
            </Button>
          </Grid>
        </Box>
      </Box>
      <PaginationBox getData={getData} page={page} />
      <Box>
        {gamesData ? (
          gamesData.map((game) => {
            return <GameCard key={game.id} game={game} />;
          })
        ) : (
          <Typography>Loading...</Typography>
        )}
      </Box>
    </Container>
  );
};

export default App;
