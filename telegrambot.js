const TelegramBot = require('node-telegram-bot-api');
const express = require('express');
const ngrok = require('ngrok');

require('dotenv').config();

const token = process.env.TELEGRAM_BOT_TOKEN;
const bot = new TelegramBot(token, { polling: true });

const app = express();

bot.onText(/\/start/, (msg) => {
  bot.sendMessage(msg.chat.id, 'Welcome to Mondians TAP bot!');
});

// Add more bot logic here

const PORT = process.env.PORT || 3000;
app.listen(PORT, async () => {
  const url = await ngrok.connect(PORT);
  console.log(`Server is running on ${url}`);
});