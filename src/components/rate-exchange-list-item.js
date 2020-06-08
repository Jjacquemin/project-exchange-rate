import React, { Component } from "react"

class RateEchangeListItem extends Component {
  render() {
    const { flag, name } = this.props.rateExchange
    return (
      <tr>
        <td>{name}<br /><img src={flag} height="60" width="100" /></td>
        <td>Graphique</td>
      </tr>
    )
  }
}

export default RateEchangeListItem