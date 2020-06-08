import React, { Component } from 'react'
import SearchBar from '../containers/search-bar'
import RateExchangeList from '../containers/rate-exchange-list'

export class App extends Component {
  render() {
    return (
      <div>
        <SearchBar/>
        <RateExchangeList/>
      </div>
    )
  }
}

export default App
