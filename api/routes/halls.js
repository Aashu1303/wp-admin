import express, { application } from "express";
import { countByCity, countByType, createHall, deleteHall, getHall, getHalls, getHallSlots, updateHall } from "../controllers/halls.js";
import Halls from "../models/Halls.js";
import { verifyAdmin } from "../utils/verifyToken.js";

const router=express.Router();

router.post("/",verifyAdmin,createHall);

router.put("/:id",verifyAdmin,updateHall)

router.delete("/:id",verifyAdmin,deleteHall)

router.get("/find/:id",getHall)

router.get("/",getHalls);
router.get("/countByCity",countByCity);
router.get("/countByType",countByType);
router.get("/slot/:id",getHallSlots);


export default router
