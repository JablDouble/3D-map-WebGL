import { createAsyncThunk } from '@reduxjs/toolkit';

const createSafeAsyncThunk = <Returned, ThunkArg = void>(
  name: string,
  thunk: (payload: ThunkArg, thunkAPI: any) => Promise<Returned>,
) => {
  return createAsyncThunk(name, async (payload: ThunkArg, thunkAPI) => {
    try {
      return await thunk(payload, thunkAPI);
    } catch (error) {
      const errorMessage = error?.response?.data?.message || 'Something went wrong';
      return thunkAPI.rejectWithValue(errorMessage);
    }
  });
};

export default createSafeAsyncThunk;
