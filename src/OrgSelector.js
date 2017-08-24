import React, { Component } from 'react'
import './index.css'

class OrgSelector extends Component {
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

export default OrgSelector