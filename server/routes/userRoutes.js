import express from "express";
import { isAdminRoute, protectRoute } from "../middlewares/authMiddlewave.js";
import {
  activateUserProfile,
  changeUserPassword,
  deleteUserProfile,
  getNotificationsList,
  getTeamList,
  loginUser,
  logoutUser,
  markNotificationRead,
  registerUser,
  updateUserProfile,
} from "../controllers/userController.js";

const router = express.Router();

router.post("/api/user/register", registerUser);
router.post("/api/user/login", loginUser);
router.post("/api/user/logout", logoutUser);

router.get("/api/user/get-team", protectRoute, isAdminRoute, getTeamList);
router.get("/api/user/notifications", protectRoute, getNotificationsList);

router.put("/api/user/profile", protectRoute, updateUserProfile);
router.put("/api/user/read-noti", protectRoute, markNotificationRead);
router.put("/api/user/change-password", protectRoute, changeUserPassword);

// //   FOR ADMIN ONLY - ADMIN ROUTES
router
  .route("/api/user/:id")
  .put(protectRoute, isAdminRoute, activateUserProfile)
  .delete(protectRoute, isAdminRoute, deleteUserProfile);

export default router;
