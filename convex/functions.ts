import { httpAction } from "./_generated/server";
import { api } from "./_generated/api";

export const message = httpAction(async (ctx, request) => {
  const req = await request.json();

  if (req) {
    const message = req.message;
    const text = message.text;
    const chatId = message.from.id;

    await ctx.runAction(api.telegramHelpers.sendMessage, {chatId: chatId, message: text});
  }

  return new Response(null, {
    status: 200,
  });
})