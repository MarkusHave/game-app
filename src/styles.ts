import { makeStyles } from '@material-ui/styles';

export const useStyles = makeStyles({
  root: {
    alignContent: 'center',
    backgroundColor: 'grey',
  },
  card: {
    margin: 10,
  },
  media: {
    height: 0,
    paddingTop: '56.25%',
  },
  paginationBox: {
    margin: 20,
    border: 'solid',
    display: 'flex',
    borderColor: 'black',
    borderWidth: '1px',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
