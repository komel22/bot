const Telegraf = require('telegraf')

const bot = new Telegraf(process.env.1212421676:AAEwy_L6uNfBA7r8bZEhlti1SFRepHnT_IQ)
bot.start((ctx) => ctx.reply('Welcome!'))
bot.help((ctx) => ctx.reply('Send me a sticker'))
bot.on('sticker', (ctx) => ctx.reply(''))
bot.hears('hi', (ctx) => ctx.reply('Hey there'))
bot.launch()