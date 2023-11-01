import Feedback from "../models/feedback";
import Product from "../models/product";
import User from "../models/user";
import Order from "../models/order";

export const getAll = async (req, res) => {
  try {
    const feedbacks = await Feedback.find();
    if (!feedbacks) {
      return res.status(400).json("Feedbacks not found!");
    }
    return res
      .status(200)
      .json({ message: "Get feedback success!", feedbacks });
  } catch (error) {
    return res.status(400).json(error.message);
  }
};
export const get = async (req, res) => {
  try {
    const productId = req.params.id;
    const feedbacks = await Feedback.find({ productId })
      .populate("userId", "name")
      .sort({ createdAt: -1 });

    if (!feedbacks) {
      return res.status(400).json("Không tìm thấy feedback");
    }
    return res
      .status(200)
      .json({ message: "Lấy feedback thành công!", feedbacks });
  } catch (error) {
    return res.status(400).json(error.message);
  }
};
export const create = async (req, res) => {
  try {
    const { userId, productId, orderId } = req.body;
    const user = await User.findById(userId);
    if (!user) {
      return res.status(400).json("Không tìm thấy người dùng");
    }
    const product = await Product.findById(productId);
    if (!product) {
      return res.status(400).json("Không tìm thấy sản phẩm");
    }
    // kiểm tra đơn hàng đã được giao chưa
    const orderById = await Order.findById(orderId);
    const isCheck = orderById.isDelivered;
    if (!isCheck) {
      return res
        .status(400)
        .json("Bạn chưa mua hàng hoặc chưa đơn hàng chưa được giao!");
    }
    // console.log('order check id: ',isCheck)

    const feedback = await Feedback.create(req.body);
    if (!feedback) {
      return res.status(400).json("Không tìm thấy đánh giá");
    }

    return res
      .status(200)
      .json({ message: "create feedback successly!", feedback });
  } catch (error) {
    return res.status(400).json(error.message);
  }
};
