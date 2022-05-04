import {configureStore, combineReducers} from "@reduxjs/toolkit";
import ImageReducer from "./redusers/ImageSlice";

export const rootReducer = combineReducers({
  ImageReducer
})

export const setupStore = () => {
  return configureStore({
    reducer: rootReducer,
  })
}

export type RootState = ReturnType<typeof rootReducer>
export type AppStore = ReturnType<typeof setupStore>
export type AppDispatch = AppStore['dispatch']