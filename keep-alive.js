// Simple keep-alive script
// Run this locally or on another free service to ping your Render app
import https from "https";

const APP_URL = "https://url-shortener-project-q3mz.onrender.com"; // Replace with your actual URL

function pingApp() {
  console.log(`Pinging ${APP_URL} at ${new Date().toISOString()}`);

  https
    .get(APP_URL, (res) => {
      console.log(`Status: ${res.statusCode}`);
    })
    .on("error", (err) => {
      console.error("Error:", err.message);
    });
}

// Ping every 10 minutes (600000 ms)
setInterval(pingApp, 10 * 60 * 1000);

// Ping immediately
pingApp();

console.log("Keep-alive script started. Pinging every 10 minutes...");
