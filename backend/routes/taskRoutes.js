const express = require("express")
const router = express.Router()

const { createTask } = require("../controllers/taskControllers") // ✅ correct name

router.post("/newTask", createTask)

module.exports = router
