import { createSlice } from '@reduxjs/toolkit'
import type { PayloadAction } from '@reduxjs/toolkit'

interface IUser {
  fullName: string;
  givenName: string;
  userId: string;
  email: string;
  userRoles: string[];
}

interface IReduxStore {
  user: IUser
}

const initialState: IReduxStore = {
  user: {
    fullName: 'Test',
    givenName: 'Test',
    userId: 'Test',
    email: 'Test@gmail.com',
    userRoles: ['ADMIN'],
  },
};

export const counterSlice = createSlice({
  name: 'root',
  initialState,
  reducers: {
    addUser: (state, action: PayloadAction<IUser>) => {
      state.user = action.payload;
    },
  },
});

const actions = counterSlice.actions;

export { actions };

export default counterSlice.reducer;
