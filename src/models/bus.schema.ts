import { Schema } from "mongoose";

const busSchema = new Schema({
  label: {
    type: String,
    required: true
  },
  name: {
    type: String,
    required: false
  },
  nomVoltage: {
    type: Number,
    required: true
  },
  posX: {
    type: Number,
    required: true
  },
  posY: {
    type: Number,
    required: true
  },
  voltageMag: {
    type: Number,
    required: false
  }
});

export default busSchema;
