import { configureStore } from '@reduxjs/toolkit'
import todoReduce from "./slice/todoSlice"

export const store=configureStore({
    reducer:{
        todos:todoReduce
    }
})

export type RootState = ReturnType<typeof store.getState>
export type AppDispatch = typeof store.dispatch