const {Client} = require("discord.js");
const {token} = require("./config.json");

// intialize our client
const client = new Client({intents: []});

// bot log in
client.login(token);

// 
