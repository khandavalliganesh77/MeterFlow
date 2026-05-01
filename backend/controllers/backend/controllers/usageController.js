import Usage from "../models/Usage.js";

export const getUsage = async (req, res) => {
  try {
    const usage = await Usage.find().sort({ createdAt: -1 });

    res.json(usage);

  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};