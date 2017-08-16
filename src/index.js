import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';

import registerServiceWorker from './registerServiceWorker';

// class Clock extends React.Component {
//   constructor(props) {
//     super(props)
//     this.state = {
//       date: new Date(),
//       counter: 0
//     }
//   }

//   componentDidMount() {
//     this.timerId =  setInterval(() => this.tick(), 1000)
//   }

//   componentWillUnmount() {
//     clearInterval(this.timerId)
//   }

//   tick() {
//     this.setState({date: new Date()})
//     this.setState( prevState => ({ counter: prevState.counter + 1 }))
//   }

//   render() {
//     return (
//       <div>
//         <h1>Hello, world!</h1>
//         <FormattedDate date={this.state.date} />
//         <h3> counter: {this.state.counter} seconds </h3>
//       </div>
//     );
//   }
// }

// function FormattedDate(props) {
//   return <h2>It is {props.date.toLocaleTimeString()}.</h2>;
// }

// function App(props) {
//   return (
//     <div>
//       <Clock />
//       <Clock />
//       <Clock />
//     </div>
//   )
// }
// ReactDOM.render(
//   <App />,
//   document.getElementById('root')
// );

class Toggle extends React.Component{
  constructor(props) {
    super(props)
    this.state = {
      isToggled: false
    }

    // make it so 'this' works in the callback

    // this.handleClick = this.handleClick.bind(this)
  }

  handleClick = () =>  {
    this.setState( prevState => (
      {isToggled: !prevState.isToggled}
    ))
  }

  render() {
    return (
      <button onClick={this.handleClick} >
        {this.state.isToggled ? 'On' : 'Off'}
      </button>
    )
  }


}

ReactDOM.render(
  <Toggle />, 
  document.getElementById('root')
)


registerServiceWorker()
