import React, { Component } from 'react'

export class SearchBar extends Component {
  UNSAFE_componentWillMount() {
    
  }
  renderSelectCountries() {
    return (
      <select>
        <option></option>
      </select>
    )
  }
  render() {
    return (
      <form>
        {this.renderSelectCountries()}        
      </form>
    )
  }
}

export default SearchBar
