import { createSlice } from '@reduxjs/toolkit';
import { SubMenus } from '~/config';
import type { PayloadAction } from '@reduxjs/toolkit';

export interface HeaderState {
  subMenu: SubMenus | null;
  showSearchMenu: boolean;
  showTopBar: boolean;
}

const initialState: HeaderState = {
  subMenu: null,
  showSearchMenu: false,
  showTopBar: true,
};

export const headerSlice = createSlice({
  name: 'header',
  initialState,
  reducers: {
    setSubMenu: (state, action: PayloadAction<HeaderState['subMenu']>) => {
      state.subMenu = action.payload;
    },
    setShowTopBar: (state, action: PayloadAction<HeaderState['showTopBar']>) => {
      state.showTopBar = action.payload;
    },
    setShowSearchMenu: (state, action: PayloadAction<HeaderState['showSearchMenu']>) => {
      state.showSearchMenu = action.payload;
    },
  },
});

export const { setSubMenu, setShowTopBar, setShowSearchMenu } = headerSlice.actions;

export default headerSlice.reducer;
