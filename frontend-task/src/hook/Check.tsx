import { configKeys } from "../util/enums";

export const Check = (): string | boolean => {
  let token = localStorage.getItem(configKeys.AUTH_TOKEN);
  return token ? token : false;
};