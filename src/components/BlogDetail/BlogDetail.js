import React from 'react'
import { useSelector } from 'react-redux'
import { Card} from 'react-bootstrap'
import './BlogDetail.css'
import { Redirect } from 'react-router'

const BlogDetail = () => {
  const blog = useSelector(state => state.blogs)

  if (blog.length < 1) {  
    return <Redirect to='/home' />
  }

  return (
    <div className='blog-detail-container'>
      <Card className="text-center">
        <Card.Header as='h5'>Blog #{blog.id}</Card.Header>
        <Card.Body>
        <Card.Title>{blog.title}</Card.Title>
        <Card.Text>{blog.body}</Card.Text>
        </Card.Body>
        <Card.Footer className="text-muted">By User #{blog.userId}</Card.Footer>
      </Card>
    </div>
  )
}

export default BlogDetail
