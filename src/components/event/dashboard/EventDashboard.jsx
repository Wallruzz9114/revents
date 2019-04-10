import React, { Component } from 'react';
import { Button, Grid } from 'semantic-ui-react';
import cuid from 'cuid';
import EventForm from '../form/EventForm';
import EventList from '../list/EventList';

const allEvents = [
  {
    id: '1',
    title: 'Trip to Tower of London',
    date: '2018-03-27',
    category: 'culture',
    description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Phasellus sollicitudin ligula eu leo tincidunt, quis scelerisque magna dapibus. Sed eget ipsum vel arcu vehicula ullamcorper.',
    city: 'London, UK',
    venue: "Tower of London, St Katharine's & Wapping, London",
    hostedBy: 'Bob',
    hostPhotoURL: 'https://randomuser.me/api/portraits/men/20.jpg',
    attendees: [
      {
        id: 'a',
        name: 'Bob',
        photoURL: 'https://randomuser.me/api/portraits/men/20.jpg'
      },
      {
        id: 'b',
        name: 'Tom',
        photoURL: 'https://randomuser.me/api/portraits/men/22.jpg'
      }
    ]
  },
  {
    id: '2',
    title: 'Trip to Punch and Judy Pub',
    date: '2018-03-28',
    category: 'drinks',
    description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Phasellus sollicitudin ligula eu leo tincidunt, quis scelerisque magna dapibus. Sed eget ipsum vel arcu vehicula ullamcorper.',
    city: 'London, UK',
    venue: 'Punch & Judy, Henrietta Street, London, UK',
    hostedBy: 'Tom',
    hostPhotoURL: 'https://randomuser.me/api/portraits/men/22.jpg',
    attendees: [
      {
        id: 'b',
        name: 'Tom',
        photoURL: 'https://randomuser.me/api/portraits/men/22.jpg'
      },
      {
        id: 'a',
        name: 'Bob',
        photoURL: 'https://randomuser.me/api/portraits/men/20.jpg'
      }
    ]
  }
];

class EventDashboard extends Component {

  state = {
    events: allEvents,
    isOpen: false,
    selectedEvent: null
  }
  
  showEventForm = () => {
    this.setState({
      selectedEvent: null,
      isOpen: true
    });
  }

  dismissEventForm = () => {
    this.setState({
      selectedEvent: null,
      isOpen: false
    });
  }

  createEvent = (newEvent) => {
    newEvent.id = cuid();
    newEvent.hostPhotoURL = '/assets/images/user.png';

    const updatedEvents = [...this.state.events, newEvent];

    this.setState({
      events: updatedEvents,
      isOpen: false
    });
  }

  viewEvent = eventToView => () => {
    this.setState({
      selectedEvent: eventToView,
      isOpen: true
    });
  }

  updateEvent = (eventToUpdate) => {
    this.setState({
      events: this.state.events.map((event) => {
        if (event.id === eventToUpdate.id) {
          return Object.assign({}, eventToUpdate);
        } 
        return event;
      }),
      isOpen: false,
      selectedEvent: null
    });
  }

  deleteEvent = eventId => () => {
    const updatedEvents = this.state.events.filter(event => event.id !== eventId);

    this.setState({
      events: updatedEvents
    });
  }

  render() {
    const { selectedEvent } = this.state;

    return (
      <Grid>
        <Grid.Column width={ 10 }>
          <EventList
            events={ this.state.events }
            onEventOpen={ this.viewEvent }
            onEventDelete={ this.deleteEvent }
          />
        </Grid.Column>
        <Grid.Column width={ 6 }>
          <Button 
            basic
            primary
            fluid
            content='Add New Event'
            onClick={ this.showEventForm }
          />
          {
            this.state.isOpen && (
              <EventForm
                updateEvent={ this.updateEvent }
                selectedEvent={ selectedEvent }
                onCancel={ this.dismissEventForm }
                onCreateEvent={ this.createEvent }
              />
            )
          }
        </Grid.Column>
      </Grid>
    );
  }

}

export default EventDashboard;
