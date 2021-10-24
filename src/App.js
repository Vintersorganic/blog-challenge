import React, { useEffect} from 'react'
// import blogService from './services/blogs';
import NavbarComponent from './components/Navbar/NavbarComponent';
import { Switch, Route} from 'react-router-dom'
import Login from './components/Login/Login'
import { useDispatch, useSelector} from 'react-redux'
import { initializeUser } from './reducers/loginReducer';
import { initializeBlogs } from './reducers/blogReducer'
import BlogList from './components/BlogList/BlogList';
import BlogDetail from './components/BlogDetail/BlogDetail';
import { Container } from 'react-bootstrap';
import LoadingSpinner from './components/LoadingSpinner/LoadingSpinner';
import BlogCreation from './components/BlogCreation/BlogCreation';

function App() {
  const dispatch = useDispatch()
  const user = useSelector(state => state.user)
  const blogs = useSelector(state => state.blogs)
  const loading = useSelector(state => state.loading)
  console.log(blogs)
  console.log(user)

  useEffect(() => {
    dispatch(initializeUser())
    dispatch(initializeBlogs())
  }, [dispatch])

  // const updateBlog = async (id, content) => {
  //   const response = await blogService.updateBlog(id, content)
  //   console.log(response)
  // }

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
          : <BlogDetail />
          }
        </Route>
        <Route path='/:id'>
          { loading ? <LoadingSpinner />
          : <BlogDetail />
          }
        </Route>
      </Switch>
    </Container>
  );
}

export default App;
