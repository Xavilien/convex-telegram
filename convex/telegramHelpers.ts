"use node";
import TelegramBot from "node-telegram-bot-api";
import { action } from "./_generated/server";
import { v } from "convex/values";

const bot = new TelegramBot(process.env.TELEGRAM_BOT_TOKEN || "");

export const sendMessage = action({
  args: { chatId: v.number(), message: v.string() },
  handler: async (_, args) => {
    await bot.sendMessage(args.chatId, args.message);
    return "success";
  },
});