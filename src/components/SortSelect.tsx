import React from 'react';
import {FormControl, InputLabel, MenuItem, Select, SelectChangeEvent} from "@mui/material";
import {ImageSlice} from "../store/redusers/ImageSlice";
import {useAppDispatch, useAppSelector} from "../hooks/redux";

const SortSelect = () => {

  const dispatch = useAppDispatch()
  const {sort} = useAppSelector(state => state.ImageReducer)
  const albumId = []

  for (let i = 1; i <= 100; i++) {
    albumId.push(i)
  }

  const handleChangeSort = (e: SelectChangeEvent<number>) => {
    dispatch(ImageSlice.actions.setSort(+e.target.value))
  }

  return (
    <FormControl sx={{marginBottom: '30px'}} fullWidth>
      <InputLabel id="demo-simple-select-label">Сортировка</InputLabel>
      <Select
        labelId="demo-simple-select-label"
        id="demo-simple-select"
        value={sort}
        label="Сортировка"
        onChange={handleChangeSort}
      >
        <MenuItem key={0} value={0}>All images</MenuItem>
        {albumId.map(id => (
          <MenuItem key={id} value={id}>Album ID: {id}</MenuItem>)
        )}
      </Select>
    </FormControl>
  );
};

export default SortSelect;