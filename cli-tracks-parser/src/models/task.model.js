import mongoose from 'mongoose';

const TaskSchema = new mongoose.Schema({
  order: { type: Number, required: true },
  index: { type: String, required: true },
  spec: { type: String, required: true },
  solution: { type: String, required: true },
  readme: { type: String, required: true },
  solutionReadme: { type: String, required: true },
  languages: { type: [String], required: false },
  translations: {
    readme: {
      ru: {
        type: String,
        required: false
      },
      en: {
        type: String,
        required: false
      },
      uk: {
        type: String,
        required: false
      }
    },
    solutionReadme: {
      ru: {
        type: String,
        required: false
      },
      en: {
        type: String,
        required: false
      },
      uk: {
        type: String,
        required: false
      }
    },
  },
  taskId: { type: String, required: true, index: true },
  taskName: { type: String, required: true },
  trackId: { type: String, required: true },
  __v: { type: Number, select: false },
});

export const TaskModel = mongoose.model('Task', TaskSchema);
