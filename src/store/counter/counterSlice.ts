import { createSlice, createAsyncThunk } from '@reduxjs/toolkit'

import { RootState, Payload } from './type'

const initialState = {
  value: 0,
  status: 'idle'
}

export const counterSlice = createSlice({
  name: 'counter',
  initialState,
  reducers: {
    increment: state => {
      state.value += 1
    },
    decrement: state => {
      state.value -= 1
    },
    incrementByAmount: (state, action) => {
      state.value += action.payload
    },
  },
  extraReducers: (builder) => {
    builder
      .addCase(incrementAsync.pending, (state) => {
        state.status = 'loading'
      })
      .addCase(incrementAsync.fulfilled, (state, action: Payload) => {
        state.status = 'succeed'
        state.value += action.payload
      })
  },
})

// export const incrementAsync = (amount: any) => (dispatch: any) => {
//   setTimeout(() => {
//     dispatch(incrementByAmount(amount))
//   }, 1000)
// }

export const incrementAsync = createAsyncThunk('counter/incrementAsync', async (amount: any) => {
  const response = await new Promise((resolve) => {
    setTimeout(() => {
      resolve(amount)
    }, 2000)
  })
  return response
})



export const { increment, decrement, incrementByAmount } = counterSlice.actions

export const selectCount = (state: RootState) => state.counter.value
export const selectStatus = (state: RootState) => state.counter.status

export default counterSlice.reducer