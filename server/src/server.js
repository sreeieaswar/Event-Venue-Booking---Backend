const app = require("./app");
const connectDB = require("./config/db");
const env = require("./config/env");

connectDB().then(() => {
  app.listen(env.port, () => {
    console.log(`API running on port ${env.port}`);
  });
});

