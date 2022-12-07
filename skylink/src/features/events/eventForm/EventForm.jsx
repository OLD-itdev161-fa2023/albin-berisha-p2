import {Segment, Header, Form, Button } from 'semantic-ui-react';

export default function EventForm() {
    <Segment clearing>
        <Header />
            <Form>
                <Form.Field>
                    <input type="text" placeholder='Event title'></input>
                </Form.Field>
                <Form.Field>
                    <input type="text" placeholder='Category'></input>
                </Form.Field>
                <Form.Field>
                    <input type="text" placeholder='Description'></input>
                </Form.Field>
                <Form.Field>
                    <input type="text" placeholder='City'></input>
                </Form.Field>
                <Form.Field>
                    <input type="text" placeholder='Venue'></input>
                </Form.Field>
                <Form.Field>
                    <input type="text" placeholder='Date'></input>
                </Form.Field>
                <Button type='submit' floated='right' positive content='Submit' />
                <Button type='submit' floated='right' content='Cancel' />
            </Form>
    </Segment>
}