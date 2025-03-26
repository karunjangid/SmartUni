import React, { useState, useEffect } from "react";
import axios from "axios";
import "./EnhancedEventManagement.css";
import BackgroundVideo from "../assets/backgroundadvance.mp4"; // Ensure correct path

const EventManagement = () => {
  const [events, setEvents] = useState([]);
  const [eventData, setEventData] = useState({ name: "", venue: "", date: "", time: "" });
  const [error, setError] = useState(null);

  // Fetch all events
  const fetchEvents = async () => {
    try {
      const response = await axios.get("http://localhost:5000/api/events");
      setEvents(response.data);
    } catch (error) {
      console.error("Error fetching events:", error);
      setError("Failed to fetch events.");
    }
  };

  useEffect(() => {
    fetchEvents();
  }, []);

  // Create a new event
  const handleCreateEvent = async () => {
    try {
      const response = await axios.post("http://localhost:5000/api/events", eventData);
      setEvents([...events, response.data]);
      setEventData({ name: "", venue: "", date: "", time: "" }); // Reset form
      setError(null);
    } catch (error) {
      console.error("Error creating event:", error);
      setError("Failed to create event. Please check your input.");
    }
  };

  return (
    <section className="event-management-container">
      {/* Background Video */}
      <video autoPlay muted loop className="event-background-video">
        <source src={BackgroundVideo} type="video/mp4" />
        Your browser does not support the video tag.
      </video>

      {/* Content Overlay */}
      <div className="event-content-overlay">
        <h2>Event Management</h2>
        <form className="event-form" onSubmit={(e) => e.preventDefault()}>
          <div className="event-form-group">
            <label>Event Name:</label>
            <input
              type="text"
              value={eventData.name}
              onChange={(e) => setEventData({ ...eventData, name: e.target.value })}
              placeholder="Enter event name"
            />
          </div>
          <div className="event-form-group">
            <label>Venue:</label>
            <input
              type="text"
              value={eventData.venue}
              onChange={(e) => setEventData({ ...eventData, venue: e.target.value })}
              placeholder="Enter venue"
            />
          </div>
          <div className="event-form-group">
            <label>Date:</label>
            <input
              type="date"
              value={eventData.date}
              onChange={(e) => setEventData({ ...eventData, date: e.target.value })}
            />
          </div>
          <div className="event-form-group">
            <label>Time:</label>
            <input
              type="time"
              value={eventData.time}
              onChange={(e) => setEventData({ ...eventData, time: e.target.value })}
            />
          </div>
          <button className="event-create-button" onClick={handleCreateEvent}>
            Create Event
          </button>
        </form>

        {error && <p className="event-error">{error}</p>}

        <h3>Event List:</h3>
        <ul className="event-list">
          {events.map((event) => (
            <li key={event.id} className="event-item">
              <strong>{event.name}</strong> at {event.venue} on {event.date} at {event.time}
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
};

export default EventManagement;
