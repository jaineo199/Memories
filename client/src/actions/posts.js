

import { UPDATE, DELETE,create} from '../reducers/posts'


import * as api from '../api/index.js';

export const getPosts = () => async (dispatch) => {
    try {
      const { data } = await api.fetchPosts();
  
      // dispatch({ type: FETCH_ALL, payload: data });
    } catch (error) {
      console.log(error.message);
    }
  };
  
  export const createPost = (post) => async (dispatch) => {
    try {
      const { data } = await api.createPost(post);
  
      dispatch(create(data));
    } catch (error) {
      console.log(error.message);
    }
  };
  
  export const updatePost = (id, post) => async (dispatch) => {
    try {
      const { data } = await api.updatePost(id, post);
  
      dispatch(UPDATE(data));
    } catch (error) {
      console.log(error.message);
    }
  };
  

  
  export const deletePost = (id) => async (dispatch) => {
    try {
      await api.deletePost(id);
  
      dispatch(DELETE(id));
    } catch (error) {
      console.log(error.message);
    }
  };
