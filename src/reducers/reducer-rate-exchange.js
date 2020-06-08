import { GET_RATE_EXCHANGE } from "../actions"

const initialState = {
  rateExchangeList: []
}

export default function(oldRateExchangeReducer = initialState, action) {
  switch (action.type) {
    case GET_RATE_EXCHANGE :
      return {
        ...oldRateExchangeReducer,
        rateExchangeList: [
          action.payload,
          ...oldRateExchangeReducer.rateExchangeList
        ]
      }
    default:
      return oldRateExchangeReducer
  }
}
