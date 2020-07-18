import { Schema } from "mongoose";

const loadSchema = new Schema({
  label: {
    type: String,
    required: true
  },
  name: {
    type: String,
    required: false
  },
  activePowerExt: {
    type: Number,
    required: true
  },
  reactivePowerExt: {
    type: Number,
    required: true
  },
});

export default loadSchema;