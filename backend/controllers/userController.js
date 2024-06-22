import User from '../models/user.js';

export const addUser = async (req, res) => {
    const { username, email, dateOfBirth } = req.body;

    try {
        const newUser = new User({ username, email, dateOfBirth });
        await newUser.save();
        res.status(201).json(newUser);
    } catch (error) {
        res.status(400).json({ message: error.message });
    }
};
