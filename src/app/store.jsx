import { configureStore } from '@reduxjs/toolkit';
import { dataSlice } from '../ducks/dataSlice';
const store = configureStore({
  reducer: {
    data: dataSlice.reducer,
  },
});

window.store = store;

export default store;