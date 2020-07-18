import { Schema, model, Types } from "mongoose";

import graphSchema from "./graph.schema";
import busSchema from "./bus.schema";
import generatorSchema from "./generator.schema";
import linkSchema from "./link.schema";
import loadSchema from "./load.schema";

const networkSchema = new Schema(
  {
    name: String,
    description: String,
    graph: {
      type: graphSchema,
      required: true
    },
    buses: {
      type: [busSchema],
      required: true
    },
    generators: {
      type: [generatorSchema],
      required: true
    },
    links: {
      type: [linkSchema],
      required: true
    },
    loads: {
      type: [loadSchema],
      required: true
    },

  },
  // Nested schema for a single edge must not be processed as a 'mixed'
  { typePojoToMixed: false }
);

export default networkSchema;