import mongoose from "mongoose";

const userSchema = new mongoose.Schema({
  auth0Id: {
    type: String,
    required: true,
  },
  email: {
    type: String,
    required: true,
  },
  profileCreated: {
    type: Boolean,
    default: false,
    required: true,
  },
  fName: {
    type: String,
  },
  lName: {
    type: String,
  },
  address: {
    type: String,
  },
  city: {
    type: String,
  },
  state: {
    type: String,
  },
  zip: {
    type: String,
  },
  role: {
    type: String,
  },
  phone: {
    type: String,
  },
  clients: {
    type: Array,
    default: null,
  },
});

// realtor requires current clients array, past clients array, license # (verification maybe)?
// client requires assigned realtor, client type, addtl. info

const User = mongoose.model("User", userSchema);
export default User;
