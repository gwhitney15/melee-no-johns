const discord = require("discord.js");
require("discord-reply");
const client = new discord.Client();
require("dotenv").config("/.env");
const token = process.env.SECRET_TOKEN;
client.on("ready", () => {
  console.log(client.user.tag);
});

client.on("message", async (message) => {
  if (message.content.startsWith("!nojohns")) {
    message.lineReply(random_item(johnArray));
  }
});

client.login(token);

johnArray = [
  "I only got two hours of sleep last night.",
  "I woke up late for pools.",
  "My thumb sprained during game 2.",
  "You just spammed overpowered moves.",
  "I was playing worse because Jupiter is in retrograde.",
  "Your controller has a turbo button, that's cheating.",
  "Your box SDI is the only reason you won.",
  "My smartfridge forgot to order energy drinks, I didn't have caffeine before bracket.",
  "I was playing with a broken controller.",
  "I forgot to plug my controller in.",
  "Pikachu destroys my character. - KcBlue",
  "My girlfriend just sent me a breakup text.",
  "I was playing Street Fighter 6 all day.",
  "The ledgedash goblins didn't accept my sacrifice today.",
  "My CRT electrocuted me, I was playing shaken.",
  "The pharmacy was out of adderall.",
  "My controller is covered in grease.",
  "Hbox broke this CRT before we sat down to play.",
  "This TV has lag.",
  "This is an old version of UCF.",
  "My C-stick fell off in the middle of that combo.",
  "My netplay setup feels different than CRT.",
  "It always takes me so long to adjust to CRT.",
  "Mang0 said this matchup is 70-30.",
  "Leffen loses to this character all the time.",
  "You're just a netplay warrior.",
  "You're using cheater moves.",
  "I'm not warmed up yet.",
  "Jigglypuff. - Hbox",
  "I couldn't hear the game audio over my crying.",
  "I made some crucial mistakes.",
  "I need to learn how to edgeguard better.",
  "Your counterpicks worked in your favor.",
  "I need to work on my punishes.",
  "You capitalized on every mistake I made.",
  "You outplayed me in every aspect. - nobody ever",
  "You're definitely one of the top players.",
  "I'm just a mid-tier main.",
  "Melee is a bad game anyway.",
  "I'm just a casual player.",
  "I forgot to turn rumble off.",
  "Someone was yelling in my ear.",
  "The bees outside my window kept me up all night.",
  "I tried too hard to be Mang0.",
];

function random_item(johnArray) {
  return johnArray[Math.floor(Math.random() * johnArray.length)];
}
