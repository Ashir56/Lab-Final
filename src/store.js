import { configureStore } from '@reduxjs/toolkit';
import dataReducer, { fetchData } from './slice/dataslicer';
import categorydetail from './slice/categorydetail';

const store = configureStore({
  reducer: {
    data: dataReducer,
    category: categorydetail

  },
});

store.dispatch(fetchData());

export default store;

