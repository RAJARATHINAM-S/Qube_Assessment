import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  collection: null,
  filterTypes: [],
};

const CommonSlice = createSlice({
  name: 'common',
  initialState,
  reducers: {
    setCollectionDetails: (state, { payload }) => {
      state.collection = payload;
    },
    setFilterTypes: (state, { payload }) => {
      state.filterTypes = payload;
    },
  },
});

export const { setCollectionDetails, setFilterTypes } = CommonSlice.actions;
export default CommonSlice.reducer;
