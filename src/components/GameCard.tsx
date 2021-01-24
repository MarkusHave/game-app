import React from 'react';
import {
  Card,
  Box,
  CardHeader,
  CardContent,
  CardMedia,
  Typography,
} from '@material-ui/core';
import { Game } from '../interfaces/game.interface';
import { useStyles } from '../styles';

type GameCardProps = {
  game: Game;
};

export const GameCard = ({ game }: GameCardProps) => {
  const styles = useStyles();
  return (
    <Card className={styles.card}>
      <CardHeader title={game.name} />
      <CardContent>
        <CardMedia className={styles.media} image={game.background_image} />
        <Typography>Released: {game.releaseDate}</Typography>
        <Typography>Metacritic score: {game.metacritic}</Typography>
      </CardContent>
    </Card>
  );
};
