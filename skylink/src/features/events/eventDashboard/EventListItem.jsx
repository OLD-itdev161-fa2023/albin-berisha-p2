import React from "react";
import {Segment, Item, Icon, List, Button} from "semantic-ui-react";
import EventListAtendee from "./EventListAtendee";

export default function EventListItem(){
    return (
        <Segment.Group>
            <Segment>
                <Item.Group>
                    <Item>
                        <Item.Image size='tiny' circular src='/assets/user.png' />
                        <Item.Content>
                            <Item.Header content = 'Event Title' />
                            <Item.Description>
                                 Hosted by Albin
                            </Item.Description>
                        </Item.Content>
                    </Item>
                </Item.Group>
            </Segment>
            <Segment>
                <span>
                    <Icon name='clock'/> Date
                    <Icon name='marker'/> Veue
                </span>
            </Segment>
            <Segment secondary>
                <List horizontal>
                    <EventListAtendee />
                    <EventListAtendee />
                    <EventListAtendee />
                </List>
            </Segment>
            <Segment clearing>
                <div>Description of event</div>
                <Button color='teal' floated='right' content='View'/>
            </Segment>
        </Segment.Group>
    )
}