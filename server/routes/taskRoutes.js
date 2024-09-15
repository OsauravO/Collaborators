import express from "express";
import {
  createSubTask,
  createTask,
  dashboardStatistics,
  deleteRestoreTask,
  duplicateTask,
  getTask,
  getTasks,
  postTaskActivity,
  trashTask,
  updateTask,
} from "../controllers/taskController.js";
import { isAdminRoute, protectRoute } from "../middlewares/authMiddlewave.js";

const router = express.Router();

router.post("/api/task/create", protectRoute, isAdminRoute, createTask);
router.post("/api/task/duplicate/:id", protectRoute, isAdminRoute, duplicateTask);
router.post("/api/task/activity/:id", protectRoute, postTaskActivity);

router.get("/api/task/dashboard", protectRoute, dashboardStatistics);
router.get("/api/task/", protectRoute, getTasks);
router.get("/api/task/:id", protectRoute, getTask);

router.put("/api/task/create-subtask/:id", protectRoute, isAdminRoute, createSubTask);
router.put("/api/task/update/:id", protectRoute, isAdminRoute, updateTask);
router.put("/api/task/:id", protectRoute, isAdminRoute, trashTask);

router.delete(
  "api/task/delete-restore/:id?",
  protectRoute,
  isAdminRoute,
  deleteRestoreTask
);

export default router;
