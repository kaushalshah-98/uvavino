import { createSlice } from '@reduxjs/toolkit';
import type { PayloadAction } from '@reduxjs/toolkit';
import { UVAVINO_BODY } from '~/config';

export interface ThemeState {
  value: 'light-theme' | 'dark-theme';
}

const initialState: ThemeState = {
  value: 'light-theme',
};

export const themeSlice = createSlice({
  name: 'theme',
  initialState,
  reducers: {
    changeTheme: (state, action: PayloadAction<(typeof initialState)['value']>) => {
      state.value = action.payload;
    },
    toggleTheme: (state) => {
      const body = document.getElementById(UVAVINO_BODY);
      if (state.value === 'light-theme') {
        body?.classList.add('dark-theme');
      } else {
        body?.classList.remove('dark-theme');
      }
      state.value = state.value === 'light-theme' ? 'dark-theme' : 'light-theme';
    },
  },
});

export const { changeTheme, toggleTheme } = themeSlice.actions;

export default themeSlice.reducer;
