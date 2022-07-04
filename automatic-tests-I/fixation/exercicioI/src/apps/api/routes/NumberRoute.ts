import express from "express";
import { NumberController } from "../controllers/NumberRoute";

const router = express.Router();
const _controller = new NumberController();

router.post("/SortNumberArray", _controller.);

export = router;