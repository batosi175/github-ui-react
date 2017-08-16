import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
// import App from './App';
import registerServiceWorker from './registerServiceWorker';

// ReactDOM.render(<App />, document.getElementById('root'));

// function formatUser(user) {
//   return user.firstName + ' ' + user.lastName;
// }

// const user = {
//   firstName: 'Carlos',
//   lastName: 'Salazar'
// }

// const element = (
//   <h1 className='some-words'>
//     Hello My Name Is, {formatUser(user)}!
//   </h1>
// )

// ReactDOM.render(
//   element,
//   document.getElementById('root')
// );

// function tick() {
//   const element = (
//     <div>
//       <h1>Hello, world!</h1>
//       <h2>It is {new Date().toLocaleTimeString()}.</h2>
//     </div>
//   );
//   ReactDOM.render(
//     element,
//     document.getElementById('root')
//   );
// }

// setInterval(tick, 1000);

// function Welcome(props) {
//   return <h1>Welcome, {props.name} </h1>;
// }

// function App() {
//   return (
//     <div>
//       <Welcome name="Sarah"/>
//       <Welcome name="Mike"/>
//       <Welcome name="Jonathan"/>
//     </div>
//   )
// }

// function formatDate(date) {
//   return date.toLocaleDateString();
// }

// function Avatar(props) {
//   return (
//     <img className="Avatar"
//       src={props.user.avatarUrl}
//       alt={props.user.name}
//     />
//   );
// }

// function UserInfo(props) {
//   return (
//     <div className="UserInfo">
//       <Avatar user={props.user} />
//       <div className="UserInfo-name">
//         {props.user.name}
//       </div>
//     </div>
//   )
// }

// function Comment(props) {
//   return (
//     <div className="Comment">
//       <UserInfo user={props.author} />
//       <div className="Comment-text">
//         {props.text}
//       </div>
//       <div className="Comment-date">
//         {formatDate(props.date)}
//       </div>
//     </div>
//   );
// }

// const comment = {
//   date: new Date(),
//   text: 'I hope you enjoy learning React!',
//   author: {
//     name: 'Hello Kitty',
//     avatarUrl: 'http://placekitten.com/g/64/64'
//   }
// };

// ReactDOM.render(
//   <Comment author={comment.author} date={comment.date} text={comment.text} />,
//   document.getElementById('root')
// );

class Clock extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      date: new Date(),
      counter: 0
    }
  }

  componentDidMount() {
    this.timerId =  setInterval(() => this.tick(), 1000)
  }

  componentWillUnmount() {
    clearInterval(this.timerId)
  }

  tick() {
    this.setState({date: new Date()})
    this.setState( prevState => ({ counter: prevState.counter + 1 }))
  }

  render() {
    return (
      <div>
        <h1>Hello, world!</h1>
        <FormattedDate date={this.state.date} />
        <h3> counter: {this.state.counter} seconds </h3>
      </div>
    );
  }
}

function FormattedDate(props) {
  return <h2>It is {props.date.toLocaleTimeString()}.</h2>;
}

function App(props) {
  return (
    <div>
      <Clock />
      <Clock />
      <Clock />
    </div>
  )
}

function tick() {
  ReactDOM.render(
    <App />,
    document.getElementById('root')
  );
}

setInterval(tick, 1000)



registerServiceWorker()
