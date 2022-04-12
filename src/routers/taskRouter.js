import express from "express";
import { insertTask } from "../models/task/TaskList.model.js";
const router = express.Router();

// replace the fake tasks with the real ones from the database

router.get("/", (req, res) => {
  res.json({
    status: "success",
    message: "you made a get call",
    tasks: fakeTasks,
  });
});

router.post("/", async (req, res) => {
  //   fakeTasks.push(req.body);

  const result = await insertTask(req.body);
  console.log(result);

  res.json({ status: "success", message: "your new task has been added" });
});

router.delete("/", (req, res) => {
  res.json({ message: "you made a delete call" });
});

export default router;
