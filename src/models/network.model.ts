import { model } from "mongoose";

import networkSchema from "./network.schema";
import { NetworkDocument } from "./network.document";


export default model<NetworkDocument>("Network", networkSchema);
