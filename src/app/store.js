import {configureStore} from '@reduxjs/toolkit'
import { cryptoApi } from '../Services/cryptoApi'
import { cryptoNewsApi } from '../Services/cryptoNewsApi'

export default configureStore({
  reducer: {
    [cryptoApi.reducerPath]: cryptoApi.reducer,
    [cryptoNewsApi.reducerPath]: cryptoNewsApi.reducer
  },
  middleware:(getDefaultMiddldeware) => (
    getDefaultMiddldeware()
    .concat(cryptoApi.middleware)
    .concat(cryptoNewsApi.middleware)
  ),  
})