const express = require("express");

//USING ROUTER
const userRouter = express.Router();

userRouter
  .route("/")
  .all((req, res, next) => {
    res.statusCode = 200;
    res.setHeader("Content-Type", "text-html");

    next();
  })

  .get((req, res) => {
    res.end("Showing the list of all users");
  })

  .post((req, res) => {
    res.end(
      `User Added with ${req.body.name} and userName ${req.body.userName}`
    );
  })

  .put((req, res) => {
    res.end("User update is not supported");
  })

  .delete((req, res) => {
    res.end("All users Deleted");
  });
module.exports = userRouter;
