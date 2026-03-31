import User from "../../models/user.model.js";

export const updateProfileService = async (userId, data) => {
  return await User.findByIdAndUpdate(userId, data, { new: true });
};

export const addAddressService = async (userId, address) => {
  const user = await User.findById(userId);

  user.addresses.push(address);
  await user.save();

  return user;
};

export const deleteAddressService = async (userId, addressId) => {
  const user = await User.findById(userId);

  user.addresses = user.addresses.filter(
    (addr) => addr._id.toString() !== addressId
  );

  await user.save();

  return user;
};