import { configureStore } from '@reduxjs/toolkit';
import { dataSlice } from '../ducks/dataSlice';
import { formService } from '../ducks/formService';
const store = configureStore({
  reducer: {
    [formService.reducerPath]: formService.reducer,
    data: dataSlice.reducer,
  },
  middleware: (getDefaultMiddleware) =>
		getDefaultMiddleware().concat(formService.middleware),
});

window.store = store;

export default store;