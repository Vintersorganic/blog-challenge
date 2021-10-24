const notificationReducer = (state = null, action) => {
  switch(action.type) {
  case 'MESSAGE':
    return action.data
  default:
    return state
  }
}

export const setNotification = (message, time) => {
  return async dispatch => {
    dispatch({
      type: 'MESSAGE',
      data: message
    })

    setTimeout(() => {
      dispatch({
        type: 'MESSAGE',
        data: null
      })
    }, time * 1000)
  }
}

export default notificationReducer