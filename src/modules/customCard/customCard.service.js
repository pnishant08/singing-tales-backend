import CustomCard from "./customCard.model.js";

export const create = (userId, data) => {
  return CustomCard.create({ user: userId, ...data });
};

export const getMine = (userId) => {
  return CustomCard.find({ user: userId });
};

export const update = (id, data) => {
  return CustomCard.findByIdAndUpdate(id, data, { new: true });
};

export const remove = (id) => {
  return CustomCard.findByIdAndDelete(id);
};