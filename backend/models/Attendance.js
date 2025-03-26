import mongoose from 'mongoose';

const attendanceSchema = new mongoose.Schema({
  student: { type: mongoose.Schema.Types.ObjectId, ref: 'Student' },
  date: { type: Date, required: true },
  status: { type: String, required: true },
});

const Attendance = mongoose.model('Attendance', attendanceSchema);
export default Attendance;
