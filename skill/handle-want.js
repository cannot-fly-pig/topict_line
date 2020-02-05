module.exports = class HandleWant{
  constructor() {
    this.required_parameter = {
      verb_type: {
        message_to_confirm: {
          type: "template",
          altText: "なにしたいの？",
          template: {
            type: "buttons",
            text: "なにしたいの？",
            actions: [
              {type:"postback", label:"see", data:"see"},
              {type:"postback", label:"buy", data:"buy"},
              {type:"postback", label:"get", data:"get"},
              {type:"postback", label:"go", data:"go"}
            ]
          }
        }
      },
      word: {
        massage_to_comfirm: {
          type: "text",
          text: "What are you want?"
        }
      },
     // image: {
     // }
    }
  }
  async finish(bot, event, context){
    let message = {
      type: "text",
      text: `I wanna ${context.comfirmed.type} ${context.comfirmed.word}`
    }

    await bot.reply(message)
  }
}
