// const express = require("express");
import express from "express";
const app = express();
const PORT = 8000;

// connect to mongodb
import mongoClient from "./src/config/db.js";
mongoClient();

app.use(express.urlencoded({ extended: true }));
app.use(express.json());

// Load the modules
import taskRouter from "./src/routers/taskRouter.js";

app.use("/api/v1/task", taskRouter);

app.use("/", (req, res) => {
  res.json({
    message: "You have reached the api of the time management tracker",
  });
});

app.listen(PORT, (error) => {
  error
    ? console.log(error)
    : console.log(`Server is running http://localhost:${PORT}`);
});
