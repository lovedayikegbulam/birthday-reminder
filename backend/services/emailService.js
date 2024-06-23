import nodemailer from 'nodemailer';
import dotenv from 'dotenv';
import User from '../models/user.js';
import CONFIG from "../config/config.js"


const transporter = nodemailer.createTransport({
    service: 'gmail',
    auth: {
        user: CONFIG.EMAIL,
        pass: CONFIG.EMAIL_PASSWORD
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
                from:CONFIG.EMAIL,
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
