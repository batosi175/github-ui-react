import React, { Component } from 'react'
import './index.css'

class RepoList extends React.Component{
  constructor(props){
    super(props)
    this.state = ({repos: [] })
    this._fetchRepos = this._fetchRepos.bind(this)
  }
  componentDidMount(){
    // console.log(this.props.org)
    // console.log(this.props.org.repos_url)
    this._fetchRepos(this.props.org.repos_url);
  }

  _fetchRepos(orgUrl){
    fetch(`${orgUrl}`).then(response => {
      return response.json()
    })
    .then(resolved => {
      this.setState({repos: resolved})
    })
  }

  render(){
    const org = this.props.org
    const repos = this.state.repos;
    const repoList = repos.length !== 0 ? repos.map(repo => {
      return (
        <li key={repo.id}>
          {repo.name}
          <span className='grey-text small'>( Forks:{repo.forks} Watchers:{repo.watchers} )</span>
        </li>
      )
    }) : '';
    return (
      <div style={{width: '50%'}}>
        {org.login}
        <ul className='repo-list'>
          {repoList}
        </ul>
      </div>
    )
  }
}

export default RepoList