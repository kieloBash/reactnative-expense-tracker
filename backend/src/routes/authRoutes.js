import express from "express";
import User from "../models/User.js";
import jwt from "jsonwebtoken";

const router = express.Router();

const generateToken = (userId) => {
  return jwt.sign({ userId }, process.env.JWT_SECRET, { expiresIn: "1d" });
};

router.post("/register", async (req, res) => {
  try {
    console.log("REGISTER");
    const { email, username, password } = req.body;

    if (!email || !username || !password)
      return res.status(400).json({ message: "All fields are required" });

    if (password.length < 6) {
      return res
        .status(400)
        .json({ message: "Password should be at least 6 characters long" });
    }

    // check if user already exists
    const existingUser = await User.findOne({ $or: [{ email }, { username }] });

    if (existingUser) {
      return res.status(400).json({ message: "User already existing" });
    }

    const profileImage = `https://api.dicebear.com/9.x/notionists-neutral/svg?seed=${username}`;

    const user = new User({
      email,
      username,
      password,
      profileImage,
    });

    await user.save();

    const token = generateToken(user._id);

    return res.status(201).json({
      token,
      user: {
        _id: user._id,
        username: user.username,
        email: user.email,
        profileImage: user.profileImage,
      },
    });
  } catch (error) {
    console.log("An error occured during register: ", error);
    return res.status(500).json({ message: "Internal server error!" });
  }
});
router.post("/login", async (req, res) => {
  try {
    console.log("LOGIN");
    const { username, password } = req.body;
    console.log({ username, password });

    if (!username || !password)
      return res.status(400).json({ message: "All fields are required" });

    const existingUser = await User.findOne({ $or: [{ username }] });

    if (!existingUser)
      return res.status(400).json({ message: "Invalid credentials" });

    const isPasswordCorrect = await existingUser.comparePassword(password);

    if (!isPasswordCorrect)
      return res.status(400).json({ message: "Invalid credentials" });

    const token = generateToken(existingUser._id);

    res.status(200).json({
      token,
      user: {
        _id: existingUser._id,
        username,
      },
    });
  } catch (error) {
    console.log("An error occured during login: ", error);
    return res.status(500).json({ message: "Internal server error!" });
  }
});

export default router;
