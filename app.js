const express = require("express");
const morgan = require("morgan");
const metriics = require("./public/assignment-data/metrics.json");

const app = express();
app.use(express.json());

app.use(express.json());
// development logging
if (process.env.NODE_ENV === "development") {
  app.use(morgan("dev"));
  console.log("development");
}

// production logging
if (process.env.NODE_ENV === "production") {
  console.log("production");
}

app.get("/", (req, res) => {
  res.sendFile(`${__dirname}/public/assignment-data/metrics.json`);
  console.log(metriics);
});

metriics.map((m) => {
  m._id;
  app.get(`/${m._id}`, (req, res) => {
    // res.sendFile("/assign/public/assignment-data/metrics.json");
    res.sendFile(`${__dirname}/public/assignment-data/${m._id}.json`);
  });
});

app.all("*", (req, res, next) => {
  next(new AppError(`Can't find ${req.originalUrl} on this server`));
});

module.exports = app;
