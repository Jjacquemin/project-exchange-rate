import {GET_COUNTRIES} from '../actions/index'

const initialState = {
  countries: []
}

export default function(state = initialState, action) {
  switch(action.type) {
    case GET_COUNTRIES : return { ...state, countries: action.payload }
    default : return state
  }
}
