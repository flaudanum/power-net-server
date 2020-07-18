import { model } from "mongoose";

import lineSchema from "./line.schema";

export default model("Line", lineSchema);