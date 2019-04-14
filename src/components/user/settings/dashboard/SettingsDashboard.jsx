import React from 'react';
import { Grid } from 'semantic-ui-react';
import { Redirect, Route, Switch } from 'react-router-dom';
import SettingsNav from '../navigation/SettingsNav';
import BasicSettings from '../BasicSettings';
import About from '../About';
import PhotoSettings from '../PhotosSettings';
import Profile from '../Profile';

const SettingsDashboard = () => (
  <Grid>
    <Grid.Column width={ 12 }>
      <Switch>
        <Redirect exact from='/settings' to='/settings/basic' />
        <Route path='/settings/basic' component={ BasicSettings } />
        <Route path='/settings/about' component={ About } />
        <Route path='/settings/photos' component={ PhotoSettings } />
        <Route path='/settings/profile' component={ Profile } />
      </Switch>
    </Grid.Column>
    <Grid.Column width={ 4 }>
      <SettingsNav />
    </Grid.Column>
  </Grid>
);

export default SettingsDashboard;
