import React, { Component } from "react"
import ReactChartKick, { AreaChart } from "react-chartkick"
import Chart from "chart.js"

ReactChartKick.addAdapter(Chart)

class RateEchangeListItem extends Component {
  render() {
    const { flag, name, rates, currencyCode } = this.props.rateExchange
    return (
      <tr>
        <td>{name}<br /><img src={flag} height="60" width="100" alt='non trouvée' /></td>
        <td className="col-md-12">
          <AreaChart
            data={formatData(rates, currencyCode)}
            xtitle="Date"
            ytitle={currencyCode}
          />
        </td>
      </tr>
    )
  }
}

function formatData(rates, currencyCode) {
  return Object.keys(rates).map(date => {
    return [date, rates[date][currencyCode]]
  })
}

export default RateEchangeListItem