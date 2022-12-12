STEPS TO CREATE TELEGRAM BOT 
--------------------------------------------------

1 . we are going to use telegraf package from npm.
2 . intialize npm init.
3 . Now, because we are using telegraf package install npm i telegraf
4 . Create index.js file now 
5 . start downloading module syntax from document of telegraf . so here we are using common js module 
    e.g - const { Telegraf } = require('telegraf');
6 . Now , create bot object (e.g - const bot = new Telegraf(process.env.BOT_TOKEN);) but here it require bot token so what is bot token ?
Note - how get secrect token ?  - so diff api exopose diff type of ways to get token , using this secret token these api can identify who is user is .
NOw , for telegraf if you need token or api key (token or api key is same thing ),1. just open telegram and search for bot father 
                                                                                  2. if you want to learn more about bot father learn from google . 
                                                                                  3. write  /start it start giving you the intruction .
                                                                                  4. to create new bot type /newbot and press enter . 
                                                                                  It will ask for a bot name, give a bot name without a / , ex: coding_bot
                                                                                 * -> then it will ask for a username ending with bot, ex: code_exmaples_js_cpp_bot
                                                                                    * http://t.me/Laxus_coding_bot
                                                                                    */
                                                                                  5 . now it also give you the api token to use copy to your code.

7. Now , everything is set all you need to do with your bot you need to learn from doc . 

