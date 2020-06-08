import React, { Component } from 'react'
import {connect} from 'react-redux'
import {fetchCountries} from '../actions/index'

class SearchBar extends Component {
  UNSAFE_componentWillMount() {
    this.props.fetchCountries()
  }
  renderSelectCountries() {
    return (
      <select onChange={e => this.onChangeCountry(e)} className="form-control search_bar">
        {this.props.countries.map( c => (
          <option key={c.code} value={c.code}>
            {c.name}
          </option>
        ))}
      </select>
    )
  }
  onChangeCountry = e => {
    console.log('on change', e.target.value)
  }
  render() {
    return (
      <form className="form-group">
        {this.renderSelectCountries()}        
      </form>
    )
  }
}

const mapStateToProps = store => {
  return {
    countries: store.countriesReducer.countries
  }
}

const mapDispatchToProps = {
  fetchCountries
}

export default connect(mapStateToProps, mapDispatchToProps)(SearchBar)
