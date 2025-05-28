const express = require("express");
const app = express();

const port = process.env.PORT || 3000;

// router
const userRouter = require("./routers/userRouter");

// middleware
app.use(express.json()); // for parsing application/json
app.use(express.json({ extended: true })); 


app.get("/", (req, res) => {
  res.send("Hello World!");
});


app.use("/api", userRouter);

// console.log("first log"); 

// setTimeout(() => {
//   console.log("second log");
// }, 2000);

// console.log("thired log");

app.listen(port, () => {
  console.log(`Listening incomming server on port is ${port}`);
});

module.exports = app;