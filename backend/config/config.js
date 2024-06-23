import dotenv from 'dotenv'
dotenv.config()

const config =  {
    PORT: process.env.PORT,
    MONGODB_URI: process.env.MONGODB_URI,
    LOCAL_HOST: process.env.LOCAL_HOST,
    EMAIL: process.env.EMAIL,
    EMAIL_PASSWORD: process.env.EMAIL_PASSWORD
}

export default config;