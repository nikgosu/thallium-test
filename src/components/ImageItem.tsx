import React, {FC} from 'react';
import {Button, Card, CardActions, CardContent, CardMedia, Grid, Typography} from "@mui/material";
import {Image} from "../types/types";
import {useAppDispatch} from "../hooks/redux";
import {ImageSlice} from "../store/redusers/ImageSlice";

interface Props {
  image: Image
  handleOpen: (imageUrl: string) => void
}

const ImageItem:FC<Props> = ({image, handleOpen}: Props) => {
  const dispatch = useAppDispatch()

  return (
    <Grid item xs={2} sm={4} md={4}>
      <Card className={'card'}>
        <CardMedia
          onClick={() => handleOpen(image.url)}
          component="img"
          height="140"
          image={image.thumbnailUrl}
          alt="green iguana"
        />
        <CardContent>
          <Typography
            gutterBottom
            variant="body1"
            component="div"
          >
            Title: {image.title}
          </Typography>
          <Typography
            variant="body2"
            color="text.secondary"
          >
            Album ID: {image.albumId}
          </Typography>
        </CardContent>
        <CardActions>
          <Button
            onClick={() => dispatch(ImageSlice.actions.deleteImage(image))}
            sx={{ verticalAlign: 'bottom' }}
            size="small"
            variant='contained'>Delete</Button>
        </CardActions>
      </Card>
    </Grid>
  );
};

export default ImageItem;