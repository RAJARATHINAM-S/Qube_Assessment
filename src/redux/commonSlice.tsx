import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  collection: {},
};

const CommonSlice = createSlice({
  name: 'common',
  initialState,
  reducers: {
    setCollectionDetails: (state, { payload }) => {
      state.collection = payload;
    },
  },
});

export const { setCollectionDetails } = CommonSlice.actions;
export default CommonSlice.reducer;
