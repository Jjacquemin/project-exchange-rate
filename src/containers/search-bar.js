import React, { Component } from 'react'
import {connect} from 'react-redux'
import {fetchCountries} from '../actions/index'

class SearchBar extends Component {
  UNSAFE_componentWillMount() {
    this.props.fetchCountries()
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

const mapDispatchToProps = {
  fetchCountries
}

export default connect(null, mapDispatchToProps)(SearchBar)
