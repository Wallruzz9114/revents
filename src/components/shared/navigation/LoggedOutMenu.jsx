import React from 'react';
import { Button, Menu } from 'semantic-ui-react';

const LoggedOutMenu = ({ login }) => (
  <Menu.Item position='right'>
    <Button onClick={ login } basic inverted content='Login' />
    <Button basic inverted content='Register' style={ { marginLeft: '0.5em' } } />
  </Menu.Item>
);

export default LoggedOutMenu;
