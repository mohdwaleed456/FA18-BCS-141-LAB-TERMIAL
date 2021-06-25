var mongoose = require("mongoose");
const Joi = require("@hapi/joi");
var recordSchema = mongoose.Schema({
  city: String,
  date: String,
  teamA: String,
  teamB: String,
});
var Record = mongoose.model("Record", recordSchema);

function validateRecord(data) {
  const schema = Joi.object({
    city: Joi.string().required(),
    date: Joi.string().required(),
    teamA: Joi.string().required(),
    teamB: Joi.string().required(),
  });
  return schema.validate(data, { abortEarly: false });
}
module.exports.Record = Record;
module.exports.validate = validateRecord;
