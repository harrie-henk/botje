const ms = require('ms');
module.exports = {
    name: 'mute',
    aliases: ['m', 'demp'],
    description: "This mutes a member",
    execute(client, message, args) {
        if (message.member.roles.cache.has('851107722878517288')) {
            const target = message.mentions.users.first();
            if (target) {

                let mainRole = message.guild.roles.cache.find(role => role.name === 'JA');
                let muteRole = message.guild.roles.cache.find(role => role.name === 'MUTE');

                let memberTarget = message.guild.members.cache.get(target.id);

                if (!args[1]) {
                    memberTarget.roles.remove(mainRole.id);
                    memberTarget.roles.add(muteRole.id);
                    message.channel.send(`<@${memberTarget.user.id}> is gemute`);
                    return
                }
                memberTarget.roles.remove(mainRole.id);
                memberTarget.roles.add(muteRole.id);
                message.channel.send(`<@${memberTarget.user.id}> is gemute voor ${ms(ms(args[1]))}`);

                setTimeout(function () {
                    memberTarget.roles.remove(muteRole.id);
                    memberTarget.roles.add(mainRole.id);
                }, ms(args[1]));
            } else {
                message.channel.send('We kunnen hem/haar niet vinden');
            }
        } else {
            message.channel.send('Je hebt niet de goede rollen');
        }
    }
}