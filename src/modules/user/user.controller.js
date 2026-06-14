import * as service from "./user.service.js";

export const getProfile = (req, res) => {
  res.json(req.user);
};

export const updateProfile = async (req, res) => {
  const updates = {
    name: req.body.name,
    username: req.body.username,
    phone: req.body.phone,
  };
  if (req.file) {
    updates.avatar = `/uploads/${req.file.filename}`;
  }
  const user = await service.updateProfileService(req.user._id, updates);
  console.log(user);
  res.json(user);
};

export const addAddress = async (req, res) => {
  const user = await service.addAddressService(req.user._id, req.body);
  res.json(user);
};

export const deleteAddress = async (req, res) => {
  const user = await service.deleteAddressService(
    req.user._id,
    req.params.id
  );
  res.json(user);
};