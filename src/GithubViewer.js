import React, { Component } from 'react'
import './index.css'
import OrgSelector from './OrgSelector.js'
import RepoList from './RepoList.js'

class GithubViewer extends Component {
  constructor(props) {
    super(props)
    this.state = {currentOrg: '', orgDetails: ''}
    this.handleOrgClicked = this.handleOrgClicked.bind(this)
  }

  handleOrgClicked(id){
    this._fetchOrgDetails(id)
    // this.setState({currentOrg: id})
    // this.setState({orgDetails: data})
    this.setState({currentOrg: id})
  }
  _fetchOrgDetails(org){
    fetch(`https://api.github.com/orgs/${org}`).then(response => {
      return response.json();
    })
    .then(resolved => {
      this.setState({orgDetails: resolved})
    })
  }

  render() {
    const orgs = this.props.orgs
    const details = this.state.orgDetails ? <RepoList org={this.state.orgDetails}/> : ''
    return (
      <div>
        <OrgSelector orgs={orgs} onOrgClicked={this.handleOrgClicked} />
        {details}
      </div>
    )
  }

}

export default GithubViewer
