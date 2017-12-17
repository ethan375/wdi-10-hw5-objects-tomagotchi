//make an object called clicker
let clicker = {
  clickCount: 0,
  // everytime this function is run it will increment clickCount
  click: function(){
    clicker.clickCount++
  }
}


//Its all about me
//declaring an object myInformation that has 4 propeties
//the statement method combines all of the properties into a single output
//ageincrementor method increases the age by 1 every time it is called
//indentity crisis method changes name to rumplestillskin

let myInformation = {
  name: "Ethan Ebel",
  age: 22,
  randomFact: "a collectible coin dealer",
  statement () {
    console.log('Hello my name is ' + myInformation.name + ' will be 32' + ' in 10 years and my hobby is being ' + myInformation.randomFact)
  },
  ageincrementor () {
    myInformation.age++
  },
  identityCrisis () {
    myInformation.name = 'Rumplestillskin'
    console.log(myInformation)
  }
}