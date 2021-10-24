import { createStore, applyMiddleware, combineReducers} from 'redux'
import thunk from 'redux-thunk'
import loginReducer from './reducers/loginReducer'
import blogReducer from './reducers/blogReducer'
import loadingReducer from './reducers/loadingReducer'

const reducer = combineReducers({
  user: loginReducer,
  blogs: blogReducer,
  loading: loadingReducer
})

const store = createStore(
  reducer,
  applyMiddleware(thunk)
)

export default store