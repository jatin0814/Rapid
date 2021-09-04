const mongoose = require("mongoose");

const schema = mongoose.Schema;

const policeSchema = new schema({
  stationId: {
    type: String,
    required: true,
    default: "1234",
  },
  password: {
    type: String,
    required: true,
    default: "1234",
  },
  FIRs: {
    type: Array,
    default: [],
  },
  requests: {
    type: Array,
    default: [],
  },
});

module.exports = mongoose.model("Police", policeSchema);
