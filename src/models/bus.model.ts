import { model } from "mongoose";

import busSchema from "./bus.schema";
import BusDocument from "./bus.document";

export default model<BusDocument>("Bus", busSchema);
