module.exports = {
    name: 'embed',
    description: "this is a ping command",
    execute(client, message, args, Discord) {
        const newEmbed = new Discord.MessageEmbed()
        .setColor('#00FFFF')
        .setTitle('Goose')
        .setURL('https://i.imgur.com/AD3MbBi.jpeg')
        .setDescription('Gans en Kat')
        .addFields(
            {name: 'Kat', value: 'Cute'},
            {name: 'Goose', value: 'Goose'}
            
        )
        .setImage('https://static.toiimg.com/photo/msid-67586673/67586673.jpg?3918697')
        .setFooter('Gans');
            
        message.channel.send(newEmbed);    
    }


}