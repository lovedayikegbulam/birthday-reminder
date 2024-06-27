import express from "express";
import bodyParser from "body-parser";
import userRoutes from "./routes/users.routes.js";
import cron from "cron";
import CONFIG from "./config/config.js";
import connectToMongoDb from "./db/mongodb.js";
import cors from "cors";
import sendBirthdayEmails from './services/email.service.js';
const app = express();
const port = CONFIG.PORT || 5000;
const localhost = CONFIG.LOCAL_HOST || "localhost";

connectToMongoDb();

// List of allowed origins
const allowedOrigins = ["http://localhost:5000", "http://localhost:3000"];

// Configure CORS
const corsOptions = {
  origin: function (origin, callback) {
    // Check if the origin is in the allowedOrigins array
    if (allowedOrigins.indexOf(origin) !== -1 || !origin) {
      callback(null, true);
    } else {
      callback(new Error("Not allowed by CORS"));
    }
  },
  methods: "GET,POST,PUT,DELETE",
  allowedHeaders: "Content-Type,Authorization",
  optionsSuccessStatus: 200,
};

app.use(cors(corsOptions));
app.use(bodyParser.json());
app.use("/api/users", userRoutes);

const CronJob = cron.CronJob;
const job = new CronJob(
  "*/30 * * * *",
  sendBirthdayEmails,
  null,
  true,
  "America/Los_Angeles"
);
job.start();

app.listen(port, () => {
  console.log(`Server running at http://${localhost}:${port}/`);
});
