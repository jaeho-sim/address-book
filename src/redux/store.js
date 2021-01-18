import { configureStore } from '@reduxjs/toolkit'
import thunk from 'redux-thunk';
import appReducers from './reducers'

export default configureStore({
  reducer: appReducers,
  middleware: [thunk]
});