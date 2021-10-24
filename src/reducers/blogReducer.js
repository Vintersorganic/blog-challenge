import blogService from '../services/blogs'
import { setLoadingTrue, setLoadingFalse } from './loadingReducer'

const blogReducer = (state = [], action) => {
  switch(action.type) {
    case 'INIT_BLOGS':
      return action.data
    case 'NEW_BLOG':
      return [...state, action.data]    
    case 'GET_BLOG':
      return action.data 
    case 'EDIT_BLOG':
      return state.map(blog => blog.id !== action.data.id ? blog : action.data) 
    case 'DELETE_BLOG':
      return state.filter(blog => blog.id !== action.data)  
    default:
      return state;
  }
}

export const  initializeBlogs = () => {
  return async dispatch => {
    try {
      const blogs = await blogService.getAll()
      dispatch({
        type: 'INIT_BLOGS',
        data: blogs
    })
    } catch (e) {
      console.log(e)
    }
  }
}

export const deleteBlog = id => {
  return async dispatch => {
    try { 
      dispatch(setLoadingTrue())
      await blogService.destroyBlog(id)
      dispatch({
        type: 'DELETE_BLOG',
        data: id
      })
      dispatch(setLoadingFalse())
    } catch (e) {
      dispatch(setLoadingFalse())
      console.log(e)
    }
  }
}

export const blogDetails = id => {
  return async dispatch => {
    try {
      dispatch(setLoadingTrue())
      const blog = await blogService.getIndividualBlog(id)
      dispatch({
        type: 'GET_BLOG',
        data: blog
      })
      dispatch(setLoadingFalse())
    } catch (e) {
      dispatch(setLoadingFalse())     
    }
  }
}

export const newBlog = (content) => {
  return async dispatch => {
    try {
      dispatch(setLoadingTrue())
      const blog = await blogService.addBlog(content)
      dispatch({
        type: 'NEW_BLOG',
        data: blog
      })
      dispatch(setLoadingFalse())
    } catch (e) {
      dispatch(setLoadingFalse())
      console.log(e)
    }
  }
}

export const editBlog = (content, id) => {
  return async dispatch => {
    try {
      dispatch(setLoadingTrue())
      const editedBlog = await blogService.updateBlog(id, content)
      dispatch({
        type: 'EDIT_BLOG',
        data: editedBlog
      })
      dispatch(setLoadingFalse())
    } catch (e) {
      dispatch(setLoadingFalse())
      console.log(e)
    }
  }
}

export default blogReducer
