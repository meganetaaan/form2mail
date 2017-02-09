import React, { Component } from 'react'
import './App.css'
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider'
import AppBar from 'material-ui/AppBar'
import IconButton from 'material-ui/IconButton'
import NavigationClose from 'material-ui/svg-icons/navigation/close'
import Drawer from 'material-ui/Drawer'
import MenuItem from 'material-ui/MenuItem'
import TextField from 'material-ui/TextField'
import Paper from 'material-ui/Paper'
import FontIcon from 'material-ui/FontIcon'
import RaisedButton from 'material-ui/RaisedButton'

import injectTapEventPlugin from 'react-tap-event-plugin'
injectTapEventPlugin()

class Form extends Component {
  toMailLink(args){
    let to = ''
    let cc = ''
    let bcc = ''
    if (args.addr != null) {
      to = args.addr.to && args.addr.to.length > 0 ? args.addr.to.join(',') : ''
      cc = args.addr.cc && args.addr.cc.length > 0 ? args.addr.cc.join(',') : ''
      bcc = args.addr.bcc && args.addr.bcc.length > 0 ? args.addr.bcc.join(',') : ''
    }
    return `mailto:${to}
        ?cc=${cc}
        &bcc=${bcc}
        &subject=${args.subject}
        &body=${args.body}`
  }

  render() {
    const mailLink = this.toMailLink(this.props)
    return (
      <div>
      <TextField
      floatingLabelText='TO'
      fullWidth={true}
      /><br />
      <TextField
      floatingLabelText='CC'
      fullWidth={true}
      /><br />
      <TextField
      floatingLabelText='BCC'
      fullWidth={true}
      /><br />
      <TextField
      floatingLabelText='Subject'
      fullWidth={true}
      /><br />
      <TextField
      floatingLabelText='Body'
      fullWidth={true}
      /><br />
      <RaisedButton
      href={mailLink}
      target='_blank'
      label='send to mailer'
      secondary={true}
      style={{margin: 12}}
      icon={<FontIcon className='muidocs-icon-custom-mail' />}
      />
      </div>
    );
  }
}

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
      <Paper style={{margin: '1em', padding: '1em'}} zDepth={1}>
      <Form addr={this.state.addr} subject={this.state.subject} body={this.state.body} />
      </Paper>
      </div>
      </MuiThemeProvider>
    )
  }
}

export default App
