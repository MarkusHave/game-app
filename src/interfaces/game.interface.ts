export interface Game {
  readonly id: number;
  readonly name: string;
  readonly platforms: Array<Object>;
  readonly background_image: string;
  readonly releaseDate: string;
  readonly metacritic: number;
}
