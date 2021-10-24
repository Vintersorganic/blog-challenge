import React from 'react'
import { Spinner } from 'react-bootstrap';
import './LoadingSpinner.css'

const LoadingSpinner = () => {
  return (
    <div className='spinnerContainer'>
      <Spinner animation="grow" variant="dark" />
    </div>
  )
}

export default LoadingSpinner
