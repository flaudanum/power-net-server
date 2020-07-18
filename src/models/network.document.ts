import { Document } from "mongoose";


export interface INetwork {
  name: string,
  description: string,
  graph: {
    nodes: string[],
    edges: [{
      node0: string,
      node1: string,
      port: string
    }]
  },
  buses: [{
    label: string,
    name?: string,
    nomVoltage: number,
    posX: number,
    posY: number,
    voltageMag?: number,
  }],
  generators: [{
    label: string,
    name?: string,
    control: "slack" | "PQ" | "PV",
    activePInj: number,
    reactivePInj: number,
  }],
  links: [{
    label: string,
    name?: string,
    lines: [{
      resistance: number,
      reactance: number,
      shuntConductivity?: number,
      shuntSusceptance?: number,
    }]
  }],
  loads: [{
    label: string,
    name?: string,
    activePowerExt: number,
    reactivePowerExt: number,
  }]
}


export interface NetworkDocument extends Document, INetwork { };
