import express, { application } from "express";
import { deleteUser, getUser, getUsers, updateUser } from "../controllers/users.js";
import { verifyAdmin, verifyToken, verifyUser } from "../utils/verifyToken.js";

const router=express.Router();

router.get("/checkauthentication",verifyToken,(req,res,next)=>{
    res.send("hello,you are logged in!");
})

router.get("/checkuser/:id",verifyUser,(req,res,next)=>{
    res.send("hello,you are logged in and can delete!");
})
router.get("/checkadmin/:id",verifyAdmin,(req,res,next)=>{
    res.send("hello admin,you are logged in and can delete all accounts!");
})

router.put("/update/:id",verifyUser,updateUser)

router.delete("/:id",verifyUser,deleteUser)

router.get("/:id",verifyUser,getUser)

router.get("/",verifyAdmin,getUsers);

export default router
