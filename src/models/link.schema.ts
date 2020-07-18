import { Schema } from "mongoose";

import lineSchema from "./line.schema";

const linkSchema = new Schema({
  label: {
    type: String,
    required: true
  },
  name: {
    type: String,
    required: false
  },
  lines: {
    type: [lineSchema],
    required: true
  }
});

export default linkSchema;
