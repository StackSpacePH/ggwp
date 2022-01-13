import express from 'express';
import mongoose from 'mongoose';
import user from '../models/user.model.js';

const router = express.Router();

export const getAllUserPages = (req, res) => {
    res.send("Here are all the pages you're looking for.")
}

export const getUserPage = async (req, res) => {
    const { userslug } = req.params;

    try {
        const singlePage = await user.findOne({userslug: userslug});
        res.status(200).json(singlePage);
    } catch (error) {
        res.status(404).json({ message: error.message });
    }
}

export const addUserPage = async (req, res) => {
    var { username, usertag, userslug, isVerified, pfp, cover, bio, game_links, current_playing } = req.body;

    const createNewUserPage = new user({
        username, usertag, userslug, isVerified, pfp, cover, bio, game_links, current_playing
    });

    try {
        await createNewUserPage.save();
        res.status(201).json(createNewUserPage);
    } catch (error) {
        res.status(409).json({ message: error.message })
    }
}

export const removeUserPage = (req, res) => {
    // TODO: Remove User Page
}

export default router;