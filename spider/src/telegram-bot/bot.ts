import "dotenv/config";
import fs from "fs";
import TelegramBot from "node-telegram-bot-api";

const token: string = process.env.BOT_TOKEN;

export class tBot {
  bot: TelegramBot;
  chatId: TelegramBot.ChatId = process.env.CHAT_ID;

  constructor() {
    this.bot = new TelegramBot(token, {polling: true});
    this.bot.on('message', (msg) => {
      console.log(msg);
      // this.chatId = msg.chat.id;
    });
  }

  sendMessage(imagePath?: string | null, message?: string | null) {
    this.bot.sendMessage(this.chatId, message)
    // return this.send(imagePath, message);
  }

  private sendPhoto(imagePath: string) {
    this.bot.sendPhoto(this.chatId, fs.createReadStream(imagePath)).then(res => {
      console.log('image sent successfully!');
    })
    .catch(err => {
      console.log('Error:', err);
    });
  }

  private sendTextMessage(message: string) {
    this.bot.sendMessage(this.chatId, message).then(res => {
      console.log('message sent successfully!');
    })
    .catch(err => {
      console.log('Error:', err);
    });
  }

  private send(imagePath?: string | null, message?: string | null) {
    console.log('send', imagePath, message);

    if (typeof imagePath === 'string' && typeof message === 'string') {
      this.sendTextMessage(message);
      this.sendPhoto(imagePath);
    }
    if (typeof imagePath === 'string' && typeof message === null) {
      this.bot.sendPhoto(this.chatId, fs.createReadStream(imagePath));
    }
    if (typeof imagePath === null && typeof message === 'string') {
      this.sendTextMessage(message);
    }
  }
}

