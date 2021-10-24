import React from 'react'
import { useSelector } from 'react-redux'
import { Card} from 'react-bootstrap'
import './BlogDetail.css'
import { Redirect } from 'react-router'
import { setNotification } from '../../reducers/notificationReducer'
import { useDispatch } from 'react-redux'

const BlogDetail = () => {
  const dispatch = useDispatch()
  const blogs = useSelector(state => state.blogs)

  if (blogs.length < 1) {
    dispatch(setNotification('No se encontró el blog solicitado.', 4))
    
    return <Redirect to='/home' />
  }

  return (
    <div className='blog-detail-container'>
      <Card className="text-center">
        <Card.Header as='h5'>Blog #{blogs.id}</Card.Header>
        <Card.Body>
        <Card.Title>{blogs.title}</Card.Title>
        <Card.Text>{blogs.body}</Card.Text>
        </Card.Body>
        <Card.Footer className="text-muted">By User #{blogs.userId}</Card.Footer>
      </Card>
    </div>
  )
}

export default BlogDetail
