import React from 'react'
import ReactDOM from 'react-dom'
import './index.css'

import registerServiceWorker from './registerServiceWorker'

class Nameform extends React.Component {
  constructor(props) {
    super(props)

    this.state = {value: 'coconut'}

    this.handleChange = this.handleChange.bind(this)
    this.handleSubmit = this.handleSubmit.bind(this)
  }

  handleChange(event) {
    this.setState({value: event.target.value})
  }

  handleSubmit(event) {
    alert(`your favorite flavor is: ${this.state.value}`)
    event.preventDefault()
  }

  render() {
    return (
      <form onSubmit={this.handleSubmit}>
        <label>
          Pick your favorite La Croix flavor:
          <select value={this.state.value} onchange={this.handleChange} >
            <option value="grapefruit">grapefruit</option>
            <option value="coconut">coconut</option>
            <option value="pineapple">pineapple</option>
            <option value="guanavana">guanavana</option>
          </select>
        </label>
        <input type="submit" value="Submit" />
      </form>
    )
  }
}

ReactDOM.render(
  <Nameform />,
  document.getElementById('root')
)

registerServiceWorker()
