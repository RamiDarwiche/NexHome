export type Client = {
  auth0Id: string;
  email: string;
  profileCreated: boolean;
  agentName: string;
  agentId: string;
  fName: string;
  lName: string;
  address: string;
  city: string;
  state: string;
  zip: string;
  role: string;
  phone: string;
};

export type Agent = {
  _id: string;
  fName: string;
  disabled?: boolean;
  lName: string;
  address: string;
  zip: string;
  city: string;
  state: string;
  role: string;
  phone: string;
  profileCreated: boolean;
  clients: Client[];
};
