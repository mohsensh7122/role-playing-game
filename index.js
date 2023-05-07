

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



function renderCharacter(data) {
   const {elementId, name, avatar, health, score} = data;
   document.getElementById(elementId).innerHTML = `<div class="character-card">
   <h4 class="name"> ${name} </h4>
   <img class="avatar" src="${avatar}"/>
   <p class="health">health: <b> ${health} </b></p>
   <div class="dice-container"><div class="dice"> ${score} </div></div>
   </div>`;
}

renderCharacter(hero);
renderCharacter(monster);
