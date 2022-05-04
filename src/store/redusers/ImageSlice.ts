import {Image} from "../../types/types";
import {createSlice, PayloadAction} from "@reduxjs/toolkit";

interface ImageState {
  images: Image[]
  imagePage: Image[]
  sortedImages: Image[]
  sort: number
  limit: number
  currentIndex: number
  isLoading: boolean
  error: string
}

const initialState: ImageState = {
  images: [],
  imagePage: [],
  sortedImages: [],
  sort: 0,
  limit: 10,
  currentIndex: 0,
  isLoading: false,
  error: ''
}

export const ImageSlice = createSlice({
  name: 'image',
  initialState,
  reducers: {
    imagesFetching(state) {
      state.isLoading = true
    },
    imagesFetchingSuccess(state, action: PayloadAction<Image[]>) {
      state.isLoading = false
      state.error = ''
      state.images = action.payload
      state.imagePage = state.images.slice(state.currentIndex, state.limit + state.currentIndex)
      state.currentIndex = state.limit
    },
    imagesFetchingError(state, action: PayloadAction<string>) {
      state.isLoading = false
      state.error = action.payload
    },
    deleteImage(state, action: PayloadAction<Image>) {
      state.images = state.images.filter(image => image.id !== action.payload.id)
      state.sortedImages = state.sortedImages.filter(image => image.id !== action.payload.id)
      state.imagePage = state.imagePage.filter(image => image.id !== action.payload.id)
    },
    setNextPage(state) {
      if (state.sort === 0) {
        if (state.currentIndex >= state.images.length) return
        state.imagePage = state.images.slice(state.currentIndex, state.currentIndex + state.limit)
        state.currentIndex = state.currentIndex + state.limit
      } else {
        if (state.currentIndex >= state.sortedImages.length) return
        state.imagePage = state.sortedImages.slice(state.currentIndex, state.currentIndex + state.limit)
        state.currentIndex = state.currentIndex + state.limit
      }
    },
    setPreviousPage(state) {
      if (state.currentIndex === 10) return;
      if (state.sort === 0) {
        state.imagePage = state.images.slice(state.currentIndex - (state.limit + state.limit), state.currentIndex - state.limit)
        state.currentIndex = state.currentIndex - state.limit
      } else {
        state.imagePage = state.sortedImages.slice(state.currentIndex - (state.limit + state.limit), state.currentIndex - state.limit)
        state.currentIndex = state.currentIndex - state.limit
      }
    },
    setSort(state, action: PayloadAction<number>) {
      state.sort = action.payload

      if (state.sort === 0) {
        state.imagePage = state.images.slice(state.currentIndex, state.limit + state.currentIndex)
      } else {
        state.sortedImages = state.images.filter(image => image.albumId === action.payload)
        state.imagePage = state.sortedImages.slice(0, state.limit)
      }

      state.currentIndex = 0
      state.currentIndex = state.limit
    }
  }
})

export default ImageSlice.reducer