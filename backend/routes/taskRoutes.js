const express = require("express")
const router = express.Router()

const { createTask,readTask,getTaskById,updateTask,deleteTask, updateTaskPatch} = require("../controllers/taskControllers") // ✅ correct name
const {protect} = require("../middleware/authmiddleware")
router.post("/newTask",protect,createTask)
router.get("/getTask",protect,readTask)
router.get("/getTaskById/:id",protect,getTaskById)
router.put("/updateTask/:id",protect,updateTask)
router.put("/updateTaskPatch/:id",protect,updateTaskPatch)
router.delete("/deleteTask/:id",protect,deleteTask)
module.exports = router
