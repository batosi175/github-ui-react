import React from 'react'
import ReactDOM from 'react-dom'
import './index.css'

import registerServiceWorker from './registerServiceWorker'
// application meant to be a simple orgs listing for and details view for github components

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
    this.state = {currentOrg: ''}
    this.handleOrgClicked = this.handleOrgClicked.bind(this)
  }

  handleOrgClicked(id){
    this.setState({currentOrg: id})
  }

  render() {
    var orgs = this.props.orgs
    return (
      <div>
        <OrgList orgs={orgs} onOrgClicked={this.handleOrgClicked} />
        <div className={'org-details'}>{this.state.currentOrg}</div>
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
