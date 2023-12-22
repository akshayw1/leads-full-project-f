import { configureStore } from '@reduxjs/toolkit';
import { persistReducer, persistStore } from 'redux-persist';
import expireReducer from 'redux-persist-expire';
import logger from 'redux-logger';
import thunk from 'redux-thunk';
import storage from 'redux-persist/lib/storage';
import signupSlice from './reducers/signupSlice';
import loginReducer from './reducers/loginSlice';
import searchSlice from './reducers/searchSlice';
import statisticsSlice from './reducers/statisticsSlice';
import verifySlice from './reducers/verifyEmailSlice';

const middlewares = [];
if (process.env.NODE_ENV === 'development') {
  middlewares.push(logger);
}

const persistConfig = {
  key: 'root',
  storage,
  transforms: [
    expireReducer(loginReducer, {
      persistedAtKey: '__persisted_at',
      expireSeconds: 86400,
      expiredState: {
        data: null,
        isLoading: false,
        isAuthenticated: false,
      },
      autoExpire: false,
    }),
  ],
};

const persistedLogin = persistReducer(persistConfig, loginReducer);

const store = configureStore({
  reducer: {
    login: persistedLogin,
    signup: signupSlice,
    search: searchSlice,
    statistics: statisticsSlice,
    verify: verifySlice,
  },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware().concat([...middlewares, thunk]),
});

export const persistor = persistStore(store);
export default store;
