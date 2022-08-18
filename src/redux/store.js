import { configureStore } from '@reduxjs/toolkit';
import {
  persistStore,
  persistReducer,
  FLUSH,
  REHYDRATE,
  PAUSE,
  PERSIST,
  PURGE,
  REGISTER,
} from 'redux-persist'
import storage from 'redux-persist/lib/storage'
import {phoneBookSlice} from './contactsSlice';

const persistConfig = {
  key: 'contacts',
  version: 1,
  storage,
}

const persistedReducer = persistReducer(persistConfig, phoneBookSlice.reducer)

export const store = configureStore({
    reducer: {
        contacts: persistedReducer,
    },
    
    middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware({
      serializableCheck: {
        ignoredActions: [FLUSH, REHYDRATE, PAUSE, PERSIST, PURGE, REGISTER],
      },
    }),
})

export const persistor = persistStore(store);