import { Schema } from "mongoose";

const graphSchema = new Schema(
  {
    nodes: {
      type: [String],
      required: true
    },
    edges: {
      type: [{
        node0: String,
        node1: String,
        port: String
      }],
      required: true
    }
  },
  // Nested schema for a single edge must not be processed as a 'mixed'
  { typePojoToMixed: false }
);

export default graphSchema;