const Event = require('../model/event-schema');

const createEvent = async (request, response) => {
    try {
        const event = request.body;
        // const { eventname, eventdate, eventlocation, eventdescription } = request.body;
        console.log(event);
        const newevent = new Event(event);
        await newevent.save();
        response.status(200).json({ message: event });
    } catch (error) {
        response.status(500).json({ message: error.message });
    }
}

module.exports = createEvent;
