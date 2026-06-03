import * as customCardService from "./customCard.service.js";

export const createCustomCard = async (req, res) => {
  try {
    const card = await customCardService.create(
      req.user._id,
      req.body
    );

    res.status(201).json({
      success: true,
      data: card,
    });
  } catch (error) {
    res.status(500).json({
      success: false,
      message: error.message,
    });
  }
};

export const getMyCards = async (req, res) => {
  try {
    const cards = await customCardService.getMine(
      req.user._id
    );

    res.status(200).json({
      success: true,
      data: cards,
    });
  } catch (error) {
    res.status(500).json({
      success: false,
      message: error.message,
    });
  }
};

export const updateCustomCard = async (req, res) => {
  try {
    const card = await customCardService.update(
      req.params.id,
      req.body
    );

    if (!card) {
      return res.status(404).json({
        success: false,
        message: "Card not found",
      });
    }

    res.status(200).json({
      success: true,
      data: card,
    });
  } catch (error) {
    res.status(500).json({
      success: false,
      message: error.message,
    });
  }
};

export const deleteCustomCard = async (req, res) => {
  try {
    const card = await customCardService.remove(
      req.params.id
    );

    if (!card) {
      return res.status(404).json({
        success: false,
        message: "Card not found",
      });
    }

    res.status(200).json({
      success: true,
      message: "Card deleted successfully",
    });
  } catch (error) {
    res.status(500).json({
      success: false,
      message: error.message,
    });
  }
};