const express = require("express");
const app = express();
app.use(express.urlencoded({ extended: true }));
app.use(express.json());
const discord = require("discord.js");
require("discord-reply");
const client = new discord.Client();
require("dotenv").config();
const token = process.env.SECRET_TOKEN;
client.on("ready", () => {
  console.log(client.user.tag);
});

client.on("message", async (message) => {
  var messagetxt = message.content.toUpperCase();
  switch (messagetxt) {
    case "!NOJOHNS":
      message.lineReply(random_item(johnArray));
      break;
    case "!KCBLUE":
      message.channel.send({ files: ["./Video/kcblue.mp4"] });
      break;
    case "!REESCH":
      message.lineReply(reesch);
      break;
    case "!ITSGDUBS":
      message.lineReply(itsgdubs);
      break;
    case "!GDUBS":
      message.lineReply(itsgdubs);
      break;
    case "!FALCON":
      message.lineReply(random_item(falcon));
      break;
  }
});

client.login(token);

var falcon = ["PUNCH!!!!!!!!!!", "Show me your moves!"];
var itsgdubs =
  "The best bad player to ever do it - and your friendly neighborhood bot developer :)";
var reesch = "That's COACH Reesch to you.";
var KCBLUE = "./Video/kcblue.mp4";
var johnArray = [
  "I only got two hours of sleep last night.",
  "I woke up late for pools.",
  "I was playing worse because Jupiter is in retrograde.",
  "Your controller has a turbo button, that's cheating.",
  "Your box SDI is the only reason you won.",
  "My smartfridge forgot to order energy drinks, I didn't have caffeine before bracket.",
  "My controller is trash.",
  "Pikachu destroys my character. - KcBlue",
  "My girlfriend just sent me a breakup text.",
  "I was playing Street Fighter 6 all day.",
  "The ledgedash goblins didn't accept my sacrifice today.",
  "Hbox broke this CRT before we sat down to play.",
  "This TV has lag.",
  "This is an old version of UCF.",
  "My netplay setup feels different than CRT.",
  "It always takes me so long to adjust to CRT.",
  "Mang0 said this matchup is 70-30.",
  "Leffen loses to this character all the time.",
  "You're just a netplay warrior.",
  "You're using cheater moves.",
  "I'm not warmed up yet.",
  "Jigglypuff. - Hbox",
  "I couldn't hear the game audio over my crying.",
  "I'm just a mid-tier main.",
  "Melee is a bad game anyway.",
  "I'm just a casual player.",
  "I forgot to turn rumble off.",
  "Someone was yelling in my ear.",
  "The bees outside my window kept me up all night.",
  "I tried too hard to be Mang0.",
  "You only won because I SD'd twice.",
  "My hands hurt.",
  "I was dehydrated.",
  "My little brother was playing on my account.",
  "I shouldn't have homie stocked.",
  "This isn't my controller.",
  "I was seeded wrong.",
  "I forgot to take my training weights off.",
  "My controller has snapback.",
  "I got battlefielded.",
  "You were lag switching bro.",
  "Pokemon Stadium was unfrozen.",
  "I had jet lag.",
  "You won RPS for port 4.",
  "You're using a phob.",
  "It was online so it doesn't count.",
  "I was playing a secondary.",
  "You had a better gaming chair.",
  "I thought it was a hand warmer.",
  "Sheik mains....",
  "TWO Ice Climbers in my pool?!",
  "I was trying a new controller.",
  "I haven't adjusted to z jump yet.",
  "This matchup is so bad for me.",
  "It was so loud in the venue.",
  "My lawyer advised me to drop that combo.",
  "I haven't played in a few weeks.",
  "I was saving my energy for later.",
  "I was trying to be respectful.",
  "I was trying to be cool.",
  "My car was stolen.",
  "I just got off work.",
  "I was a little cross faded.",
  "You would cry if you had to play my bracket.",
  "The TO is my ex.",
  "They were camping.",
  "They kept taking me to unfrozen stadium.",
  "I had Reesch round 1...",
  "Wasn't feeling it today.",
  "I had to fight Rahma twice.",
  "There are too many Marths in my region.",
  "I'm probably dehydrated.",
  "I was playing on a different setup earlier.",
  "I always lose on the stream setup.",
  "Why is the venue so cold?",
  "Who seeded this?",
  "At least Wohlgey was there to pick me back up.",
  "They're not even good dude.",
  "It lagged everytime I got a grab.",
  "I'm not used to fighting button mashers.",
  "My hands are almost as sweaty as your gameplay.",
  "Marth grabs are ridiculous.",
  "Double Jump armor is so broken.",
  "You would play that character.",
  "They just got lucky.",
  "What are you without laser?",
  "My C stick kept getting stuck.",
  "I dropped my Phob before the set.",
  "Fox is so broken.",
  "He was just spamming up smash.",
  "My opponent didn't use deodorant.",
  "Its been awhile since I've played IRL.",
  "I haven't played since the Bush administration.",
  "Their mind games were too basic for me to predict.",
  "I win that on PAL.",
  "The cosmic rays are unusually strong today.",
  "I forgot to do my pre-game ritual.",
  "My glasses are smudged.",
  "I wasn't going to win the next set anyway.",
  "I was blinded by Pkay's drip.",
  "How many times do I have to tell you? I'm not a Fox main!!!!",
];

function random_item(johnArray) {
  return johnArray[Math.floor(Math.random() * johnArray.length)];
}

app.listen(process.env.PORT || 3001, "0.0.0.0", () => {
  console.log("Server is running.");
});
