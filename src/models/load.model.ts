import { model } from "mongoose";

import loadSchema from "./load.schema";

export default model("Graph", loadSchema);
