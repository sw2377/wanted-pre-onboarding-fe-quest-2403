import { createSlice, nanoid } from '@reduxjs/toolkit'

export interface ListType {
  id: string,
  text: string,
}

interface ListState {
  list: ListType[]
}

const initialState: ListState = {
  list: [],
}

export const listSlice = createSlice({
  name: 'list',
  initialState,
  reducers: {
    addList: (state, action) => {
      state.list.push({
        id: nanoid(), 
        text: action.payload
      })
    },
    removeList: (state, action) => {
      const targetId = action.payload;
      state.list = state.list.filter(item => item.id !== targetId);
    },
  },
})

export const { addList, removeList } = listSlice.actions

export default listSlice.reducer