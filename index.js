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


function Character(data){
   Object.assign(this, data);

   this.getDiceHtml = function(diceCount) {
      return getDiceRollArray(diceCount).map(function (num) {
          return `<div class="dice">${num}</div>`
      }).join('')
   }

   this.getCharacterHtml = function () {
      const { elementId, name, avatar, health, diceCount } = this;
      const diceHtml = this.getDiceHtml(diceCount);

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
}

const wizard = new Character(hero);
const orc = new Character(monster);

wizard.getCharacterHtml();
orc.getCharacterHtml();