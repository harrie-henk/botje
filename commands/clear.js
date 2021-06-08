module.exports = {
    name: 'clear',
    description: "clear",
    async execute(client, message, args, Discord){
        if(message.member.roles.cache.has('851107722878517288')){
        if(!args[0]) return message.reply("Vul een geldig getal in");
        if(isNaN(args[0])) return message.reply("Vul wel een echt nummer in!");

        if(args[0] > 500) return message.reply("Je kan niet meer dan 500 berichten verwijderen");
        if(args[0] < 1) return message.reply("Dat wordt lastig")
        
        await message.channel.messages.fetch({limit: args[0]}).then(messages =>{
            message.channel.bulkDelete(messages);
        });
        } else {
            message.channel.send('Je hebt niet de goede rollen');
        }  
    }
}