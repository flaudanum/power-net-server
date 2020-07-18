import { Schema } from "mongoose";

const generatorSchema = new Schema({
  label: {
    type: String,
    required: true
  },
  name: {
    type: String,
    required: false
  },
  control: {
    type: String,
    required: true
  },
  activePInj: {
    type: Number,
    required: false
  },
  reactivePInj: {
    type: Number,
    required: false
  },
});

export default generatorSchema;