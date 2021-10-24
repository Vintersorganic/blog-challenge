
const loadingReducer = (state = false, action) => {
  switch (action.type) {
  case 'SET_LOADING_TRUE':
    return true
  case 'SET_LOADING_FALSE':
    return false
  default:
    return state
  }
}

export const setLoadingTrue = () => {
  return {
    type: 'SET_LOADING_TRUE'
  }
}

export const setLoadingFalse = () => {
  return {
    type: 'SET_LOADING_FALSE'
  }
}

export default loadingReducer
