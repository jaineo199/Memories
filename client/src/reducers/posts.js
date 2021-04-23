// import { FETCH_ALL, CREATE, UPDATE, DELETE} from '../constants/actionTypes';

// export default (posts = [], action) => {
//   switch (action.type) {
//     case FETCH_ALL:
//       return action.payload;
//     case CREATE:
//       return [...posts, action.payload];
//     case UPDATE:
//       return posts.map((post) => (post._id === action.payload._id ? action.payload : post));
//     case DELETE:
//       return posts.filter((post) => post._id !== action.payload);
      
//     default:
//       return posts;
//   }
// };

import { createSlice } from '@reduxjs/toolkit'

const initialState = [
  
]

const postsSlice = createSlice({
  name: 'posts',
 initialState,
  reducers: {
     
      DELETE: (state, action ) => {
        state = state.filter((post) => post._id !== action.payload);
 
       },
     
       create:(state, action) => {
         console.log(state);
         console.log(action);
         state = [...state, action.payload]
       },
       UPDATE:(state, action) => {
         state = state.map((post) => (post._id === action.payload._id ? action.payload : post));
       }

    
  }
})

export const { UPDATE, DELETE,create} = postsSlice.actions

export default postsSlice.reducer

