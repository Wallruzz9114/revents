import React, { Component } from 'react';
import 'semantic-ui-css/semantic.min.css';
import { Container } from 'semantic-ui-react';
import EventDashboard from '../../components/event/dashboard/EventDashboard';
import NavBar from '../../components/shared/navigation/NavBar';

class App extends Component {
  render() {
    return (
      <div>
        <NavBar />
        <Container className='main'>
          <EventDashboard />
        </Container>
      </div>
    );
  }
}

export default App;
