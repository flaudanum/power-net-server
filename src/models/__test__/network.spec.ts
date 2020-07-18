import Network from "../network.model";

describe("A network model", () => {
  test("can be created", () => {
    const network = new Network({
      name: "Test network",
      description: "This model was created for testing purpose",
      graph: {
        nodes: [
          "bus-0",
          "bus-1",
          "gen-0",
          "link-0",
          "load-0"
        ],
        edges: [
          {
            node0: "gen-0",
            node1: "bus-0",
            port: "inj"
          },
          {
            node0: "bus-0",
            node1: "link-0",
            port: "from"
          },
          {
            node0: "link-0",
            node1: "bus-1",
            port: "to"
          },
          {
            node0: "bus-1",
            node1: "load-0",
            port: "ext"
          }
        ]
      },
      buses: [
        {
          label: "bus-0",
          name: "Point of injection",
          nomVoltage: 33.0,
          posX: 0,
          posY: 0,
          voltageMag: 1.0
        },
        {
          label: "bus-1",
          name: "Point of extraction",
          nomVoltage: 33.0,
          posX: 70.0,
          posY: -50.0
        }
      ],
      generators: [
        {
          label: "gen-0",
          name: "Waste power plant",
          control: "slack"
        }
      ],
      links: [
        {
          label: "link-0",
          lines: [
            {
              resistance: 2.6,
              reactance: 6.0,
              shuntConductivity: 5e-5,
              shuntSusceptance: 5e-6
            },
            {
              resistance: 2.6,
              reactance: 6.0,
              shuntConductivity: 5e-5,
              shuntSusceptance: 5e-6
            }
          ]
        }
      ],
      loads: [
        {
          label: "load-0",
          name: "Urban area",
          activePowerExt: 85,
          reactivePowerExt: -5.0
        }
      ]
    });

    // TODO: to be completed
    expect(network.name).toBe("Test network");
    expect(network.description).toBe("This model was created for testing purpose");
    expect(network.buses[0].name).toBe("Point of injection");

  });
})