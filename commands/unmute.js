module.exports = {
    name: 'unmute',
    description: "This unmutes a member",
    aliases: ['um'],
    execute(client, message, args, Discord) {
        if (message.member.roles.cache.has('851107722878517288')) {
            const target = message.mentions.users.first();
            if (target) {
                let mainRole = message.guild.roles.cache.find(role => role.name === 'JA');
                let muteRole = message.guild.roles.cache.find(role => role.name === 'MUTE');

                let memberTarget = message.guild.members.cache.get(target.id);

                memberTarget.roles.remove(muteRole.id);
                memberTarget.roles.add(mainRole.id);
                message.channel.send(`<@${memberTarget.user.id}> is geunmute`);
            } else {
                message.channel.send('We konden die persoon niet vinden!');
            }
        } else {
            message.channel.send('Je hebt niet de goede rollen');
        }
    }
}