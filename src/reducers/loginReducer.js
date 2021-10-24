import loginService from '../services/login'
import { setLoadingFalse, setLoadingTrue } from './loadingReducer'
import { setNotification } from './notificationReducer'

const loginReducer = (state = null, action) => {
  switch (action.type) {
  case 'SET_USER':
    return action.data
  case 'INIT_USER':
    return action.data
  case 'LOGOUT_USER':
    return action.data
  default:
    return state
  }
}

export const login = (credentials) => {
  return async dispatch => {
    try {
      dispatch(setLoadingTrue())
      const user = await loginService.login(credentials)
      window.localStorage.setItem(
        'loggedBlogAppUser', JSON.stringify(user.token)
      )
      dispatch({
        type: 'SET_USER',
        data: user
      })
      dispatch(setLoadingFalse())
    } catch (e) {
      dispatch(setNotification('Usuario y/o contraseñas incorrectos.', 4))
      dispatch(setLoadingFalse())
    }
  }
}

export const logout = () => {
  return async dispatch => {
    window.localStorage.removeItem('loggedBlogAppUser')
    dispatch({
      type: 'LOGOUT_USER',
      data: null
    })
  }
}

export const initializeUser = () => {
  return async dispatch => {
    try {
      const loggedUserJSON = window.localStorage.getItem('loggedBlogAppUser')
    if (loggedUserJSON) {
      const user = JSON.parse(loggedUserJSON)
      dispatch({
        type: 'INIT_USER',
        data: user
      })
    }
    
    } catch (e) {
      console.log(e)
    }
  }
}

export default loginReducer