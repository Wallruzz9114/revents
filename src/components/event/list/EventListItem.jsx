import React, { Component } from 'react';
import {
  Button,
  Icon,
  Item,
  List,
  Segment
} from 'semantic-ui-react';
import EventListAttendee from './EventListAttendee';

class EventListItem extends Component {

  render() {
    const { event, onClickOpen, onClickDelete } = this.props;

    return (
      <Segment.Group>
        <Segment>
          <Item.Group>
            <Item>
              <Item.Image size='tiny' circular src={ event.hostPhotoURL } />
              <Item.Content>
                <Item.Header as='a'>{ event.title }</Item.Header>
                <Item.Description>
                  Hosted by <a href='www.google.com'>{ event.hostedBy }</a>
                </Item.Description>
              </Item.Content>
            </Item>
          </Item.Group>
        </Segment>
        <Segment>
          <span>
            <Icon name='clock' /> { event.date } |
            <Icon name='marker' /> { event.venue }
          </span>
        </Segment>
        <Segment secondary>
          <List horizontal>
            {
              event.attendees && event.attendees.map(currentAttendee => (
                <EventListAttendee key={ currentAttendee.id } attendee={ currentAttendee } />
              )) 
            }
          </List>
        </Segment>
        <Segment clearing>
          <span>{ event.description }</span>
          <Button as='a' color='red' floated='right' content='Delete' onClick={ onClickDelete(event.id) } />
          <Button as='a' color='teal' floated='right' content='View' onClick={ onClickOpen(event) } />
        </Segment>
      </Segment.Group>
    );
  }
  
}

export default EventListItem;
