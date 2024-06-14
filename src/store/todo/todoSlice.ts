import { createSlice, createAsyncThunk } from '@reduxjs/toolkit'
import { v4 as uuidv4 } from 'uuid';

const initialState = {
  value: [
    {
      id: uuidv4(),
      title: '吃饭',
      content: '今天要吃饭',
      createTime: '2021-08-01 12:00:00',
      time: '2021-08-01 12:00:00',
      isDone: true,
      Tag: ['home'],
    },
    {
      id: uuidv4(),
      title: '睡觉',
      content: '今天要睡觉',
      createTime: '2021-08-01 12:00:00',
      time: '2021-08-01 12:00:00',
      isDone: false,
      Tag: ['home', 'work'],
    },
  ],
}

export const todoSlice = createSlice({
  name: 'todo',
  initialState,
  reducers: {
    addTodo: (state, payload) => {
      console.log(state.value, 'state');
      console.log(payload, 'payload');
      state.value.push(payload.payload)
    },
  },
  extraReducers: (builder) => {
    builder
      .addCase(updateStatusAsync.fulfilled, (state, action: any) => {

        const todoIdx = state.value.findIndex(item => {
          console.log(item.id == action.payload.id);
          return item.id == action.payload.id
        })
        state.value[todoIdx].isDone = !state.value[todoIdx].isDone
        return
      })
  },
})

export const updateStatusAsync = createAsyncThunk('todo/updateStatusAsync', async (data: any) => {
  const response = await new Promise((resolve) => {
    setTimeout(() => {
      resolve(data)
    }, 1000)
  })
  return response
})
export const { addTodo } = todoSlice.actions
export default todoSlice.reducer