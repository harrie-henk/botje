module.exports = {
    name: 'ban',
    description: "this is a ban command",
    execute(client, message, args, Discord){
        if(message.member.roles.cache.has('851107722878517288')){
        const member = message.mentions.users.first();
        if(member){
            const memberTargert = message.guild.members.cache.get(member.id);
            memberTargert.ban();
            message.channel.send("De persoon is gebanned")
        }else{
            message.channel.send('Je kan die persoon niet bannen');
        }
        }else {
            message.channel.send('Je hebt niet de goede rollen');
        } 
    }
}