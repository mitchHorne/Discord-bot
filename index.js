require("dotenv").config(); //initialize dotenv
const { Client, Intents } = require("discord.js");

const client = new Client({
  intents: [
    Intents.FLAGS.GUILDS,
    Intents.FLAGS.GUILD_MESSAGES,
    Intents.FLAGS.DIRECT_MESSAGES,
  ],
});

client.on("ready", () => {
  console.log(`Logged in as ${client.user.tag}!`);
});

client.on("interactionCreate", async (interaction) => {
  console.log("Interaction");
  console.log(interaction);
  if (!interaction.isCommand()) return;

  if (interaction.commandName === "ping") {
    await interaction.reply("Pong!");
  }
});

client.on("messageCreate", async (message) => {
  if (message.author.bot) {
    console.log("This is a bot message - Fuck you bot. Discarding...");
    console.log(message);
    return;
  }

  console.log("* * * * * New Aweomse Message * * * * *");
  console.log(message);

  if (message.content.toLowerCase() === "hello")
    message.channel.send("Good juju");
  else
    message.channel.send(
      "I only say 'good juju'. Don't get your hopes up puny human"
    );
});

client.login(process.env.CLIENT_TOKEN);
