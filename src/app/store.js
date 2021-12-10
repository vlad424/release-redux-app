import { createStore } from 'redux'
import reducer from './reducer'
import { initialState } from './reducer'

const store = createStore(reducer, initialState)

export default store