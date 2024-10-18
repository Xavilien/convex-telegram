# convex-telegram

A simple telegram bot built off the convex backend.

1. Go to telegram.org and create a new bot (which can be easily done using [BotFather](https://telegram.me/BotFather).
2. Clone the repository and run `bun install`.
3. Run `bunx convex dev` to configure the convex project.
4. Get the telegram bot token and save it as `TELEGRAM_BOT_TOKEN` in a file called .env.local, as well as on the convex deployment at [convex.dev](https://convex.dev).
5. Construct the following url: https://api.telegram.org/bot{token}/setWebhook?url={url}/message, where `token` is the telegram bot token and `url` is the HTTP Actions URL of the convex deployment that can be found in settings.
6. Paste the url above into the browser and hit enter. You should see a response that says `{"ok":true,"result":true,"description":"Webhook was set"}`.
7. The starter code should now echo back the message you send to the bot. You can modify the code to do whatever you want with the message.