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

// greeter 
let greeter = {
  //here we make a method called hello that take name as a parameter
  hello (name) {
    console.log('Hello there ' + name);
  },
  //here we are making a method that sends a farewell message
  goodbye (name) {
    console.log('Farewell' + name);
  },
  //whoAreYou method uses interpolation to log a string just like all the other methods
  whoAreYou (name) {
    console.log('Oh right!!' + name + ' how could I forget!')
  }
}


// collecting strings 
let stringCollector = {
  //collection is an empty array
  collection: [],
  //collect is a method that takes a string as a parameter reverses it and puts it into the collect array
  collect (str) {
    str.split("").reverse;
    stringCollector.collection.push(str);
  },
  // admirecollection method logs evrything in collection
  admireCollection () {
    console.log(collection)
  }
}

  // ATM
  let atm = {
    //object called at with two properties
    totalCash: 100000
    // dispenseTwenties method is going to dispense twenties with an if else statement 
    dispenseTwenties (w) {
      if(w<totalCash){
        totalCash - w
      } 
    } return null
  }




  // hungry turtles
  let leonardo = {
    name: 'leonardo',
    color: 'blue',
    weapon: 'katana',
    pizzaEaten: false,
    // when this method is run it evaluates the current condition of the pizzaEaten property and then changes it accordingly while displaying a message
    eatPizza () {
      if(pizzaEaten == false){
        console.log('leonardo is eating pizza ')
        leonardo.pizzaEaten = true
      } else {
        console.log('Leonardo has already eaten pizza')
        leonardo.pizzaEaten = false
      }
    }
  }



// calculator 
// making an object named calculator with a property output set to 0
let calculator = {
  output: 0,
  // this method multiplies two numbers entered as arguments and sets updates output and displays output
  multiply (num1, num2) {
    num1 * num2 = calculator.output;
    console.log(output);
  },
    // this method divides two numbers entered as arguments and sets updates output and displays output
  divide (num1, num2) {
    num1 / num2 = calculator.output;
    console.log(output);
  },
    // this method adds two numbers entered as arguments and sets updates output and displays output
  addition (num1, num2) {
    num1 + num2 = calculator.output;
    console.log(calculator.output);
  },
    // this method subtractes two numbers entered as arguments and sets updates output and displays output
  subtraction (num1, num2) {
    num1 - num2 = calculator.output;
    console.log(calculator.output);
  }
}





