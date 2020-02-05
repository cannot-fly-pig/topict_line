// -----------------------------------------------------------------------------
// モジュールのインポート
const express = require("express")
const line = require("@line/bot-sdk") // Messaging APIのSDKをインポート

// -----------------------------------------------------------------------------
// パラメータ設定
const line_config = {
    channelAccessToken: "9DRIPIKSnTrrZdC2Y2hhOaUuc4EWm5vOQlIj6dlp572v1OPbwyFX55ToiH0Av86aMMMBIdM30GbfjQAkZyFd2Ja0RLx6dv4/3ioaT2FESszmPiJdgMoMukDJJb4S9/0BR+TUu5A0cIDbGgj5fPezmQdB04t89/1O/w1cDnyilFU=",
    channelSecret: "d9d4d0d7d5a21bccfe35edd3d217e9d4"

}

const app = express()
const bot = new line.Client(line_config)

// -----------------------------------------------------------------------------
// Webサーバー設定
app.listen(process.env.PORT || 3000)


// -----------------------------------------------------------------------------
// ルーター設定
app.post('/bot/webhook', line.middleware(line_config), (req, res, next) => {
    res.sendStatus(200)
    req.body.events.forEach( (event) => {
      bot.replyMessage(event.replyToken,{
        type: "text",
        text: "Hello, World!",
      })
    })
})
