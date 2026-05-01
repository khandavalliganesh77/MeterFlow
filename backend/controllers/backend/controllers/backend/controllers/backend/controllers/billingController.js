import Usage from "../models/Usage.js";

export const getBilling = async (req, res) => {
  try {
    const usage = await Usage.find();

    const totalRequests = usage.length;

    const pricePerRequest = 1;
    const amount = totalRequests * pricePerRequest;

    res.json({
      totalRequests,
      amount
    });

  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};