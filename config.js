const fs = require('fs');
if (fs.existsSync('config.env')) require('dotenv').config({ path: './config.env' });

function convertToBool(text, fault = 'true') {
    return text === fault ? true : false;
}
module.exports = {
SESSION_ID: process.env.SESSION_ID || "𝙰𝚂𝙸𝚃𝙷𝙰-𝙼𝙳=fuBwwYjQ#0lkheVDjdDrnoCrb_QATf30QcKUINZ9Fb04sNBkwypA",
GITHUB_USERNAME: process.env.GITHUB_USERNAME === undefined ? '': process.env.GITHUB_USERNAME,
GITHUB_AUTH_TOKEN: process.env.GITHUB_AUTH_TOKEN === undefined ? '': process.env.GITHUB_AUTH_TOKEN,
MONGODB: process.env.MONGODB || "mongodb+srv://nimafree:nimafree@nimafree.ae8e2.mongodb.net/"    
};
