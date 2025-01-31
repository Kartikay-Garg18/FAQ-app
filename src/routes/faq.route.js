import { Router } from "express";
import { createFAQ, getFAQ } from "../controllers/faq.controller.js";

const router = Router();

router.route('/').get(getFAQ);
router.route('/').post(createFAQ);

export default router;