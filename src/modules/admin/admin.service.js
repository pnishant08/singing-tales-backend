import User from "../../models/user.model.js";

export const getAllUsers = async () => {
  return await User.find().select("-password");
};

export const deleteUsers = async (id) => {
  return await User.findByIdAndDelete(id);
};