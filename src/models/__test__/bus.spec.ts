import Bus from "../bus.model";

describe("A bus", () => {
  test("can be created", () => {
    const bus = new Bus({
      label: "bus-0",
      name: "Tested bus",
      nomVoltage: 66.0,  // kV
      posX: 10.,  // km
      posY: -5,  // km
      voltageMag: 1.01  // p.u.
    });

    expect(bus.label).toBe("bus-0");
    expect(bus.name).toBe("Tested bus");
    expect(bus.nomVoltage).toBe(66);
    expect(bus.posX).toBe(10);
    expect(bus.posY).toBe(-5);
    expect(bus.voltageMag).toBe(1.01);
  });
})