import mongoose from "mongoose";

const clientSchema = new mongoose.Schema({
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
  agentName: {
    type: String,
    required: true,
  },
  agentId: {
    type: String,
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

  // nest schema for properties
});

const agentSchema = new mongoose.Schema({
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
    auth0Id: {
      type: String,
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
    agentName: {
      type: String,
      required: true,
    },
    agentId: {
      type: String,
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
  },
});

// realtor requires current clients array, past clients array, license # (verification maybe)?
// client requires assigned realtor, client type, addtl. info

const Agent = mongoose.model("Agent", agentSchema);
export default Agent;
