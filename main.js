const discord = require('discord.js'); //Define the discord.js module
const client = new discord.Client(); //Creating discord.js client (constructor)
require('discord-buttons')(client);
const { MessageButton, MessageActionRow } = require('discord-buttons')


client.on('message', async message => {
  if(message.content === "test"){
  const button = new MessageButton()
  .setLabel("test")
  .setStyle("green")
  .setID("btn1")

  message.channel.send("test components", button)
  }
})

client.on('clickButton', async (button) => {
  if(button.id === "btn1"){
    await button.reply.defer()
    await button.message.channel.send("button green")
  }
})


client.login('Your Token')