import nodemailer from 'nodemailer';
import User from '../models/users.models.js';
import CONFIG from "../config/config.js"

const transporter = nodemailer.createTransport({
    service: 'gmail',
    auth: {
        user: CONFIG.EMAIL,
        pass: CONFIG.EMAIL_PASSWORD
    }
});

const sendBirthdayEmails = async () => {
    try {
        const today = new Date();
        const todayMonth = today.getMonth() + 1; // Months are zero-indexed
        const todayDay = today.getDate();

        const users = await User.find({
            $expr: {
                $and: [
                    { $eq: [{ $month: '$dateOfBirth' }, todayMonth] },
                    { $eq: [{ $dayOfMonth: '$dateOfBirth' }, todayDay] }
                ]
            }
        });

        for (const user of users) {
            const mailOptions = {
                from: process.env.EMAIL_USER,
                to: user.email,
                subject: 'Happy Birthday!',
                text: `Dear ${user.username},\n\nWe wish you a very Happy Birthday!\n\nBest Regards,\nFoundeet`
            };

            await transporter.sendMail(mailOptions);
            console.log(`Birthday email sent to ${user.email}`);
        }
    } catch (error) {
        console.error('Error sending birthday emails:', error);
    }
};

export default sendBirthdayEmails;
