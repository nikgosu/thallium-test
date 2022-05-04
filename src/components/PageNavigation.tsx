import React, {FC} from 'react';
import {Button, Grid} from "@mui/material";
import {ImageSlice} from "../store/redusers/ImageSlice";
import {useAppDispatch} from "../hooks/redux";

const PageNavigation:FC = () => {

  const dispatch = useAppDispatch()

  const handleNextPage = () => {
    dispatch(ImageSlice.actions.setNextPage())
  }

  const handlePreviousPage = () => {
    dispatch(ImageSlice.actions.setPreviousPage())
  }

  return (
    <Grid
      container
      mt={2}
      mb={3}
      spacing={2}
      rowSpacing={2}
      sx={{justifyContent: 'space-between'}}
    >
      <Grid sx={{alignSelf: 'start'}} item>
        <Button
          onClick={handlePreviousPage}
          size={"small"}
          variant={"outlined"}
        >Previous page</Button>
      </Grid>
      <Grid sx={{alignSelf: 'end'}} item>
        <Button
          onClick={handleNextPage}
          size={"small"}
          variant={"outlined"}
        >Next page</Button>
      </Grid>
    </Grid>
  );
};

export default PageNavigation;