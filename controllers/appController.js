const Metriics = require("../models/appModel");
var MongoClient = require("mongodb").MongoClient;

exports.Metrics = async (req, res, next) => {
  const doc = await db;
  console.log(doc);
  res.status(200).json({
    doc,
  });
};
