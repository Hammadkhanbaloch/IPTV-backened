 const env = {
	port: process.env.PORT || 4444,
	nodeEnv: process.env.NODE_ENV || "dev",
	mongodbUri: process.env.DB_URI || "mongodb://localhost:27017/IPTV_database",
	jwtSecret: process.env.JWT_SECRET || "my_secret",
};
export default env;