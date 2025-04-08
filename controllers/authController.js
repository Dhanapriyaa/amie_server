import User from "../models/User.js";
import jwt from 'jsonwebtoken'
import bcrypt from 'bcryptjs'


export const signup = async (req, res) => {
  try {
    const { name, email, password } = req.body;// reciving the data from client

    let user = await User.findOne({ email });  // handling duplicates
    if (user) return res.status(400).json({ msg: "User already exists" });

    const hashedPassword = await bcrypt.hash(password, 10);  // encrypt 
    user = new User({ name, email, password: hashedPassword });

    await user.save();  // store in data base
    res.status(201).json({ msg: "User registered successfully" });
  } catch (error) {
    res.status(500).json({ msg: "Server Error" });
  }
};

export const login = async (req, res) => {
  try {
    const { email, password } = req.body;

    const user = await User.findOne({ email });
    if (!user) return res.status(400).json({ msg: "Invalid credentials" });

    const isMatch = await bcrypt.compare(password, user.password);
    if (!isMatch) return res.status(400).json({ msg: "Invalid credentials" });

    const token = jwt.sign({ id: user._id }, process.env.JWT_SECRET, { expiresIn: "1h" });
    res.json({ token ,msg:"login sucessfully"});
  } catch (error) {
    res.status(500).json({ msg: "Server Error" });
  }
};
