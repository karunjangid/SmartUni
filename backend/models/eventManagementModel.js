let events = []; // In-memory event store

// Function to create an event
export const createEvent = (eventData) => {
  if (!eventData.name || !eventData.venue || !eventData.date || !eventData.time) {
    throw new Error("All fields (name, venue, date, and time) are required.");
  }

  const newEvent = {
    id: events.length + 1, // Auto-generate a unique ID
    name: eventData.name,
    venue: eventData.venue,
    date: eventData.date,
    time: eventData.time,
    participants: eventData.participants || [],
    tasks: eventData.tasks || [],
  };

  events.push(newEvent);
  return newEvent;
};

// Function to get all events
export const getAllEvents = () => events;

// Function to get a single event by ID
export const getEventById = (id) => {
  const event = events.find((e) => e.id === id);
  if (!event) throw new Error("Event not found.");
  return event;
};

// Function to update an event
export const updateEvent = (id, updatedData) => {
  const event = events.find((e) => e.id === id);
  if (!event) throw new Error("Event not found.");

  Object.assign(event, updatedData); // Update the event with new data
  return event;
};

// Function to delete an event
export const deleteEvent = (id) => {
  const index = events.findIndex((e) => e.id === id);
  if (index === -1) throw new Error("Event not found.");

  const [deletedEvent] = events.splice(index, 1);
  return deletedEvent;
};
