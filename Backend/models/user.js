const mongoose = require("mongoose");

const schema = mongoose.Schema;

const userSchema = new schema({
  email: {
    type: String,
    required: true,
    unique: true,
  },
  password: {
    type: String,
    required: true,
  },
  phoneNo: {
    type: String,
    required: true,
  },
  isPolice: {
    type: Boolean,
    default: false,
  },
  FIRs: {
    type: Array,
    default: [],
  },
});

module.exports = mongoose.model("User", userSchema);
