import express from "express";
import { LetterController } from "../controllers/LetterController";

const router = express.Router();
const _controller = new LetterController();

router.post("/SortLetterArray", _controller.);

export = router;