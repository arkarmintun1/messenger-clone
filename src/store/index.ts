import { configureStore } from '@reduxjs/toolkit';
import { appReducer } from './application.slice';

const middlewares: any[] = [];

if (__DEV__) {
  const createDebugger = require('redux-flipper').default; // <-- ADD THIS
  middlewares.push(createDebugger());
}

const store = configureStore({
  reducer: {
    app: appReducer,
  },
  middleware: getDefaultMiddleware =>
    getDefaultMiddleware().concat(middlewares),
});

export type RootState = ReturnType<typeof store.getState>;

export type AppDispatch = typeof store.dispatch;

export default store;
