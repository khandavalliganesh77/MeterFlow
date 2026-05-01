import razorpay from "../config/razorpay.js";

export const createOrder = async (req, res) => {
  try {
    const { amount } = req.body;

    const order = await razorpay.orders.create({
      amount: amount * 100, // paise
      currency: "INR",
      receipt: "receipt_1"
    });

    res.json(order);

  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};