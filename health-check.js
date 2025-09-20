// Add this to your server.js file
// Health check endpoint for faster wake-up

app.get("/health", (req, res) => {
  res.status(200).json({
    status: "OK",
    timestamp: new Date().toISOString(),
    uptime: process.uptime(),
  });
});

// Add this route before your other routes
