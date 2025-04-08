import mongoose from "mongoose";
/*
const userSchema = new mongoose.Schema({
  name: { type: String, required: true },
  email: { type: String, required: true, unique: true },
  password: { type: String, required: true },
});

const User = mongoose.model("User", userSchema); */



const moodSchema = new mongoose.Schema({
  date: { type: Date, default: Date.now },
  mood: { type: String, required: true },
  advice: { type: String, required: true },
});

const userSchema = new mongoose.Schema({
  name: { type: String, required: true },
  email: { type: String, required: true, unique: true },
  password: { type: String, required: true },
  moods: [moodSchema], // Array to store daily moods
});



const User= mongoose.model("User", userSchema);

export default User