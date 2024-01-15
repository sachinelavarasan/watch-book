import React from 'react';

import { Skeleton } from '@mui/lab';

function SkeletonLoader({ height, width }: { height: string; width: string }) {
  return (
    <Skeleton
      animation="wave"
      height={height}
      width={width}
      style={{ marginBottom: 6 }}
      sx={{ bgcolor: '#e6e0ea' }}
    />
  );
}

export default SkeletonLoader;
