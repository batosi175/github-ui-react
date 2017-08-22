import React from 'react'
import ReactDOM from 'react-dom'
import './index.css'

import registerServiceWorker from './registerServiceWorker'
// application meant to be a simple orgs listing for and details view for github components

class OrgDetails extends React.Component{
  constructor(props) {
    super(props)
    this.state = {orgDetails: {}}
    this._fetchOrgDetails = this._fetchOrgDetails.bind(this)
  }

  componentWillMount(){

  }

  componentWillUpdate(){

  }

  _fetchOrgDetails(org){
    fetch(`https://api.github.com/orgs/${org}`).then(response => {
      this.setState({orgDetails: response})
    });
  }

  render() {
    const org = this.props.org
    return (
      <div className="org-details">
        {org}
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
  }

  render() {
    const orgs = this.props.orgs
    const details = this.state.currentOrg ? <OrgDetails org={this.state.currentOrg} /> : ''
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

ReactDOM.render(
  <OrgsAndDetails
    orgs={orgs}
  />,
  document.getElementById('container')
)

registerServiceWorker()
