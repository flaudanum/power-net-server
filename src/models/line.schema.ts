import { Schema } from "mongoose";

const lineSchema = new Schema({
  resistance: {
    type: Number,
    required: true
  },
  reactance: {
    type: Number,
    required: true
  },
  shuntConductivity: {
    type: Number,
    required: false
  },
  shuntSusceptance: {
    type: Number,
    required: false
  },
});

export default lineSchema;