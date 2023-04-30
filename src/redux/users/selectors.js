import { createSelector } from '@reduxjs/toolkit';
import { selectFilter } from '../filters/selectors';
import { statusFilters } from '../filters/constatnts';

export const selectUsers = state => state.users.items;

export const selectIsLoading = state => state.users.isLoading;

export const selectError = state => state.users.error;

export const selectFollowing = state => state.users.following;

export const selectPage = state => state.users.page;

export const selectVisibleUsers = createSelector(
  [selectUsers, selectFollowing, selectFilter],

  (users, following, status) => {
    switch (status) {
      case statusFilters.followings:
        return users.filter(user =>
          following.some(item => item.id === user.id)
        );

      case statusFilters.follow:
        return users.filter(user =>
          following.every(item => item.id !== user.id)
        );

      default:
        return users;
    }
  }
);
