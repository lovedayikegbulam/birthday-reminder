import User from '../models/user.js';

export const addUser = async (req, res) => {
    try {
        const { username, email, dateOfBirth } = req.body;
        const newUser = new User({
            username,
            email,
            dateOfBirth: new Date(dateOfBirth)
        });
        await newUser.save();
        res.status(201).send('User added successfully');
    } catch (error) {
        console.error('Error adding user:', error);
        res.status(400).send('Error adding user');
    }
};
