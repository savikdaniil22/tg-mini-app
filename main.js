import {Telegraf, Markup } from 'telegraf'
import {message} from 'telegraf/filters'


const token = '6502652050:AAEUwSmUEcLwFU3uD01OyEak-mzu5VixYKs'
const webAppUrl = 'https://angular-tg-app-45a4b.web.app'

const bot = new Telegraf(token)

bot.command('start',(ctx)=>{
  ctx.reply(
    'Добро пожаловать! Нажмите на кнопку ниже, чтобы запустить приложение',
    Markup.keyboard([Markup.button.webApp('Отправить сообщение',`${webAppUrl}/feedback`)])
  )
})

bot.on(message('web_app_data'),async ctx=>{
  const data = ctx.webAppData.data.json()
  ctx.reply(`Ваше сообщение: ${data?.feedback}` ?? 'empty message')
})

bot.launch()