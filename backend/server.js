import express from "express";
import bodyParser from "body-parser";
import userRoutes from "./routes/userRoutes.js";
import cron from "cron";
import CONFIG from "./config/config.js";
import connectToMongoDb from "./db/mongodb.js";
import cors from "cors";
import { sendBirthdayEmails } from "./services/emailService.js";

const app = express();
const port = CONFIG.PORT || 5000;
const localhost = CONFIG.LOCAL_HOST || "localhost";

app.use(cors);

connectToMongoDb();

app.use(bodyParser.json());
app.use("/api/users", userRoutes);

const CronJob = cron.CronJob;
const job = new CronJob(
  "0 7 * * *",
  sendBirthdayEmails,
  null,
  true,
  "America/Los_Angeles"
);
job.start();

app.listen(port, () => {
  console.log(`Server running at http://${localhost}:${port}/`);
});
