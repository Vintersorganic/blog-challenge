import React from 'react'
import { Container, ListGroup, Button, Spinner  } from 'react-bootstrap'
import { useSelector, useDispatch } from 'react-redux'
import './BlogList.css'
import { deleteBlog, blogDetails } from '../../reducers/blogReducer'
import { LinkContainer } from 'react-router-bootstrap'

const BlogList = () => {
  const dispatch = useDispatch()
  const blogs = useSelector(state => state.blogs)
  const loading = useSelector(state => state.loading)

  const deleteBlogHandler = id => {
    dispatch(deleteBlog(id))
  }

  const handleBlogDetail = id => {
    dispatch(blogDetails(id))
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
                <LinkContainer to={`blogs/${blog.id}`}>
                  <Button variant="outline-dark" onClick={() => handleBlogDetail(blog.id)}>Detalle</Button>
                </LinkContainer>
                <Button variant="outline-dark">Editar</Button>
                <Button variant="outline-dark" disabled={loading} onClick={() => deleteBlogHandler(blog.id)}>
                  {loading && <Spinner
                    as="span"
                    animation="border"
                    size="sm"
                    role="status"
                    aria-hidden="true"
                    className='button-spinner'
                  />}
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