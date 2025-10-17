const express = require("express");
const app = express();
const cors = require("cors");
const { default: axios } = require("axios");
const port = 3000;
app.use(cors());

// Created user object
const user = {
  email: "nwazotachibuike@gmail.com",
  name: "Nwazota Chibuike Anthony",
  stack: ["nodejs", "express"],
};

// Endpoint to get user data
app.get("/me", async (req, res) => {
  try {
    const response = await axios.get("https://catfact.ninja/fact", {
      timeout: 5000,
    });
    const catFact = response.data.fact;

    // json response
    const Data = {
      status: "success",
      user: user,
      timestamp: new Date().toISOString(),
      fact: catFact,
    };
    res.status(200).json(Data);
    // Handling errors
  } catch (error) {
    console.error("Error fetching cat fact:", error.message);
    res.status(200).json({
      status: "success",
      user: user,
      timestamp: new Date().toISOString(),
      fact: "Cats are mysterious creatures — but our cat facts API seems to be asleep right now, please try again later.",
    });
  }
});
app.listen(port, () => {
  console.log(`Server is running at http://localhost:${port}`);
});
