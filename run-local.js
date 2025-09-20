// Script to run the app locally with proper environment
process.env.NODE_ENV = "development";
process.env.BASE_URL = "http://localhost:3000";

import("./server.js");
