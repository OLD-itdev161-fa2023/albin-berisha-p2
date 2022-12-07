import React from "react";
import {List, Image} from 'semantic-ui-react';

export default function EventListAtendee(){
    return (
        <List.Item>
            <Image size='mini' circular src='/assets/user.png'></Image>
        </List.Item>
    )
}