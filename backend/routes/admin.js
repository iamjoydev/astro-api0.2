import express from "express";
import { getStatus, refreshData, listUsers, addUser, deleteUser } from "../controllers/adminController.js";

const router = express.Router();

router.get("/status", getStatus);
router.post("/refresh", refreshData);
router.get("/users", listUsers);
router.post("/users", addUser);
router.delete("/users/:id", deleteUser);

export default router;