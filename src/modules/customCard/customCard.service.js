import CustomCard from "../../models/customCard.model.js";

export const create = async (userId, data) => {
  return await CustomCard.create({
    user: userId,
    ...data,
  });
};

export const getMine = async (userId) => {
  return await CustomCard.find({ user: userId });
};

export const update = async (id, data) => {
  return await CustomCard.findByIdAndUpdate(id, data, {
    new: true,
  });
};

export const remove = async (id) => {
  return await CustomCard.findByIdAndDelete(id);
};