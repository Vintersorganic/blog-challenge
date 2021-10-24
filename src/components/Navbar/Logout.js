import React from 'react'
import { Button } from 'react-bootstrap'
import { logout } from '../../reducers/loginReducer'
import { useDispatch } from 'react-redux'


const LogoutButton = () => {
  const dispatch = useDispatch()

  const handleLogout = () => {
    dispatch(logout())
  }
  return (

    <Button variant="outline-light" onClick={handleLogout}>
             Desconectarse
    </Button>

  )
}

export default LogoutButton
