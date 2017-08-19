import React from 'react'
import ReactDOM from 'react-dom'
import './index.css'

import registerServiceWorker from './registerServiceWorker'

function FancyBorder(props) {
  const color = props.color
  return (
    <div className={'FancyBorder FancyBorder-' + props.color } style={{border: `solid 5px ${color}`}} >
      {props.children}
    </div>  
  )
}

function Dialog(props){
  return (
    <FancyBorder color='red' >
      <h1 className='Dialog-title'>{props.title}</h1>
      <p className='Dialog-message'>
        {props.message}
      </p>
      {props.children}
    </FancyBorder>
  )
}

function WelcomeDialog(){
  return (
    <Dialog 
      title="welcome to react" 
      message="Thank you for visting our spacecraft!!"
    />
  )
}

class SignUpDialog extends React.Component {
  constructor(props) {
    super(props)
    this.state = {login: ''}
    this.handleChange = this.handleChange.bind(this)
    this.handleSignUp = this.handleSignUp.bind(this)
  }

  handleChange(e) {
    this.setState({login: e.target.value})
  }

  handleSignUp() {
    alert(`Welcome Aboard ${this.state.login}!!`)
  }

  render() {
    return (
      <Dialog title="Mars Exploration Program"
              message="How should we refer to you?">
        <input value={this.state.login}
               onChange={this.handleChange} />
        <button onClick={this.handleSignUp}>
          Sign Me Up!
        </button>
      </Dialog>
    );
  }
}

ReactDOM.render(
  <SignUpDialog />,
  document.getElementById('root')

)

registerServiceWorker()
