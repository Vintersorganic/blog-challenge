import React, { useEffect } from 'react'
// import blogService from './services/blogs';
import NavbarComponent from './components/Navbar/NavbarComponent'
import { Switch, Route, useRouteMatch } from 'react-router-dom'
import Login from './components/Login/Login'
import { useDispatch, useSelector } from 'react-redux'
import { initializeUser } from './reducers/loginReducer'
import { initializeBlogs } from './reducers/blogReducer'
import BlogList from './components/BlogList/BlogList'
import BlogDetail from './components/BlogDetail/BlogDetail'
import { Container } from 'react-bootstrap'
import LoadingSpinner from './components/LoadingSpinner/LoadingSpinner'
import BlogCreation from './components/BlogCreation/BlogCreation'
import BlogEdit from './components/BlogEdit/BlogEdit'

function App() {
  const dispatch = useDispatch()
  const user = useSelector(state => state.user)
  const blogs = useSelector(state => state.blogs)
  const loading = useSelector(state => state.loading)
  const notification = useSelector(state => state.notification)

  useEffect(() => {
    dispatch(initializeUser())
    dispatch(initializeBlogs())
  }, [dispatch])

  const match = useRouteMatch('/:id/edit')

  const blog = match
    ? blogs.find(blog => blog.id === Number(match.params.id))
    : null


  if (user === null) {
    return (
      <Switch className='container'>
        <Route path='/'>
          { loading ?
            <LoadingSpinner />
            : <Login />
          }
        </Route>
      </Switch>
    )
  }



  return (
    <Container>
      <NavbarComponent />

      <Switch>
        <Route path='/home'>
          <BlogList />
        </Route>
        <Route path='/newblog'>
          <BlogCreation />
        </Route>
        <Route path='/:id/edit'>
          { loading ? <LoadingSpinner />
            : <BlogEdit blog={blog}/>
          }
        </Route>
        <Route path='/:id'>
          { loading ? <LoadingSpinner />
            : <BlogDetail blog={blog}/>}
          {notification && console.log(notification)}
        </Route>
      </Switch>
    </Container>
  )
}

export default App
