import { RequestHandler } from "express";

import { INetwork } from "../../models/network.document";
import Network from "../../models/network.model";
import StatusError from "../../utils/status-error";


export const createNetwork: RequestHandler = async (req, res, next) => {
  const body = <INetwork>req.body;

  const network = new Network(body);

  try {
    const networkDoc = await network.save();

    res.status(201).json({
      message: "Created new network.",
      docId: networkDoc._id
    });
  } catch (err) {
    err = err as Error;
    const error = new StatusError(err.message, 500);
    next(error);
  }
}

export const listNetworks: RequestHandler = async (req, res, next) => {
  try {
    const networks = await Network.find();

    res.status(200).json({
      message: "List of network models",
      networks: networks
    });

  } catch (err) {
    err = err as Error;
    const error = new StatusError(err.message, 500);
    next(error);
  }
}

export const getOneNetwork: RequestHandler = async (req, res, next) => {
  // Gets the network model ID from the URL
  const networkId = req.params.id;

  try {
    // Searches the network by ID
    const network = await Network.findById(networkId);

    // Error: the network was not found
    if (!network) {
      throw new StatusError(`Network model not found (id = ${networkId})`, 404);
    }

    res.status(200).json({
      message: "Found the network model",
      network: network
    });
  } catch (err) {
    err = err as Error;
    const error = new StatusError(err.message, 500);
    next(error);
  }
}

export const updateOneNetwork: RequestHandler = async (req, res, next) => {
  // Gets the network model ID from the URL
  const networkId = req.params.id;

  // JSON data of the updated network model
  const updatedNetworkData = <INetwork>req.body;

  const network = await Network.findById(networkId);

  // Error: the network was not found
  if (!network) {
    throw new StatusError(`Network model (id = ${networkId}) was not found and could thus not be updated`, 404);
  }

  // Updates properties of the network model
  network.name = updatedNetworkData.name;
  network.description = updatedNetworkData.description;
  network.graph = updatedNetworkData.graph;
  network.buses = updatedNetworkData.buses;
  network.links = updatedNetworkData.links;
  network.loads = updatedNetworkData.loads;

  // Saves the updated network
  await network.save();

  res.status(200).json({
    message: "Updated network model",
    networkId: network._id
  });
}


export const removeOneNetwork: RequestHandler = async (req, res, next) => {
  // Gets the network model ID from the URL
  const networkId = req.params.id;

  try {
    // Searches the network by ID
    const network = await Network.findByIdAndRemove(networkId);

    // Error: the network was not found
    if (!network) {
      throw new StatusError(`Network model (id = ${networkId}) was not found and could thus not be removed`, 404);
    }

    res.status(200).json({
      message: "Removed network model",
      networkId: network._id
    });
  } catch (err) {
    err = err as Error;
    const error = new StatusError(err.message, 500);
    next(error);
  }
}