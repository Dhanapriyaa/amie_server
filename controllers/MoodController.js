
import moodModel from "../models/Mood.js";

export const createItem = async (req, res) => {
  try {
      const newItem = new moodModel(req.body);
      await newItem.save();
      res.status(201).json(newItem);
  } catch (err) {
      res.status(400).json({ error: err.message });
  }
};