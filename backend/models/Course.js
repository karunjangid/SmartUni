import mongoose from 'mongoose';

const courseSchema = new mongoose.Schema({
  title: { type: String, required: true },
  faculty: { type: mongoose.Schema.Types.ObjectId, ref: 'Faculty' },
  students: [{ type: mongoose.Schema.Types.ObjectId, ref: 'Student' }],
});

const Course = mongoose.model('Course', courseSchema);
export default Course;
