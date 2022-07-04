/**
 * @author Rithie
 * @date 07-04-2022
 */
//---------- Imports ---------
import express from "express";


//--------- Custom Imports ---------
import { LoremController } from "../controllers/LoremController";


//--------- Globals Variables ----------
const router = express.Router();
const _controller = new LoremController();


//--------- Route ---------
router.post("/loremGenerator", _controller.getLorem);


//---------- Exports ---------
export = router;