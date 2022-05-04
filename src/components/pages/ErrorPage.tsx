import React, {FC} from 'react';
import {Box, Typography} from "@mui/material";

interface Props {
  error: string
}

const ErrorPage:FC<Props> = ({error}: Props) => {
  return (
    <Box
      height="100vh"
      display="flex"
      justifyContent="center"
      alignItems="center"
    >
      <Typography variant="h1">{error}</Typography>
    </Box>
  );
};

export default ErrorPage;