import { logger } from "./src/logger";
import spider from "./src/index";

try {
  logger('Контейнер поднят');
  spider();
} catch (e) {
  logger(e);
  logger('Голосование остановлено');
}