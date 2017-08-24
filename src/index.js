import React from 'react'
import ReactDOM from 'react-dom'
import './index.css'
import GithubViewer from './GithubViewer.js'

import registerServiceWorker from './registerServiceWorker'
// application meant to be a simple orgs listing for and details view for github components



class OrgDetails extends React.Component{
  constructor(props){
    super(props)
    this.state = {repos: []}
    // this._fetchRepos() = this._fetchRepos.bind(this)
  }

  componentDidMount(){
    console.log('mounted')
  }
  componentWillReceiveProps(nextProps){
    var something = this.props === nextProps;
    console.log(this.props)
    console.log(nextProps)
    console.log('getting teh fucking props', this.props, nextProps )
    console.log(something);
  }
  
  // _fetchRepos(repoUrl){
  //   fetch(repo).then(response => {
  //     return response.json();
  //   })
  //   .then(resolved => {
  //     this.setState({repos: resolved})
  //   })
  // }

  render() {
    const org = this.props.org
    return (
      <div className="org-details">
        <h3>{org.login}</h3>
        {/* <RepoList  /> */}
      </div>
    )
  }
}

class OrgList extends React.Component{
  constructor(props) {
    super(props)
    this.orgClicked = this.orgClicked.bind(this)
  }

  orgClicked(e) {
    const {id} = e.target;
    this.props.onOrgClicked(id)
  }

  render() {
    var orgs = this.props.orgs.map(org => {
      return (
      <div key={org.id} id={org.id} onClick={this.orgClicked} className={'flex-item'} >
        {org.id}
      </div>
      )
    })
    return (
      <div className={'flex-container'}> 
        {orgs}
      </div>
    )
  }
}

class OrgsAndDetails extends React.Component {
  constructor(props) {
    super(props)
    this.state = {currentOrg: '', orgDetails: {}}
    this.handleOrgClicked = this.handleOrgClicked.bind(this)
  }
  

  handleOrgClicked(id){
    this.setState({currentOrg: id})
    this._fetchOrgDetails(id)
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
    const details = this.state.currentOrg ? <OrgDetails org={this.state.orgDetails}/> : ''
    return (
      <div>
        <OrgList orgs={orgs} onOrgClicked={this.handleOrgClicked} />
        {details}
      </div>
    )
  }
}

const orgs = [
  {id: 'blizzard'},
  {id: 'facebook'},
  {id: 'netflix'},
  {id: 'yahoo'},
  {id: 'emberjs'}
]

// ReactDOM.render(
//   <OrgsAndDetails
//     orgs={orgs}
//   />,
//   document.getElementById('container')
// )

ReactDOM.render(
  <GithubViewer orgs={orgs} />,
  document.getElementById('container')
)

registerServiceWorker()
