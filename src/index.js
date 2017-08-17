import React from 'react'
import ReactDOM from 'react-dom'
import './index.css'

import registerServiceWorker from './registerServiceWorker'

function Blog(props) {
  const sidebar = (
    <ul>
      {
        props.posts.map(post => 
          <li key={post.id}>
            {post.title}
          </li>
        )
      }
    </ul>
  )

  const content = props.posts.map(post => 
    <div key={post.id}>
      <h3>{post.title}</h3>
      <p>{post.content}</p>
    </div>
  )

  return (
    <div>
      {sidebar}
      <hr />
      {content}
    </div>
  )
}

const posts = [
  { id: 1, title: 'hello World', content: 'welcome to learning react' }, 
  { id: 2, title: 'hacker news', content: 'get all your leet hacker stuffs'}
]

ReactDOM.render(
  <Blog posts={posts}/>,
  document.getElementById('root')
)

registerServiceWorker()
