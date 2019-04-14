import React, { Component } from 'react';
import 'semantic-ui-css/semantic.min.css';
import { Container } from 'semantic-ui-react';
import { Route, Switch } from 'react-router-dom';
import EventDashboard from '../../components/event/dashboard/EventDashboard';
import NavBar from '../../components/shared/navigation/NavBar';
import EventForm from '../../components/event/form/EventForm';
import EventDetails from '../../components/event/details/EventDetails';
import UserDashboard from '../../components/user/dashboard/UserDashboard';
import UserDetails from '../../components/user/details/UserDetails';
import Home from '../../components/home/Home';
import SettingsDashboard from '../../components/user/settings/dashboard/SettingsDashboard';

const RouteSettings = () => (
  <div>
    <NavBar />
    <Container className='main'>
      <Switch>
        <Route path='/events' component={ EventDashboard } />
        <Route path='/events/:id' component={ EventDetails } />
        <Route path='/users' component={ UserDashboard } />
        <Route path='/users/:id' component={ UserDetails } />
        <Route path='/settings' component={ SettingsDashboard } />
        <Route path='/new_event' component={ EventForm } />
      </Switch>
    </Container>
  </div>
);

class App extends Component {
  render() {
    return (
      <div>
        <Switch>
          <Route exact path='/' component={ Home } />
        </Switch>
        <Route path='/(.+)' render={ RouteSettings } />        
      </div>
    );
  }
}

export default App;
