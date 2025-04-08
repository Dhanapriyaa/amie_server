/*import mongoose from "mongoose";

const moodSchema = mongoose.Schema({
    happy:{type:Number},
})

const moodModel=mongoose.model("moods",moodSchema)

export default moodModel*/

import mongoose from "mongoose";

const moodSchema = new mongoose.Schema({
    happy: { type: Number, default: 0 },
    neutral: { type: Number, default: 0 },
    sad: { type: Number, default: 0 },
    date: { type: Date, default: Date.now }
});

const MoodModel = mongoose.model("Mood", moodSchema);

export default MoodModel;
