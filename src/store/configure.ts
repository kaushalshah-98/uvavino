import { configureStore } from '@reduxjs/toolkit';
import { setupListeners } from '@reduxjs/toolkit/dist/query';
import { auctionApi } from './auctions';
import { countReducer } from './counter';
import { headerReducer } from './header';
import { robotApi } from './robots';
import { themeReducer } from './theme';
import { auctionPackApi } from './auction-pack';

export const store = configureStore({
  reducer: {
    header: headerReducer,
    counter: countReducer,
    theme: themeReducer,
    [robotApi.reducerPath]: robotApi.reducer,
    [auctionApi.reducerPath]: auctionApi.reducer,
    [auctionPackApi.reducerPath]: auctionPackApi.reducer,
  },
  devTools: process.env.NODE_ENV !== 'production',
  middleware(getDefaultMiddleware) {
    return getDefaultMiddleware().concat(
      robotApi.middleware,
      auctionApi.middleware,
      auctionPackApi.middleware
    );
  },
});

setupListeners(store.dispatch);

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
