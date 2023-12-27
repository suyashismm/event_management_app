// import React, { useState } from 'react';
import { Button, FormControl, FormGroup,Input,InputLabel,styled } from "@mui/material";
import { useContext } from 'react';
import {EventContext} from '../context/EventProvider';
import { authenticateCreateEvent } from "../services/api";

const Container = styled(FormGroup)`
    width:50%;
    margin:5% auto 0% auto;
`;
const Blocks = styled(FormControl)`
    margin-top:20px;
`;


const CreateEvent = () => {

    const {event,setEvent} = useContext(EventContext);

    const onValueChange = (e) => {
        setEvent({ ...event, [e.target.name]: e.target.value });
        console.log(event);
    }

    const handleCreateEvent = async () =>{
        let response = await authenticateCreateEvent(event);
        console.log(response);
    }

  return (
    <>
      <Container>
            <Blocks>
                <InputLabel>Event Name</InputLabel>
                <Input type="text" onChange={(e)=>onValueChange(e)} name="eventname"/>
            </Blocks>
            <Blocks>
                {/* <InputLabel>Event Date</InputLabel> */}
                <Input type="date" onChange={(e)=>onValueChange(e)} name="eventdate"/>
            </Blocks>
            <Blocks>
                <InputLabel>Event Location</InputLabel>
                <Input type="text" onChange={(e)=>onValueChange(e)} name="eventlocation"/>
            </Blocks>
            <Blocks>
                <InputLabel>Event Description</InputLabel><br/>
                <Input type="text" onChange={(e)=>onValueChange(e)} name="eventdescription"/>
            </Blocks>
            <Blocks>
                <Button variant="contained" onClick={handleCreateEvent}>Create Event</Button>
            </Blocks>
        </Container>
    </>
  );
};

export default CreateEvent;
