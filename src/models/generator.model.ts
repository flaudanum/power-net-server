import { model } from "mongoose";

import generatorSchema from "./generator.schema";

export default model("Generator", generatorSchema);
