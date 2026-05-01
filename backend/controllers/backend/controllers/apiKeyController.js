import ApiKey from "../models/ApiKey.js";
import crypto from "crypto";

export const generateApiKey = async (req, res) => {
  try {
    const userId = req.userId; // from middleware

    // generate random key
    const apiKey = "sk_" + crypto.randomBytes(16).toString("hex");

    // save in DB
    const newKey = await ApiKey.create({
      userId,
      apiKey
    });

    res.status(201).json({
      message: "API Key generated successfully",
      apiKey: newKey.apiKey
    });

  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};
export const getApiKeys = async (req, res) => {
  try {
    const userId = req.userId;

    const keys = await ApiKey.find({ userId }).sort({ createdAt: -1 });

    res.json(keys);

  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};