import React from 'react'
import { Container, ListGroup, Button, Spinner  } from 'react-bootstrap'
import { useSelector, useDispatch } from 'react-redux'
import './BlogList.css'
import { deleteBlog, blogDetails, initializeBlogs } from '../../reducers/blogReducer'
import { LinkContainer } from 'react-router-bootstrap'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faTrashAlt } from '@fortawesome/free-solid-svg-icons'

const BlogList = () => {
  const dispatch = useDispatch()
  const blogs = useSelector(state => state.blogs)
  const loading = useSelector(state => state.loading)

  const deleteBlogHandler = id => {
    dispatch(deleteBlog(id))
  }

  const blogDetailHandler = id => {
    dispatch(blogDetails(id))
  }
  if (!Array.isArray(blogs)) {
    dispatch(initializeBlogs())
    return null
  }
  
  return (
    <Container className='bloglist-container' >
        <h1 className="title">Blogs</h1>
      <ListGroup variant="flush">
        {
          blogs.map(blog => 
            <ListGroup.Item className='listitem-container' key={blog.id}>
              {blog.title}
              <div>
                <LinkContainer to={`/${blog.id}`}>
                  <Button variant="outline-dark" onClick={() => blogDetailHandler(blog.id)}>Detalle</Button>
                </LinkContainer>
                <LinkContainer to={`/${blog.id}/edit`}>
                  <Button variant="outline-dark">Editar</Button>
                </LinkContainer>
                <Button variant="outline-dark" disabled={loading} onClick={() => deleteBlogHandler(blog.id)}>
                  {loading ? 
                    <Spinner
                      as="span"
                      animation="border"
                      size="sm"
                      role="status"
                      aria-hidden="true"
                      className='button-spinner'
                    />
                    : <FontAwesomeIcon icon={ faTrashAlt } />
                  }
                   Eliminar
                </Button>
              </div>
            </ListGroup.Item>
          )
        }
      </ListGroup>
    </Container>
  )
}

export default BlogList