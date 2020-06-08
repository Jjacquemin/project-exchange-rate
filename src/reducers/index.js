import { combineReducers } from 'redux'
import ReducerCountries from './reducer-countries'

const rootReducer = combineReducers({
  countriesReducer: ReducerCountries
})

export default rootReducer
