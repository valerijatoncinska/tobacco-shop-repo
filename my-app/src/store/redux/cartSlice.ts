import { createSlice, createAsyncThunk, PayloadAction } from '@reduxjs/toolkit';
import { RootState } from '../store';

interface CartItem {
  id: number;
  product: string;
  quantity: number;
  price: number;
}

interface CartState {
  items: CartItem[];
  status: 'idle' | 'loading' | 'succeeded' | 'failed';
  error: string | null;
}

const initialState: CartState = {
  items: [],
  status: 'idle',
  error: null,
};

export const fetchCartItems = createAsyncThunk(
  'cart/fetchCartItems',
  async () => {
    // Логика для получения товаров, например, запрос на сервер
    const response = await fetch('/api/cart');
    if (!response.ok) {
      throw new Error('Failed to fetch cart items');
    }
    const data: CartItem[] = await response.json();
    return data;
  }
);

const cartSlice = createSlice({
  name: 'cart',
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(fetchCartItems.pending, (state) => {
        state.status = 'loading';
      })
      .addCase(fetchCartItems.fulfilled, (state, action: PayloadAction<CartItem[]>) => {
        state.items = action.payload;
        state.status = 'succeeded';
      })
      .addCase(fetchCartItems.rejected, (state, action) => {
        state.status = 'failed';
        state.error = action.error.message || 'Failed to fetch cart items';
      });
  },
});

export default cartSlice.reducer;