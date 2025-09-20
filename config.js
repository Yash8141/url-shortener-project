// Configuration file for different environments
export const config = {
  development: {
    baseUrl: "http://localhost:3000",
    port: 3000,
    mongodbUri:
      "mongodb+srv://yashsolanki1622_db_user:Fguuuml5Lwcj1wsh@cluster0.iolebsr.mongodb.net/",
  },
  production: {
    baseUrl:
      process.env.BASE_URL || "https://url-shortener-project-q3mz.onrender.com",
    port: process.env.PORT || 3000,
    mongodbUri:
      process.env.MONGODB_URI ||
      "mongodb+srv://yashsolanki1622_db_user:Fguuuml5Lwcj1wsh@cluster0.iolebsr.mongodb.net/",
  },
};

export const getConfig = () => {
  const env = process.env.NODE_ENV || "development";
  return config[env];
};
