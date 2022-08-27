import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';
import { RootState } from '../../app/store';
import { fetchUserByEmail } from './userAPI';
import { IUserState } from './userInterface';
import { setUserEmail } from './userStorage';

const initialState: IUserState = {
  user: {
    id: 0,
    email: '',
    username: '',
  },
  status: 'idle',
  errors: [],
};

export const fetchUser = createAsyncThunk(
  'user/fetchUser',
  async (email: string, { rejectWithValue }) => {
    const response = await fetchUserByEmail(email);

    if (response.length === 0) {
      return rejectWithValue(["No user found"]);
    }

    return response[0];
  }
);

export const userSlice = createSlice({
  name: 'user',
  initialState,
  reducers: {
    resetErrorState: (state) => {
      state.errors = [];
    },
    saveEmailToLocalStorage: (state) => {
      setUserEmail(state.user.email);
    },
  },
  extraReducers: (builder) => {
    builder
      .addCase(fetchUser.pending, (state) => {
        state.status = 'loading';
        state.errors = [];
      })
      .addCase(fetchUser.fulfilled, (state, action) => {
        state.status = 'idle';
        state.errors = [];

        state.user.id = action.payload.id;
        state.user.email = action.payload.email;
        state.user.username = action.payload.username;
      })
      .addCase(fetchUser.rejected, (state, action) => {
        state.status = 'failed';
        state.errors = action.payload as string[];
      });
  },
});

export const { saveEmailToLocalStorage, resetErrorState } = userSlice.actions;

export const selectUser = (state: RootState) => state.user.user;
export const selectErrorMessages = (state: RootState) => state.user.errors;

export default userSlice.reducer;
