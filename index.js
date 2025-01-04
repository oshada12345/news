// Import required modules
const express = require("express");
const DYXT_NEWS = require("@dark-yasiya/news-scrap");

// Create an instance of Express
const app = express();
const port = 3000;

// Create an instance of the news scraper
const news = new DYXT_NEWS();

// API Endpoint to fetch Ada.lk news
app.get("/api/news/ada", async (req, res) => {
  try {
    const result = await news.hiru();
    res.status(200).json({
      success: true,
      source: "Ada.lk",
      data: result,
    });
  } catch (error) {
    res.status(500).json({
      success: false,
      message: "Failed to fetch news from Ada.lk",
      error: error.message,
    });
  }
});
//api end point bbc
app.get("api/news/bbc", async (req, res) => {
  try {
    const result = await news.ada();
    res.status(200).json({
      success: true,
      source: "bbc.lk",
      data: result,
    });
  } catch (error) {
    res.status(500).json({
      success: false,
      message: "Failed to fetch news from Ada.lk",
      error: error.message,
    });
  }
});

// API Endpoint to fetch Derana news (if available)
app.get("/api/news/derana", async (req, res) => {
  try {
    const result = await news.derana();
    res.status(200).json({
      success: true,
      source: "Derana",
      data: result,
    });
  } catch (error) {
    res.status(500).json({
      success: false,
      message: "Failed to fetch news from Derana",
      error: error.message,
    });
  }
});
//bbc
app.get("/api/news/bbc", async (req, res) => {
  try {
    const result = await news.hiru();
    res.status(200).json({
      success: true,
      source: "Derana",
      data: result,
    });
  } catch (error) {
    res.status(500).json({
      success: false,
      message: "Failed to fetch news from Derana",
      error: error.message,
    });
  }
});
// Default route
app.get("/", (req, res) => {
  res.send(
    "Welcome to the News API! Use /api/news/ada or /api/news/derana to fetch news.",
  );
});

// Start the server
app.listen(port, () => {
  console.log(`Server is running on http://localhost:${port}`);
});
