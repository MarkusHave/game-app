import React from 'react';
import { useStyles } from '../styles';
import { Box } from '@material-ui/core';
import { Pagination } from '@material-ui/lab';

export const PaginationBox = ({ getData, page }: any) => {
  const styles = useStyles();
  return (
    <Box className={styles.paginationBox}>
      <Pagination
        count={10}
        shape='rounded'
        color='primary'
        page={page}
        onChange={(event, value) => getData(value)}
      />
    </Box>
  );
};
