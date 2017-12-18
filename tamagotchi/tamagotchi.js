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
  }
}