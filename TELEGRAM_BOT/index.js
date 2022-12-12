const { Telegraf } = require('telegraf');

/**
 * How to get the secret token for creating a bot ?
 * -> Open Telegram and search for BotFather 
 * -> To read instruction type /start and press enter
 * -> to create a new bot type /newbot and presss enter
 * -> It will ask for a bot name, give a bot name without a / , ex: coding_bot
 * -> then it will ask for a username ending with bot, ex: code_exmaples_js_cpp_bot
 * http://t.me/Laxus_coding_bot
 */

let talk  = " kasi hai basan sab thek, kam khya kar basan ";
let motivation  = "jo pani sa nahta hai vo kapada badalta hai , lakin jo pasena sa nahata hai vo takder badalta hai"
const bot  = new Telegraf('5567406380:AAFSu6vs05pCA9fJz5d95aSV4qWrn5PQCak')
let single = " sun ba akala hi marega tu";
let success  = "aba padh la na fir kyu chala raha hai phone gadha"
let fked  = "FKK OF KSHITZ"
bot.start(function (ctx){
    ctx.reply("WELCOME TO THE GREAT MOTIVATOR OF ALL TIME ");
    ctx.reply("TO SEE THE  MOTIVATION OF THE DAY JUST CLICK /motivation");
    ctx.reply("TO KNOW WHO MADE THIS click /whomadethis");
    ctx.reply("IF YOU NEED GF THEN CLICK /single");
    ctx.reply("WANT SUCCESS CLICK /success");
    ctx.reply("WANT TO GET FKED KSHITZ CLICK /fked ");
})
bot.command("local", ctx => ctx.replyWithPhoto({ source: "/cats/cat1.jpeg" }));
bot.command('kasan', (ctx) => ctx.reply(talk));
bot.command('fked', (ctx) => ctx.reply(fked));
bot.command('motivation' , (ctx) => ctx.reply(motivation));
bot.command('single', (ctx) => ctx.reply(single));
bot.command('success', (ctx) => ctx.reply(success));
bot.on('sticker', (ctx) => ctx.reply('👍'));
bot.command('whomadethis', (ctx) => ctx.reply("chad Hemant"));
bot.command("local", ctx => ctx.replyWithPhoto({ source: "/cats/cat1.jpeg" }));
bot.command("pipe", ctx =>
	ctx.replyWithPhoto({ url: "https://picsum.photos/200/300/?random" }),
);
bot.launch();                                                               // to launch the bot you have to use it 