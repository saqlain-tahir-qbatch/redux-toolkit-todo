import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";

const initialState = {
        list:[]
    }

export const fetchName = createAsyncThunk(
      'getName',
      async () => {
          const res = await fetch('https://jsonplaceholder.typicode.com/users')
          const result = await res.json();
          return {name:result[Math.floor(Math.random()*10)].name}
      }
);
export const todoSlice = createSlice({
    name:"todo",
    initialState,
    reducers : {
        addtodo: (state, actions) => {
            state.list.push(actions.payload); 
        },
        deletetodo:(state, actions) => {
            const newList =  state.list.filter((elem) => elem.id !== actions.payload.id)
            state.list=newList;
            
        },
        removetodo:(state) => {
            state.list=[];
        }
    },
    extraReducers: {
        [fetchName.fulfilled]:(state, actions) => {
            state.list.push(actions.payload); 
        },
        [fetchName.pending]:(state, actions) => {
            state="pending";

        },
        [fetchName.rejected]:(state, actions) => {
            state="Try Again"

        }

    },

    })
    export const { addtodo, deletetodo, removetodo } = todoSlice.actions

    export default todoSlice.reducer
