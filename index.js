'use strict';
const packagejson = require('./package.json')
console.log(`using EZDiscordJS version: ${packagejson.version} free`)
const DiscordJS = require('discord.js');
const DiscordButton = require('discord-buttons');
module.exports = {
    EmbedBuilder: require('./builders/Embed'),
    SendMessageInChannel: function (channel, content) {
        if (!channel) throw new TypeError("Please provide channel");
        if (!content) throw new TypeError("Please provide content for the message.");
        channel.send(content)
    },
    Start: require('./functions/start'),
    CreateButton: async function() {

    }





}