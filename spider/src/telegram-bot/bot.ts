import "dotenv/config";
import fs from "fs";
import TelegramBot from "node-telegram-bot-api";


const token: string = process.env.BOT_TOKEN;

const bot = new TelegramBot(token, {polling: true});

let chatId: number = 685732071;


bot.on('message', (msg) => {
  console.log(msg);
  chatId = msg.chat.id;
});

export class tBot { 

  sendMessage(imagePath?: string | null, message?: string | null){ 
    return send(imagePath, message);
  }
} 


function send(imagePath?: string | null, message?: string | null) {
  if (typeof imagePath === 'string' && typeof message === 'string') {
    sendTextMessage(message);
    sendPhoto(imagePath);

  }
  if (typeof imagePath === 'string' && typeof message === null) {
    bot.sendPhoto(chatId, fs.createReadStream(imagePath));
  }
  if (typeof imagePath === null && typeof message === 'string') {
    sendTextMessage(message);
  }

}

function sendPhoto(imagePath: string) {
  bot.sendPhoto(chatId, fs.createReadStream(imagePath)).then(res => {
    console.log('image sent successfully!');
  })
  .catch(err => {
    console.log('Error:', err);
  });
}

function sendTextMessage(message: string) {
  bot.sendMessage(chatId, message).then(res => {
    console.log('message sent successfully!');
  })
  .catch(err => {
    console.log('Error:', err);
  });
}
