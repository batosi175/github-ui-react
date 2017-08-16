import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';

import registerServiceWorker from './registerServiceWorker';
// embedded javascript example

function Mailbox(props) {
  const unreadMessages = props.unreadMessages
  return (
    <div>
      <h1>Hello!</h1>
      {
        unreadMessages.length > 0 ?
        ( 
          <h2>
            you have {unreadMessages.length} unread messages
          </h2>
        )
        : (
          <h2>
            you have no unread messages
          </h2>
        )
      }
    </div>
  )
}

const messages = [ 'React', 're: React', 'some words']
const nothing = []
ReactDOM.render(
  <Mailbox unreadMessages={messages}/>,
  document.getElementById('root')
)

registerServiceWorker()
