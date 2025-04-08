import express from 'express'
import { createItem } from '../controllers/MoodController.js';

const routerMood = express.Router();

routerMood.post("/happy",createItem)


export default routerMood
