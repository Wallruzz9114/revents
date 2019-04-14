import * as React from 'react';
import { Button, Container, Menu } from 'semantic-ui-react';
import { NavLink, Link, withRouter } from 'react-router-dom';
import LoggedOutMenu from './LoggedOutMenu';
import LoggeInMenu from './LoggeInMenu';

class NavBar extends React.Component {

  state = {
    authenticated: false
  }

  logIn = () => {
    this.setState({
      authenticated: true
    });
  }

  logOut = () => {
    this.setState({
      authenticated: false
    });

    this.props.history.push('/');
  }

  render() {
    const { authenticated } = this.state;

    return (
      <Menu inverted fixed='top'>
        <Container>
          <Menu.Item as={ Link } to='/' header>
            <img src='/assets/images/logo.png' alt='logo' />
            Revents
          </Menu.Item>
          <Menu.Item as={ NavLink } to='/events' name='Events' />
          { authenticated && <Menu.Item as={ NavLink } to='/users' name='Users' /> }
          { authenticated
            && (
              <Menu.Item>
                <Button as={ Link } to='/new_event' floated='right' positive inverted content='Add New Event' />
              </Menu.Item>
            ) 
          }
          {
            authenticated
              ? (<LoggeInMenu logout={ this.logOut } />)
              : (<LoggedOutMenu login={ this.logIn } />)
          }
        </Container>
      </Menu>
    );
  }
  
}

export default withRouter(NavBar);
