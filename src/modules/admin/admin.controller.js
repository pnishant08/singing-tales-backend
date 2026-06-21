import * as UserService from "./admin.service.js";

export const getAllUsers = async (req, res) => {
  try {
    const users = await UserService.getAllUsers();

    res.status(200).json(users);
  } catch (e) {
    res.status(500).json({
      error: e.message,
    });
  }
};

export const deleteUsers = async (req, res) => {
  try {
    await UserService.deleteUsers(req.params.id);

    res.status(200).json({
      message: "User deleted successfully",
    });
  } catch (e) {
    res.status(500).json({
      error: e.message,
    });
  }
};