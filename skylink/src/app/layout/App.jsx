import React, {Fragment} from 'react';
import EventDashboard from '../../features/events/eventDashboard/EventDashboard';
import NavBar from '../../features/nav/NavBar';
import {Container} from "semantic-ui-react";


export default function App() {
  return (
    <Fragment>
      <NavBar />
      <Container className='main'>
        <EventDashboard />
      </Container>
    </Fragment>
  );
}
