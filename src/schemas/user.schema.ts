import mongoose, { Schema } from "mongoose";

const userSchemas = new mongoose.Schema({
  name: String,
  age: String,
  address: String,
  email: String,
  passworld : String
});

const Users = mongoose.model("Users", userSchemas);

export default Users;
