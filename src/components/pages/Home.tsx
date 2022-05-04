import React, {useEffect, useState} from 'react';
import {useAppDispatch, useAppSelector} from "../../hooks/redux";
import {fetchImages} from "../../store/redusers/ActionCreators";
import {Container} from "@mui/material";
import SortSelect from "../SortSelect";
import ImageList from "../ImageList";
import MyModal from "../UI/MyModal/MyModal";
import PageNavigation from "../PageNavigation";
import ErrorPage from "./ErrorPage";

const Home = () => {
  const dispatch = useAppDispatch()
  const {error} = useAppSelector(state => state.ImageReducer)

  const [open, setOpen] = useState(false)
  const [imageUrl, setImageUrl] = useState('')


  useEffect(() => {
    dispatch(fetchImages())
  }, [])

  const handleClose = () => setOpen(false)

  return (
    <Container className={'app-container'}>
      <SortSelect/>
      {error !== ''
        ? <ErrorPage error={error}/>
        : <>
          <ImageList setImageUrl={setImageUrl} setOpen={setOpen}/>
          <PageNavigation/>
          <MyModal open={open} handleClose={handleClose} imageUrl={imageUrl}/>
        </>
      }
    </Container>
  );
};

export default Home;