function getDiceRollArray(diceCount){
   return new Array(diceCount).fill(0).map(function(){
      return Math.floor(Math.random() * 6) + 1
  })
}

const hero = {
   elementId: "hero",
   name: "Wizard",
   avatar: "images/wizard.png",
   health: 60,
   diceCount: 3
}

const monster = {
   elementId: "monster",
   name: "Orc",
   avatar: "images/orc.png",
   health: 10,
   diceCount: 1
}


function Character(){
   this.elementId = data.elementId;
   this.name = data.name;
   this.avatar = data.avatar;
   this.health = data.health;
   this.diceCount = data.diceCount;

   this.getCharacterHtml = function () {
      const { elementId, name, avatar, health, diceCount } = this;
      const diceHtml = getDiceHtml(diceCount);

      document.getElementById(elementId).innerHTML =
          `<div class="character-card">
          <h4 class="name"> ${name} </h4>
          <img class="avatar" src="${avatar}" />
          <div class="health">health: <b> ${health} </b></div>
          <div class="dice-container">    
              ${diceHtml}
          </div>
      </div>`;
}

function renderCharacter(data) {
   const {
      elementId,
      name,
      avatar,
      health,
      diceRoll,
      diceCount
   } = data;

   function getDiceHtml(diceCount){
      return getDiceRollArray(diceCount).map(diceroll => {
          return `<div class="dice">${diceroll}</div>`
      }).join('')
  }
   

   const diceHtml = getDiceHtml(diceCount);

   document.getElementById(elementId).innerHTML = `<div class="character-card">
   <h4 class="name"> ${name} </h4>
   <img class="avatar" src="${avatar}"/>
   <p class="health">health: <b> ${health} </b></p>
   <div class="dice-container">
      ${diceHtml}
   </div>
   </div>`;
}


