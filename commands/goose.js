module.exports = {
    name: 'goose',
    description: "this is a goose command",
    execute(client, message, args, Discord){

        if(message.member.roles.cache.has('851107722878517288')){
            message.channel.send('Meeuwis');
        } else {
            message.channel.send('Je hebt niet de goeie rollen');
        }

    }
}