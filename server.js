const dotenv = require("dotenv");
const mongoose = require("mongoose");

//To catch synchronous errors
console.log('within server');
process.on("uncaughtException", (err) => {
  console.log("Uncaught exception shutting down...");
  console.log(err.name, err.msg,err.stack);
  process.exit(1);
});

const app = require("./app");
console.log('after importing server');
dotenv.config({ path: "./config.env" });
const DB = process.env.DATABASE.replace(
  "<password>",
  process.env.DATABASE_PASSWORD
);

mongoose
  .connect(DB, {
    useNewUrlParser: true,
    useCreateIndex: true,
    useUnifiedTopology: true,
    useFindAndModify: false,
  })
  .then(() => console.log("DB connection successful!"));

// console.log(process.env);

const port = process.env.PORT || 8000;   
const server = app.listen(port, () => {
  console.log("before server");
  console.log(`app started on port ${port}...`);
});

