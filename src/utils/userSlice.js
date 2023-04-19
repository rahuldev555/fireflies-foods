import { createSlice } from '@reduxjs/toolkit';

const userSlice = createSlice({
  name: 'user',
  initialState: '',
  reducers: {
    login: (state, action) => {},
    logout: (state, action) => {},
  },
});

export const { login, logout } = userSlice.actions;

export default userSlice.reducer;
