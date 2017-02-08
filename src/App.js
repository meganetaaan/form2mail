import React, { Component } from 'react'
import './App.css'
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider'
import AppBar from 'material-ui/AppBar'
import IconButton from 'material-ui/IconButton';
import NavigationClose from 'material-ui/svg-icons/navigation/close';
import Drawer from 'material-ui/Drawer'
import MenuItem from 'material-ui/MenuItem'
import injectTapEventPlugin from 'react-tap-event-plugin'
injectTapEventPlugin()

class App extends Component {
  constructor() {
    super()
    this.state = {
      drawerOpen: false,
      addr: {
        to: [
          'example0@example.com'
        ],
        cc: [
          'example1@example.com',
          'example2@example.com',
          'example3@example.com'
        ],
        bcc: [
          'example4@example.com',
          'example5@example.com',
          'example6@example.com'
        ]
      },
      subject: 'subject',
      body: 'body'
    }
  }
  handleClick = () => this.setState({drawerOpen: !this.state.drawerOpen})
  render() {
    var menuItems = [<MenuItem primaryText={'hoge'} />]
    
    return (
      <MuiThemeProvider>
      <div className="App">
      <Drawer open={this.state.drawerOpen} docked={true}>
      <AppBar
      onLeftIconButtonTouchTap={this.handleClick}
      iconElementLeft={<IconButton><NavigationClose/></IconButton>}/>
      {menuItems}
      </Drawer>
      <header>
      <AppBar title='form2mail' onTitleTouchTap={this.handleClick} onLeftIconButtonTouchTap={this.handleClick} />
      </header>
      <p className="App-intro">
      <a target={'_blank'} href={
        `mailto:${this.state.addr.to.join(',')}
        ?cc=${this.state.addr.cc.join(',')}
        &bcc=${this.state.addr.cc.join(',')}
        &subject=${this.state.subject}
        &body=${this.state.body}`} >mailto</a>
      </p>
      </div>
      </MuiThemeProvider>
    )
  }
}

export default App
