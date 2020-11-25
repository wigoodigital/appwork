import React, { Component } from 'react'
import LayoutNavbar from '../layouts/LayoutNavbar'
import LayoutFooter from '../layouts/LayoutFooter'
import layoutHelpers from '../layouts/helpers'

class LayoutWithoutSidenav extends Component {
  closeSidenav(e) {
    e.preventDefault()
    layoutHelpers.setCollapsed(true)
  }

  componentDidMount() {
    // Enshure that we have not '.layout-expanded' class on the html element
    layoutHelpers._removeClass('layout-expanded')

    layoutHelpers.init()
    layoutHelpers.update()
    layoutHelpers.setAutoUpdate(true)
  }

  componentWillUnmount() {
    layoutHelpers.destroy()
  }
 
  render() {
    return (
      <div className="layout-wrapper layout-1 layout-without-sidenav">
        <div className="layout-inner">
          

          <div className="layout-container">
            <div className="layout-content">
              <div className="container-fluid flex-grow-1 container-p-y">
                
              </div>

              <LayoutFooter {...this.props} />
            </div>
          </div>
        </div>
      </div>
    )
  }
}

export default LayoutWithoutSidenav
