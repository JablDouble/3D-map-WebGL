import { PayloadAction, createSlice } from '@reduxjs/toolkit';

interface AppState {
  isLoading: boolean;
  error: string;
}

const initialState: AppState = {
  isLoading: false,
  error: '',
};

export const appSlice = createSlice({
  name: 'root',
  initialState,
  reducers: {
    setLoading(state, action: PayloadAction<boolean>) {
      state.isLoading = action.payload;
    },
  },
});

export default appSlice.reducer;
