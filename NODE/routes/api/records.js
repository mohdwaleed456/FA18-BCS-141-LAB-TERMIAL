const express = require("express");
let router = express.Router();
const validateRecord = require("../../middlewares/validateRecord");
const auth = require("../../middlewares/auth");
const admin = require("../../middlewares/admin");
var { Record } = require("../../models/record");

//get all records
router.get("/", async (req, res) => {
  console.log(req.user);
  let page = Number(req.query.page ? req.query.page : 1);
  let perPage = Number(req.query.perPage ? req.query.perPage : 10);
  let skipRecords = perPage * (page - 1);
  let records= await Record.find().skip(skipRecords).limit(perPage);
  return res.send({ records });
});
//get single record
router.get("/:id", async (req, res) => {
  try {
    let record = await Record.findById(req.params.id);
    if (!record)
      return res.status(400).send("Record with given ID is not present"); 
    return res.send(record); 
  } catch (err) {
    return res.status(400).send("Invalid ID"); 
  }
});

//Insert a record
router.post("/", async (req, res) => {
  let record = new Record();
  record.city = req.body.city;
  record.date = req.body.date;
  record.teamA = req.body.teamA;
  record.teamB = req.body.teamB;
  await record.save();
  return res.send(record);
});
module.exports = router;
