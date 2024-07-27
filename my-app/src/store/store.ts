import { configureStore } from '@reduxjs/toolkit';
import orderReducer from './redux/orderSlice';
import userReducer from './redux/userSlice';
import productReducer from './redux/productSlice';

const store = configureStore({
  reducer: {
    orders: orderReducer,
    users: userReducer,
    products: productReducer,
  },
});

export default store;

export type RootState = ReturnType<typeof store.getState>;

export type AppDispatch = typeof store.dispatch;