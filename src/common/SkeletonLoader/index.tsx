import React from 'react';

import { Skeleton } from '@mui/lab';
import { Grid, SkeletonProps } from '@mui/material';

function SkeletonLoader(props: SkeletonProps) {
  return (
    <Grid container>
      <Skeleton variant="rectangular" width="100%" height={200} {...props} />
    </Grid>
  );
}

export default SkeletonLoader;
