import * as service from "./user.service.js";
import { uploadOnCloudinary } from "../../utils/cloudinary.js";

export const getProfile = (req, res) => {
  res.json(req.user);
};

export const updateProfile = async (req, res) => {
  try {
    const updates = {
      name: req.body.name,
      username: req.body.username,
      phone: req.body.phone,
    };

    if (req.file) {
      const cloudinaryResponse = await uploadOnCloudinary(
        req.file.path,
        "singing-tales/users"
      );

      if (!cloudinaryResponse) {
        return res.status(500).json({ error: "Avatar upload failed" });
      }

      updates.avatar = cloudinaryResponse.secure_url;
      updates.avatarPublicId = cloudinaryResponse.public_id;
    }

    const user = await service.updateProfileService(req.user._id, updates);
    res.json(user);
  } catch (e) {
    res.status(500).json({ error: e.message });
  }
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
