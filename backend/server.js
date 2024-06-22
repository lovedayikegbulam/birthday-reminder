import express from 'express';
import mongoose from 'mongoose';
import bodyParser from 'body-parser';
import dotenv from 'dotenv';
import userRoutes from './routes/userRoutes.js';
import cron from 'cron';
import { sendBirthdayEmails } from './services/emailService.js';

dotenv.config();

const app = express();

app.use(bodyParser.json());
app.use('/api/users', userRoutes);

mongoose.connect(process.env.MONGO_URI, {
    useNewUrlParser: true,
    useUnifiedTopology: true
}).then(() => console.log('MongoDB connected'))
  .catch(err => console.log(err));

const CronJob = cron.CronJob;
const job = new CronJob('0 7 * * *', sendBirthdayEmails, null, true, 'America/Los_Angeles');
job.start();

const PORT = process.env.PORT || 5000;
app.listen(PORT, () => console.log(`Server running on port ${PORT}`));
