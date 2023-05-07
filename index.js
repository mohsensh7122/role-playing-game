/*
CHALLENGE
1. Strip out the hero and monster data (element id, name, avatar, 
health and dice score) and store them in variables

2. Write a renderCharacter() function that accepts the 5 new variables 
as paramaters and renders out a character with this data

3. Call renderCharacter() twice. Once with the hero variables and 
once with the monster variables to that both are rendered
*/

const hero = {
   elementId: "hero",
   name: "Wizard",
   avatar: "images/wizard.png",
   health: 60,
   score: 6
}

const monster = {
   elementId: "monster",
   name: "Orc",
   avatar: "images/orc.png",
   health: 10,
   score: 4
}



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
