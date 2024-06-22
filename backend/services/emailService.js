import nodemailer from 'nodemailer';
import dotenv from 'dotenv';
import User from '../models/user.js';

dotenv.config();

const transporter = nodemailer.createTransport({
    service: 'gmail',
    auth: {
        user: process.env.EMAIL,
        pass: process.env.EMAIL_PASSWORD
    }
});

export const sendBirthdayEmails = async () => {
    try {
        const today = new Date();
        const users = await User.find({
            dateOfBirth: {
                $month: today.getMonth() + 1,
                $day: today.getDate()
            }
        });

        users.forEach(user => {
            const mailOptions = {
                from: process.env.EMAIL,
                to: user.email,
                subject: 'Happy Birthday!',
                text: `Happy Birthday, ${user.username}! Wishing you a wonderful day!`
            };

            transporter.sendMail(mailOptions, (error, info) => {
                if (error) {
                    console.log(`Error sending email to ${user.email}: `, error);
                } else {
                    console.log(`Email sent to ${user.email}: `, info.response);
                }
            });
        });
    } catch (error) {
        console.log('Error in sending birthday emails: ', error);
    }
};
