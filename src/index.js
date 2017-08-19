import React from 'react'
import ReactDOM from 'react-dom'
import './index.css'

import registerServiceWorker from './registerServiceWorker'

function toCelsius(fahrenheit) {
  return (fahrenheit - 32) * 5 / 9;
}

function toFahrenheit(celsius) {
  return (celsius * 9 / 5) + 32;
}

function tryConvert(temperature, convert) {
  const input = parseFloat(temperature);
  if (Number.isNaN(input)) {
    return '';
  }
  const output = convert(input);
  const rounded = Math.round(output * 1000) / 1000;
  return rounded.toString();
}

function BoilingVerdict(props){
  if (props.celcius >= 100) {
    return <p>The water should boil.</p>
  }
  return <p>The water should not boil.</p>
}

const scaleNames = {
  c: 'Celcius',
  f: 'Fahrenheit'
}

class TemperatureInput extends React.Component{
  constructor(props) {
    super(props)
    // this.state = {temperature: ''}

    this.handleChange = this.handleChange.bind(this)
  }

  handleChange(event) {
    // this.setState({temperature: event.target.value})
    this.props.onTemperatureChange(event.target.value)
  }

  render() {
    const temperature = this.props.temperature
    const scale = this.props.scale
    return (
      <fieldset>
        <legend>Enter Temperature in {scaleNames[scale]}:</legend>
        <input value={temperature} onChange={this.handleChange} type='number'/>
      </fieldset>
    )
  }
}

class Calculator extends React.Component {
  constructor(props) {
    super(props)
    this.handleCelciusChange = this.handleCelciusChange.bind(this)
    this.handleFahrenheitChange = this.handleFahrenheitChange.bind(this)
    this.state = {temperature: '', scale: 'c'}
  }

  handleCelciusChange(temperature) {
    this.setState({scale: 'c', temperature})
  }

  handleFahrenheitChange(temperature) {
    this.setState({scale: 'f', temperature})
  }

  render() {
    const scale = this.state.scale
    const temperature = this.state.temperature
    const celcius = scale === 'f' ? tryConvert(temperature, toCelsius) : temperature
    const fahrenheit = scale === 'c' ? tryConvert( temperature, toFahrenheit ) : temperature
    return (
      <div>
        <TemperatureInput
        temperature={celcius}
        onTemperatureChange={this.handleCelciusChange}
        scale="c" />
        <TemperatureInput
        temperature={fahrenheit}
        onTemperatureChange={this.handleFahrenheitChange}
        scale="f" />
        <BoilingVerdict celcius={parseFloat(temperature)} />
      </div>
    );
  }
}


ReactDOM.render(
  <Calculator />,
  document.getElementById('root')
)


registerServiceWorker()
