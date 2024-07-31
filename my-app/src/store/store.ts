import { configureStore } from '@reduxjs/toolkit';
import orderReducer from './redux/orderSlice';
import productReducer from './redux/productSlice';
import userReducer from './redux/userSlice';
import orderHistoryReducer from './redux/orderHistorySlice';
import tobaccoReducer from './redux/tobaccoSlice';

const store = configureStore({
  reducer: {
    order: orderReducer,
    product: productReducer,
    user: userReducer,
    orderHistory: orderHistoryReducer,
    tobacco: tobaccoReducer
  },
});

export default store;

export type RootState = ReturnType<typeof store.getState>;

export type AppDispatch = typeof store.dispatch;
