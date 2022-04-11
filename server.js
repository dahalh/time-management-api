// const express = require("express");
import express from "express";
const app = express();
const PORT = 8000;

// Api end points

app.get("/api/v1", (req, res) => {
  res.json({ message: "Welcome to the API" });
});

app.use("/", (req, res) => {
  //   const person = {
  //     name: "Himanshu",
  //     lastName: "Dahal",
  //   };
  res.json({
    message: "You have reached the api of the time management tracker",
  });
});

app.listen(PORT, (error) => {
  error
    ? console.log(error)
    : console.log(`Server is running http://localhost:${PORT}`);
});
