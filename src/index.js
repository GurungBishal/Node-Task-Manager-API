const express = require("express");
require("./db/mongoose");
const User = require("./models/user");
const Task = require("./models/task");
const userRouter = require("./routers/user");
const taskRouter = require("./routers/task");

const app = express();

const port = process.env.PORT;

app.use(express.json());
app.use(userRouter);
app.use(taskRouter);

app.listen(port, () => {
  console.log("server is listening on port " + port);
});

// const becrypt = require("bcryptjs");

// const myFunction = async () => {
//   const password = "Bishalgurung123";
//   const hashedPassword = await becrypt.hash(password, 8);
//   console.log(password);
//   console.log(hashedPassword);

//   const isCorrect = await becrypt.compare(password, hashedPassword);
//   console.log(isCorrect);
// };

// myFunction();

// const jwt = require("jsonwebtoken");

// const myFunction = async () => {
//   const token = jwt.sign({ _id: "12e3" }, "thisismytoken", {
//     expiresIn: "0 days",
//   });
//   console.log(token);

//   const data = jwt.verify(token, "thisismytoken");
//   console.log(data);
// };

// myFunction();

// const Task = require("./models/task");
// const User = require("./models/user");

// const main = async () => {
//   // const task = await Task1.findById("5feaa44ac36df53b50169082");
//   // await task.populate("author").execPopulate();
//   // console.log(task.author);

//   const user = await User.findById("5feaa36e2950933968a47f44");
//   await user.populate("tasks").execPopulate();
//   console.log(user.tasks);
// };

// main();
