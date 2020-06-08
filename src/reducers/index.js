import { combineReducers } from 'redux'
import ReducerCountries from './reducer-countries'
import ReducerRateExchange from './reducer-rate-exchange'

const rootReducer = combineReducers({
  countriesReducer: ReducerCountries,
  rateExchangeReducer: ReducerRateExchange
})

export default rootReducer
