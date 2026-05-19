require("dotenv").config();

const express = require("express");

const prisma = require("./config/prisma");

const schoolRoute = require("./Routes/schoolRoutes");

const app = express();

app.use(express.json());

app.use("/api", schoolRoute);

const PORT = process.env.PORT || 3000;

const startServer = async () => {

  try {

    await prisma.$connect();

    app.listen(PORT, () => {
      console.log(`🚀 School Manage API running on port ${PORT}`);
    });

  } catch (err) {

    console.error("❌ Server startup failed:", err.message);

    process.exit(1);

  }

};

startServer();