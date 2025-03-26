// classSchedulingModel.js

export const scheduleClass = (roomNumber, professor, studentCount) => {
  const rooms = [
    { room: "A101", capacity: 30 },
    { room: "B202", capacity: 50 },
  ];
  const professors = {
    "John Doe": ["Monday 9:00 AM - 10:30 AM", "Wednesday 11:00 AM - 12:30 PM"],
    "Jane Smith": ["Tuesday 10:00 AM - 11:30 AM", "Friday 2:00 PM - 3:30 PM"],
  };

  const room = rooms.find((r) => r.room === roomNumber);
  if (!room || studentCount > room.capacity) {
    throw new Error("Room capacity exceeded or invalid room");
  }

  const availability = professors[professor];
  if (!availability) {
    throw new Error("Professor not available");
  }

  return `Professor ${professor} Class scheduled in Room ${roomNumber} on ${availability[0]}`;
};
