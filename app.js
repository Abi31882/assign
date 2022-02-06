const express = require("express");
const morgan = require("morgan");
const metriics = require("./public/assignment-data/metrics.json");
const appRouter = require("./routes/appRoutes");
const app = express();
const cors = require("cors");

const corsOptions = {
  origin: "http://localhost:3000",
  optionsSuccessStatus: 200,
};
app.use(cors(corsOptions));

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
});

metriics.map((m) => {
  m._id;
  app.get(`/${m._id}`, (req, res) => {
    res.sendFile(`${__dirname}/public/assignment-data/${m._id}.json`);
  });
});

// 2) Routes
module.exports = app;
