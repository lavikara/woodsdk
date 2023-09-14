import { post } from "../base";
import { popupBody } from "./types";

export const paymentPopup = (apiKey: string, body: popupBody, options?) => {
  return post(`/woodcore/payment`, body, apiKey, options);
};
