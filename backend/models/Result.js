import mongoose from 'mongoose';

const resultSchema = new mongoose.Schema({
  student: { type: mongoose.Schema.Types.ObjectId, ref: 'Student' },
  subject: { type: String, required: true },
  score: { type: Number, required: true },
});

const Result = mongoose.model('Result', resultSchema);
export default Result;
