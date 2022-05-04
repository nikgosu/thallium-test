import {AppDispatch} from "../store";
import axios from "axios";
import {Image} from "../../types/types";
import {ImageSlice} from "./ImageSlice";

export const fetchImages = () => async (dispatch: AppDispatch) => {
  try {
    dispatch(ImageSlice.actions.imagesFetching())
    const response = await axios.get<Image[]>('https://jsonplaceholder.typicode.com/photos'
    )
    dispatch(ImageSlice.actions.imagesFetchingSuccess(response.data))
  } catch (e: any) {
    dispatch(ImageSlice.actions.imagesFetchingError(e.message))
  }
}