import React from 'react'
import ReactDOM from 'react-dom'
import './index.css'

import registerServiceWorker from './registerServiceWorker'

class Reservations extends React.Component {
  constructor(props) {
    super(props)

    this.state = {
      isGoing: true,
      numberOfGuests: 2
    }

    this.handleInputChange = this.handleInputChange.bind(this)
   }

  handleInputChange(event) {
    const target = event.target
    const value = target.type === 'checkbox' ? target.checked : target.value
    const name = target.name
    this.setState({[name]: value})
  }

  render() {
    return (
      <form >
        <label>
          Is Going: 
          <input 
            type="checkbox"
            name="isGoing"
            checked={this.state.isGoing}
            onChange={this.handleInputChange}
          />
        </label>
        <br />
        <label>
          <input 
            type="number"
            name="numberOfGuests"
            value={this.state.numberOfGuests}
            onChange={this.handleInputChange}
          />
        </label>
      </form>
    )
  }
}

ReactDOM.render(
  <Reservations />,
  document.getElementById('root')
)

registerServiceWorker()
