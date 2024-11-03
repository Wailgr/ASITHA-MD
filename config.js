const fs = require('fs');
if (fs.existsSync('config.env')) require('dotenv').config({ path: './config.env' });

function convertToBool(text, fault = 'true') {
    return text === fault ? true : false;
}
module.exports = {
SESSION_ID: process.env.SESSION_ID || "𝙰𝚂𝙸𝚃𝙷𝙰-𝙼𝙳=vqBWULgI#Wt9PZN00dBTb7UhX34mKZjQcpElPrECwLSzeTEjTC1A",
GITHUB_USERNAME: process.env.GITHUB_USERNAME === undefined ? '': process.env.GITHUB_USERNAME,
GITHUB_AUTH_TOKEN: process.env.GITHUB_AUTH_TOKEN === undefined ? '': process.env.GITHUB_AUTH_TOKEN,
MONGODB: process.env.MONGODB || "mongodb+srv://nimafree:nimafree@nimafree.ae8e2.mongodb.net/"    
};
