import { configureStore } from '@reduxjs/toolkit'
import counterReducer from './counter/counterSlice'
import todoReducer from './todo/todoSlice'
const store = configureStore({ reducer: { counter: counterReducer, todo: todoReducer } })
export default store