import { createSlice } from '@reduxjs/toolkit';
import { getUsers } from './operations';

const initialState = {
  items: [],
  isLoading: false,
  error: null,
  following: [],
  page: 1,
};

const usersSlice = createSlice({
  name: 'users',
  initialState,
  reducers: {
    changeFollowing(state, action) {
      const user = state.items.filter(user => user.id === action.payload.id);
      user[0].followers = action.payload.followers;

      if (action.payload.follow) {
        state.following.push(action.payload);
      } else {
        const index = state.following.findIndex(
          item => item.id === action.payload.id
        );

        state.following.splice(index, 1);
      }
    },
    changePage(state, action) {
      state.page = action.payload;
    },
  },

  extraReducers: builder => {
    builder
      .addCase(getUsers.pending, state => {
        state.isLoading = true;
      })
      .addCase(getUsers.fulfilled, (state, action) => {
        state.isLoading = false;
        state.error = null;
        state.items.push(...action.payload);
      })
      .addCase(getUsers.rejected, (state, action) => {
        state.isLoading = false;
        state.error = action.payload;
      });
  },
});

export const { changeFollowing, changePage } = usersSlice.actions;
export const usersReducer = usersSlice.reducer;
