import React from "react";
import { Grid } from "semantic-ui-react";
import EventList from "./EventList";
import EventForm from "../eventForm/EventForm";

export default function EventDashboard(){
    return(
        <Grid>
            <Grid.Column widhth={10}>
                widhth: 70%
                <EventList />
            </Grid.Column>
            <Grid.Column widhth={6}>
                <EventForm />
            </Grid.Column>
        </Grid>
    )
}

