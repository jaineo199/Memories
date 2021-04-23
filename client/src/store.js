import { combineReducers } from 'redux'

import { configureStore } from '@reduxjs/toolkit'

import posts from './reducers/posts';



 


 

const appReducer = combineReducers({
posts
})

 

export const LogOut = () => ({ type: 'RESSET_STORE' })

 

const rootReducer = (state, action) => {
  if (action.type === 'RESSET_STORE') {
    state = {}
  }
  return appReducer(state, action)
}

 



 const store = configureStore({
  reducer: appReducer,
  devTools: true
})

export default store;