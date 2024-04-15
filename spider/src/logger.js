import { tBot } from './telegram-bot/bot';

const bot = new tBot();

export const logger = (message) => {
  console.log(message);
  const serializedMessage = typeof message === 'object' ? JSON.stringify(message) : message;
  bot.sendMessage(null, serializedMessage);
};
