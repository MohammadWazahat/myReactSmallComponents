import { configureStore } from '@reduxjs/toolkit'
import secondSlice from '../features/secondSlice/secondSlice'
import firstSlice from '../features/firstSlice/firstSlice'
import { api } from '../features/apiSlice/apiSlice'

export const store = configureStore({
    
  reducer: {
    storeSliceOne : firstSlice ,
    storeSliceTwo : secondSlice ,
    [api.reducerPath]: api.reducer,
  },
  middleware: (getDefaultMiddleware) => [
    ...getDefaultMiddleware(),
    api.middleware,
  ],
})