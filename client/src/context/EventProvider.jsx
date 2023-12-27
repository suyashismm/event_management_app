import { createContext,useState } from "react";

export const EventContext = createContext(null);

const initialValues = {
    eventname:'',
    eventdate:'',
    eventlocation:'',
    eventdescription:''
}

export const EventProvider = (props) => {
    const [event,setEvent] = useState(initialValues);
    return(
        <EventContext.Provider value={{event,setEvent}}>
            {props.children}
        </EventContext.Provider>
    );

}

