const mongoose = require("mongoose");

const connection = mongoose.connection;
const metricsSchema = mongoose.Schema(
  {
    _id: String,
    measure: String,
    dimensions: [{ name: String, value: String }],
  },
  {
    toJSON: { virtuals: true },
    toObject: { virtuals: true },
  }
);

const Metrics = mongoose.model("Metrics", metricsSchema);

module.exports = connection;
