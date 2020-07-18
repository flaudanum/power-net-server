<h1>REST API resources</h1>

- [Network model](#network-model)
  - [Create a network model - OK](#create-a-network-model---ok)
    - [Route](#route)
    - [Request body](#request-body)
    - [Sub-models](#sub-models)
    - [Response body](#response-body)
  - [Retrieve a summary list of available network models](#retrieve-a-summary-list-of-available-network-models)
    - [Route](#route-1)
    - [Response body](#response-body-1)
  - [Get a network model by ID](#get-a-network-model-by-id)
    - [Route](#route-2)
    - [Response body](#response-body-2)
  - [Delete a network model](#delete-a-network-model)
    - [Route](#route-3)
    - [Response body](#response-body-3)
  - [Update a network model](#update-a-network-model)
    - [Response body](#response-body-4)
    - [Request body](#request-body-1)
    - [Response body](#response-body-5)
- [power flow simulation](#power-flow-simulation)
  - [Create a power flow simulation setup](#create-a-power-flow-simulation-setup)
  - [Get a power flow simulation result](#get-a-power-flow-simulation-result)

# Network model

## Create a network model - OK

### Route

```
POST /modeling/network
```

### Request body

Description of the JSON schema `_networkObj` for the request body:

```JSON
{
    "name": string,
    "description": string,
    "graph": _graphObj,
    "buses": [_busObj],
    "generators": [_generatorObj],
    "links": [_linkObj],
    "loads": [_loadObj]
}
```

### Sub-models

Data formats of sub-models composing the request body.

`_graphObj`

```JSON
{
    "nodes": [string],
    "edges" [{
        "node0": string,
        "node1": string,
        "port": string
    }]
}
```

`_busObj`

```JSON
{
    "label": string,
    "name": string,
    "nomVoltage": number,
    "posX": number,
    "posY": number,
    "voltageMag": number
}
```

`_generatorObj`

```JSON
{
    "label": string,
    "name": string,
    "control": string,
    "activePInj": number,
    "reactivePInj": number
}
```

`_linkObj`

```JSON
{
    "label": string,
    "name": string,
    "lines": [_lineObj],
}
```

`_lineObj`

```JSON
{
    "resistance": number,
    "reactance": number,
    "shuntConductivity": number,
    "shuntSusceptance": number
}
```

`_loadObj`

```JSON
{
    "label": string,
    "name": string,
    "activePowerExt": number,
    "reactivePowerExt": number
}
```

### Response body

Status 201:

```JSON
{
  "message": "Created new network.",
  "docId": string
}
```

## Retrieve a summary list of available network models

### Route

```
GET /modeling/networks
```

### Response body

Status 200:

```JSON
{
  "message": "List of network models",
  "networks": [_networkObj]
}
```

The JSON schema is provided in the description of the [response body](#request-body) of the route `POST /modeling/network`

## Get a network model by ID

### Route

```
GET /modeling/network/:id
```

### Response body

Status 200:

```JSON
{
  "message": "List of network models",
  "network": _networkObj
}
```

The JSON schema is provided in the description of the [response body](#request-body) of the route `POST /modeling/network`

## Delete a network model

### Route

```
DELETE /modeling/network/:id
```

### Response body

Status 200:

```JSON
{
  "message": "Removed network model",
  "networkId": string
}
```

## Update a network model

### Response body

```
PUT /modeling/network/:id
```

### Request body

The JSON schema of the request body is `_networkObj`, that is a full replacement of the original document.

```JSON
{
    "name": string,
    "description": string,
    "graph": _graphObj,
    "buses": [_busObj],
    "generators": [_generatorObj],
    "links": [_linkObj],
    "loads": [_loadObj]
}
```

### Response body

Status 200:

```JSON
{
  "message": "Network model was updated",
  "networkId": string
}
```

# power flow simulation

## Create a power flow simulation setup

## Get a power flow simulation result

```

```
