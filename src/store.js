import { configureStore } from '@reduxjs/toolkit';
import dataReducer, { fetchData } from './slice/dataslicer';

const store = configureStore({
  reducer: {
    data: dataReducer,
  },
});

store.dispatch(fetchData());

export default store;

