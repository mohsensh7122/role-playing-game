const heroID = "hero";
const heroName = "Wizard";
const heroAvatar = "images/wizard.png";
const heroHealth = 60;
const heroScore = 6;

const monsterID = "monster";
const monsterName = "Orc";
const monsterAvatar = "images/orc.png";
const monsterHealth = 10;
const monsterScore = 4;


function renderCharacter(elementId, name, avatar, health, score) {
   document.getElementById(elementId).innerHTML = `<div class="character-card">
   <h4 class="name"> ${name} </h4>
   <img class="avatar" src="${avatar}"/>
   <p class="health">health: <b> ${health} </b></p>
   <div class="dice-container"><div class="dice"> ${score} </div></div>
   </div>`;
}

renderCharacter(heroID, heroName, heroAvatar, heroHealth, heroScore);
renderCharacter(monsterID, monsterName, monsterAvatar, monsterHealth, monsterScore);
