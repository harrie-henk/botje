module.exports = {
    name: 'kick',
    description: "this is a kick command",
    execute(client, message, args){
        if(message.member.roles.cache.has('851107722878517288')){
        const member = message.mentions.users.first();
        if(member){
            const memberTargert = message.guild.members.cache.get(member.id);
            memberTargert.kick();
            message.channel.send("De persoon is gekicked")
        }else{
            message.channel.send('Je kan die persoon niet kicken');
        }
        }else {
            message.channel.send('Je hebt niet de goede rollen');
        } 
    }
}