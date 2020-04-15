const Telegraf = require('telegraf')

const bot = new Telegraf('add_your_token_here')

bot.on('new_chat_members', (ctx) => {
    var userchatid = ctx.from.id;
    ctx.restrictChatMember(userchatid);
});

bot.launch()