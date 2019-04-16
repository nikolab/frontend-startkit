import React, { Component } from 'react'
import PropTypes from 'prop-types'
import { Link, withRouter } from 'react-router-dom'
import { observer } from 'mobx-react'

// Components
import AppBar from '@material-ui/core/AppBar'
import Button from '@material-ui/core/Button'
import Drawer from '@material-ui/core/Drawer'
import IconButton from '@material-ui/core/IconButton'
import ListItemIcon from '@material-ui/core/ListItemIcon'
import MenuItem from '@material-ui/core/MenuItem'
import Toolbar from '@material-ui/core/Toolbar'
import Typography from '@material-ui/core/Typography'

// Icons
import CloseIcon from '@material-ui/icons/Clear'
import DashboardIcon from '@material-ui/icons/Dashboard'
import Menu from '@material-ui/core/Menu';

import Fingerprint from '@material-ui/icons/Fingerprint'

import EmptyTemplate from 'templates/empty'
import store from 'store'
import styles from './styles'


class Template extends Component {
  state = {
    showMenu: false,
    anchorEl: null,
  };


    handleClick = event => {
        this.setState({ anchorEl: event.currentTarget });
    };

    handleClose = () => {
        this.setState({ anchorEl: null });
    };

  handleMenuOpen = () => {
    this.setState({ showMenu: true })
  }

  handleMenuClose = () => {
    this.setState({ showMenu: false })
  }

  handleLogout = () => {
    this.props.store.auth.auth = false
    this.props.store.auth.email = ''
    this.props.store.auth.password = ''
    this.props.history.push('/landing')
  }

  render() {
      const { anchorEl } = this.state;
    const AnonButton = (
      <Link to="/login" style={styles.login}>
        <Button color="inherit">Login</Button>
      </Link>
    )
    const LoggedinButton = (
      <Button color="inherit" onClick={this.handleLogout}>
        Logout
      </Button>
    )
    const AuthButton = this.props.store.auth.auth ? LoggedinButton : AnonButton
    const menuButtonAction = this.props.store.auth.auth ? this.handleMenuOpen : null
    return (
      <div>
        <AppBar position="static">
          <Toolbar>
            <IconButton color="inherit" onClick={menuButtonAction}>
                <div style={styles.logo}/>
              Tilda Centar
            </IconButton>
            <Link to={"/about"} style={styles.link}>
              <Button color="inherit">
                  About
              </Button>
            </Link>
              <Button color="inherit">
                  Team
              </Button>
            <a href="https://google.com" target="_blank" rel="noopener noreferrer" style={styles.link}>
              <Button color="inherit">
                  What we do
              </Button>
            </a>
            <Typography variant="title" color="inherit" style={styles.flex}>
              {/* eslint-disable-next-line react/jsx-one-expression-per-line */}
              Frontend Startkit - {this.props.store.title.title}
            </Typography>
            {AuthButton}
              <IconButton color="inherit">
                  <Fingerprint/>
              </IconButton>
              <Button
                  aria-owns={anchorEl ? 'simple-menu' : undefined}
                  aria-haspopup="true"
                  onClick={this.handleClick}
              >
                  Open Menu
              </Button>
              <Menu
                  id="simple-menu"
                  anchorEl={anchorEl}
                  open={Boolean(anchorEl)}
                  onClose={this.handleClose}
              >
                  <MenuItem onClick={this.handleClose}>Profile</MenuItem>
                  <MenuItem onClick={this.handleClose}>My account</MenuItem>
                  <MenuItem onClick={this.handleClose}>Logout</MenuItem>
              </Menu>
          </Toolbar>
        </AppBar>
        <EmptyTemplate secure={this.props.secure} style={this.props.style}>
          {this.props.children}
          <Drawer open={this.state.showMenu} onClose={this.handleMenuClose}>
            <AppBar position="static">
              <Toolbar>
                <Typography variant="title" color="inherit" style={styles.flex}>
                  &nbsp;
                </Typography>
                <IconButton color="inherit" onClick={this.handleMenuClose}>
                  <CloseIcon />
                </IconButton>
              </Toolbar>
            </AppBar>
            <div
              role="button"
              onClick={this.handleMenuClose}
              style={styles.menu}
              tabIndex={0}
              onKeyDown={this.handleMenuClose}
            >
              <Link to="/" style={styles.a}>
                <MenuItem>
                  <ListItemIcon>
                    <DashboardIcon />
                  </ListItemIcon>
                  Dashboard
                </MenuItem>
              </Link>
            </div>
          </Drawer>
        </EmptyTemplate>
      </div>
    )
  }
}


Template.propTypes = {
  children: PropTypes.node,
  history: PropTypes.shape({ push: PropTypes.func.isRequired }).isRequired,
  secure: PropTypes.bool,
  store: PropTypes.shape({
    auth: PropTypes.shape({
      auth: PropTypes.bool.isRequired,
      email: PropTypes.string.isRequired,
      login: PropTypes.func.isRequired,
      password: PropTypes.string.isRequired,
    }).isRequired,
    title: PropTypes.shape({
      title: PropTypes.string.isRequired,
    }).isRequired,
  }).isRequired,
  style: PropTypes.shape({}),
  title: PropTypes.string,
}


export default withRouter(observer((props) => <Template {...props} store={store} />))
