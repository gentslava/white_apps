import { logger } from "./src/logger";
import spider from "./src/index";

try {
  spider();
} catch (e) {
  logger(e);
  logger('Голосование остановлено');
}