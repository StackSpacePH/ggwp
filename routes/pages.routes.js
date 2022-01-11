import express from 'express';
import { getAllUserPages, addUserPage, getUserPage, removeUserPage} from '../controllers/pages.controller.js';

const router = express.Router();

router.get("/", getAllUserPages);
router.post("/", addUserPage);
router.get("/:userslug", getUserPage);
router.delete("/:userslug", removeUserPage);

export default router;