import React, { Component } from "react"

class RateEchangeListItem extends Component {
  render() {
    console.log(this.props.rateExchange)
    return (
      <tr>
        <td>
          {this.props.rateExchange.name}
        </td>
      </tr>
    )
  }
}

export default RateEchangeListItem