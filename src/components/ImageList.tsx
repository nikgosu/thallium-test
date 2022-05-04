import React, {FC} from 'react';
import Loader from "./UI/loader/Loader";
import ImageItem from "./ImageItem";
import {Grid} from "@mui/material";
import {useAppSelector} from "../hooks/redux";

interface Props {
  setImageUrl: (imageUrl: string) => void
  setOpen: (open: boolean) => void
}

const ImageList:FC<Props> = ({setImageUrl, setOpen}: Props) => {

  const {imagePage, isLoading} = useAppSelector(state => state.ImageReducer)

  const handleOpen = (imageUrl: string) => {
    setImageUrl(imageUrl)
    setOpen(true)
  }

  if (isLoading) {
    return <div className={'loader-div'}><Loader/></div>
  }

  return (
    <Grid
      container
      spacing={{ xs: 2, md: 3 }}
      columns={{ xs: 4, sm: 8, md: 12 }}
    >
      {imagePage.map((image) => (
        <ImageItem key={image.id} handleOpen={handleOpen} image={image}/>
        ))
      }
    </Grid>
  );
};

export default ImageList;