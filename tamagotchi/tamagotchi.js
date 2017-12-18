// console.log('test')
// we made an object called tamagotchi with a name, type, food, rest, and health 
var tamagotchi1 = {
  name: "billybob",
  creatureType: "Dragon",
  foodInTummy: 10,
  restedness: 10,
  health: 10,
  // this methos makes it seem as though the tamagotchi needs attention
  cry () {
    console.log('whaaaaaa!! cried ' + this.name);
    tamagotchi1.foodInTummy -= 2;
    console.log('there is only ' + this.foodInTummy + ' left in its tummy');
  },
  // this method makes the thing puke, but doesnt empty the foodInTummy
  puke () {
    console.log('Bleeeeh :O~~')
    tamagotchi1.foodInTummy -= 5;
    console.log('there is only ' + this.foodInTummy + ' left in its tummy');
     tamagotchi1.health -= 1;
    console.log('billybob lost a health point! he now only has ' + this.health + ' health points');
  },
    yawn () {
    console.log(':O')
    tamagotchi2.restedness -= 1;
    console.log(this.name + "'s restedness level has been decreased by one his new level is " + this.restedness);
  },
  setInterval(hungerTimer(){ this.cry(); }, 6000);
  setInterval(yawnTimer(){ this.yawn; }, 10000);
  setInterval(sickTimer(){ this.puke; }, 25000);
}


var tamagotchi2 = {
  name: "billyjoe",
  creatureType: "wolf",
  foodInTummy: 9,
  restedness: 3,
  health: 7,
  // this methos makes it seem as though the tamagotchi needs attention
  cry () {
    console.log('whaaaaaa!! cried ' + this.name);
    // this takes food away from the tamagotchis tummy every time it is run. the next line displays that fact
    tamagotchi2.foodInTummy -= 2;
    console.log('there is only ' + this.foodInTummy + ' left in its tummy');
  },
  // this method makes the thing puke, but doesnt empty the foodInTummy
  puke () {
    console.log('Bleeeeh :O~~');
     tamagotchi2.foodInTummy -= 5;
    console.log('there is only ' + this.foodInTummy + ' left in its tummy');
    // this method decreases health by one and then logs the updated health
    tamagotchi2.health -= 1;
    console.log('billyjoe lost a health point! he now only has ' + this.health + ' health points')
  },
  yawn () {
    console.log(':O')
    tamagotchi2.restedness -= 1;
    console.log(this.name + "'s restedness level has been decreased by one his new level is " + this.restedness);
  },
  setInterval(hungerTimer(){ this.cry(); }, 6000);
  setInterval(yawnTimer(){ this.yawn; }, 10000);
  setInterval(sickTimer(){ this.puke; }, 25000);
}



let player = {
  name: 'jon',
  sayName: console.log('Hi my name is ' + this.name),
  feedTamagotchi () {
    tamagotchi1.foodInTummy += 1;
    tamagotchi2.foodInTummy += 1;
  },
  medicateTamagotchi (beast) {
    beast.health +=1;
  },
  knockOutTamagotchi (beast) {
    console.log("the tamagotchi is now asleep");
    beast.restedness +=1;
  }
}



