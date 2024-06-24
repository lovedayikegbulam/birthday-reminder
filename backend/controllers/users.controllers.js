import User from '../models/users.models.js';
import { userSchema } from '../validators/users.validations.js';

export const addUser = async (req, res) => {
    try {
        const { error } = userSchema.validate(req.body);
        if (error) {
            return res.status(400).send(error.details[0].message);
        }

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
        res.status(500).send('Error adding user');
    }
};
