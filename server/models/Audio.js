import mongoose from 'mongoose';

const AudioSchema = new mongoose.Schema({
  name: {
    type: String,
    required: true,
  },
  path: {
    type: String,
    required: true,
  },
  duration: {
    type: Number,
    required: true,
  },
  size: {
    type: Number,
    required: true,
  },
});

const Audio = mongoose.model('Audio', AudioSchema);

export default Audio;