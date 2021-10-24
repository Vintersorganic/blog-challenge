import React from 'react'
import { useSelector } from 'react-redux'
import { Card } from 'react-bootstrap'
import './BlogDetail.css'
import { Redirect } from 'react-router'

const BlogDetail = () => {
  const blogs = useSelector(state => state.blogs)

  if (blogs.length < 1) {
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
