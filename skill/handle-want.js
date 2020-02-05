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
        massage_to_confirm: {
          type: "text",
          text: `What do you want to ${context.confirmed.verb_text}?`
        }
      }
     // image: {
     // }
    }
  }
  async finish(bot, event, context){
    let message = {
      type: "text",
      text: `I wanna ${context.confirmed.verb_type} a ${context.confirmed.word}`
    }

    await bot.reply(message);
  }
 // async finish(bot, event, context){
 //   let message = {
 //     type: "text",
 //     text: `I wanna ${context.comfirmed.verb_type.data} ${context.comfirmed.word}`
 //   }

 //   await bot.reply(message)
 // }
}
