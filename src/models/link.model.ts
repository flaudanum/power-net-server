import { model } from "mongoose";

import linkSchema from "./link.schema";

export default model("Graph", linkSchema);
