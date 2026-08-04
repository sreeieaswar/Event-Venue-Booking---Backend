require("dotenv").config();

module.exports = {
  databaseUrl: process.env.DATABASE_URL || process.env.POSTGRES_URL || "",
  mongoUri: process.env.MONGO_URI || "mongodb://127.0.0.1:27017/dss_event_booking",
  jwtSecret: process.env.JWT_SECRET || "dev_secret_change_me",
  jwtExpiresIn: process.env.JWT_EXPIRES_IN || "7d",
  port: process.env.PORT || 5000,
  clientUrl: process.env.CLIENT_URL || "http://localhost:5173"
};
