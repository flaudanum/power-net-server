import { Document } from "mongoose";

interface IBus {
  label: string,
  name?: String,
  nomVoltage: number,
  posX: number,
  posY: number,
  voltageMag?: number
}

export default interface BusDocument extends Document, IBus { };
