import express from "express";

import { createNetwork, listNetworks, getOneNetwork, updateOneNetwork, removeOneNetwork } from "../controllers/modeling/network";


const router = express.Router();

// GET /modeling/networks
router.get("/networks", listNetworks);

// POST /modeling/network
router.post("/network", createNetwork);

// GET /modeling/metwork/:id
router.get("/network/:id", getOneNetwork)

// PUT /modeling/metwork/:id
router.put("/network/:id", updateOneNetwork)

// DELETE /modeling/metwork/:id
router.delete("/network/:id", removeOneNetwork)


export default router;
