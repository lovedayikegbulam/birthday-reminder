# Birthday Reminder App

A simple Birthday Reminder app built with React, Node.js, Express, and MongoDB. It collects user data and sends birthday wishes via email at 7am on their birthday.

## Features

- User registration with validation
- Stores user data in MongoDB
- Sends birthday emails using Nodemailer
- Daily cron job at 7am
- Simple UI with a date picker

## Installation

1. **Clone the repository:**
    ```bash
    git clone https://github.com/lovedayikegbulam/birthday-reminder-app.git
    cd birthday-reminder-app
    ```

2. **Backend Setup:**
    ```bash
    cd backend
    npm install
    ```

    Create a `.env` file:
    ```plaintext
    EMAIL_USER=your-email@gmail.com
    EMAIL_PASS=your-email-password
    MONGODB_URI=mongodb://your-mongodb-uri
    PORT=5000
    ```

3. **Frontend Setup:**
    ```bash
    cd frontend
    npm install
    ```

4. **Run the Application:**

    Start the backend:
    ```bash
    cd backend
    npm start
    ```

    Start the frontend:
    ```bash
    cd frontend
    npm start
    ```

    Visit `http://localhost:3000`.

## Environment Variables

Set in `backend/.env`:

- `EMAIL_USER`: Your email address.
- `EMAIL_PASS`: Your email password.
- `MONGODB_URI`: URI of your MongoDB instance.
- `PORT`: Port number for the backend server.

## License

MIT License.
# Birthday Reminder App

A simple Birthday Reminder app built with React, Node.js, Express, and MongoDB. It collects user data and sends birthday wishes via email at 7am on their birthday.

## Features

- User registration with validation
- Stores user data in MongoDB
- Sends birthday emails using Nodemailer
- Daily cron job at 7am
- Simple UI with a date picker

## Installation

1. **Clone the repository:**
    ```bash
    git clone https://github.com/lovedayikegbulam/birthday-reminder-app.git
    cd birthday-reminder-app
    ```

2. **Backend Setup:**
    ```bash
    cd backend
    npm install
    ```

    Create a `.env` file:
    ```plaintext
    EMAIL_USER=your-email@gmail.com
    EMAIL_PASS=your-email-password
    MONGODB_URI=mongodb://your-mongodb-uri
    PORT=5000
    ```

3. **Frontend Setup:**
    ```bash
    cd frontend
    npm install
    ```

4. **Run the Application:**

    Start the backend:
    ```bash
    cd backend
    npm start
    ```

    Start the frontend:
    ```bash
    cd frontend
    npm start
    ```

    Visit `http://localhost:3000`.

## Environment Variables

Set in `backend/.env`:

- `EMAIL_USER`: Your email address.
- `EMAIL_PASS`: Your email password.
- `MONGODB_URI`: URI of your MongoDB instance.
- `PORT`: Port number for the backend server.

## License

MIT License.
