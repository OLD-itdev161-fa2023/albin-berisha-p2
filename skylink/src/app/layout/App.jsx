import React, {useState, setEvents, events} from 'react';
import EventDashboard from '../../features/events/eventDashboard/EventDashboard';
import NavBar from '../../features/nav/NavBar';
import {Container} from "semantic-ui-react";
import { handleSelectEvent } from 'react';


export default function App() {
  const [formOpen, setFormOpen] = useState(false);
  const [selectedEvent, setSelectedEvent] = useState(null);

  function handleCreateEvent(event){
        setEvents([...events, event])
    }

  function handleCreateFormOpen() {
        setSelectedEvent(null);
        setFormOpen(true);
  }
    
  return (
    <>
      <NavBar setFormOpen={handleCreateFormOpen}/>
        <Container className='main'>
        <EventDashboard 
        formOpen={formOpen} 
        setFormOpen={setFormOpen}
        selectEvent={handleSelectEvent}
        selectedEvent={selectedEvent}/>
      </Container>
    </>
  );
}
