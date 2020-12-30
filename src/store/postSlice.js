import {createSlice, createAsyncThunk} from '@reduxjs/toolkit'
import { v4 as uuidv4 } from 'uuid'

export const fetchPost = createAsyncThunk(
    'fetchposts',
    async (data, thunkAPI)=>{
     
       const response= await fetch('https://jsonplaceholder.typicode.com/posts/')
        return await response.json()
    }
);

const postSlice = createSlice({
    name: 'postFetch',
    initialState: {
     posts:[]
       
    }
   ,
   
    extraReducers: {
        [fetchPost.fulfilled] : (state, action) =>{
            console.log(action.payload.slice(0,10))
             state.posts=action.payload.slice(0,10)
        }
    }
})

const postReducer = postSlice.reducer;
export default postReducer