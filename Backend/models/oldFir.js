const mongoose = require("mongoose");

const schema = mongoose.Schema;

const oldFirSchema = new schema({
  imgbase64: {
    type: String,
    required: true,
  },
  description: {
    type: String,
    required: true,
  },
});

module.exports = mongoose.model("oldFir", oldFirSchema);
