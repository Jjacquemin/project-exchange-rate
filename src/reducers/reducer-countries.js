import {GET_COUNTRIES} from '../actions/index'
import { supportedCurrencyCode } from '../supportedCurrencies'

const initialState = {
  countries: []
}

export default function(state = initialState, action) {
  switch(action.type) {
    case GET_COUNTRIES : return { ...state, countries: getCountriesInfo(action.payload) }
    default : return state
  }
}

function getCountriesInfo (data) {
  return data.map(c => {
    return {
      name: c.name,
      currencyCode: c.currencies[0].code,
      flag: c.flag,
      code: c.alpha3Code
    }
  }).filter(c => {
    return supportedCurrencyCode.indexOf(c.currencyCode) > -1
  })
}