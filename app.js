
////////////////////////////   166


// if(1+1 ==2){
// console.log("Math still works!!!");
// }

// let random = Math.random();
// if(random < 0.5){
//     console.log("Your number is less than 0.5");
//     console.log(random);
// }
// if(random >= 0.5){
//     console.log("Your number is greater than 0.5");
//     console.log(random);
// }

////////////////////////////////// 167


// const weekOfDay = "Monday";

// if(weekOfDay==="Monday"){
//     console.log("I hate very much Monday");
// }else if(weekOfDay==="saturday"){
//     console.log("I love very much Saturday");
// }else if(weekOfDay==="Friday"){
//     console.log("Friday is good but no more!!!");
// }



// const age = 118;

// if(age<=5){
//     console.log("You are a baby.Get in free");
// }else if(age< 10){
//     console.log("You are a child. You pay $10 for get in!!!");
// }else if(age < 65){
//     console.log("You are an adult.You have to Pay $20 !!! ");
// }else if(age > 65){
//     console.log("You are Senior . you pay $10!!!");    
// }


///////////////////////////////    168

// const password = prompt("Please enter the Password!!!");

// if(password.length >=6){
//     if(password.indexOf(' ')===-1){
//     console.log("valid Password!!!");
//     }else{
//         console.log("Password cannot contain spaces");
//     }
// }else{
//     console.log("Password is too short ");
// }


/////////////////////   170 


// const password = prompt("Please enter the new password!!!");

// if(password.length>=6 && password.indexOf(' ')===-1){
//     console.log("Valid Password!!!");
// }else{
//     console.log("Invalid Format for Password!!!");
// }


/////////////////////////////// 171


// const age = -10;

// if(age < 5 || age >= 65){
//     console.log("free");
// }else if(age<10){
//     console.log("$10!!!");
// }else if(age<65){
//     console.log("$20!!!");
// }


// if(age >= 0 && age < 5 || age >= 65){
//     console.log("free");
// }else if(age >= 5 && age<10){
//     console.log("$10!!!");
// }else if( age >= 10 && age<65){
//     console.log("$20!!!");
// }else{
//     console.log("Invalid Age!!!");
// }

////////////////////////////// 173

// const day = 7;

// switch(day){
//     case 1:
//         console.log("Monday");
//         break;
//         case 2:
//         console.log("Tusday");
//         break;
//         case 3:
//         console.log("Wesnday");
//         break;
//         case 4:
//         console.log("Thrusday");
//         break;
//         case 5:
//         console.log("Friday");
//         break;
//         case 6:
//         console.log("Saturday");
//         break;
//         case 7:
//         console.log("Sunday");
//         break;
//         default:
//             console.log("I don't Know that!!!");
// }



///////////////////////////// 192 

// for(let i=0; i<=26; i++){
//     console.log(i);
// }


// for(let i =100; i>=0; i-=10){
//     console.log(i);
// }



// for(let i =10; i<=1000; i*=10){
//     console.log(i);
// }


//////////////////////////////////////  193

// infinte loop thats nevers end up 


//////////////////////////// 194      loop over arrays


// const animals = ['lions','Goat','Tiger','Dog','Cat','Fish'];

// for(let i=0; i<animals.length; i++){
//     console.log(i,animals[i]);
// }


/////////////////////////// 195     for Nested loop

// for(let i=1; i<=10;i++){
//     console.log(`i is : ${i}`);
//     for(let j=1; j<4; j++){
//         console.log(`     j is : ${j}`);
//     }
// }


// for(let i=1; i<=10;i++){
//     console.log(`i is : ${i}`);
//     for(let j=1; j<4; j++){
//         console.log(`     j is : ${j}`);
//         for(let k=1; k<3; k++){
//             console.log(`         k is: ${k}`);
//         }
//     }
// }


// const seatingChart= [
//     ['saddique','Qadeem','Noman'],
//     ['Hamza','Rehmat','Amir','Azhar'],
//     ['Ilyas','Ikram','Wali','Awais']
// ];

// for(let i=0; i<seatingChart.length; i++){
//     const row = seatingChart[i];
//     console.log(`ROW #${i+1}`);
//     for(let j=0; j<row.length; j++){
//         console.log(row[j]);
//     }
// }


////////////////////  196   while loop

// const prompt = require("prompt-sync")();
// const secret = "ptm";
// let guess = prompt("Enter the secret code..      ");

// while(guess !==secret){
//     guess = prompt("Enter the secret code again...")
// }
// console.log("Congralate You have got the secret coce!!!");


////////////////////////  197   

// let input = prompt('Hi , Say somethings  ');
// while(true){
//     input = prompt(input)
//     if(input.toLocaleLowerCase() === "stop coping me")
//         break;
    
// }
// console.log("Okey You won!!");


// for(let i=0; i<1000; i++){
//     console.log(i);
//     if(i=== 100) break;
// }


////////////////////     198  writting to guess a number;



   //  let maximum = parseInt(prompt("Enter the maximun number!!"));
   //  while(!maximum){
   //     maximum = parseInt(prompt("Enter the maximun number!!"));
   //  }
   //  const targetNum= Math.floor(Math.random()*maximum)+1;
   //  console.log(targetNum);

   // let guess = parseInt(prompt("Enter You first guess!!!"));
   
   // while(guess !== targetNum){
   //    if(guess >targetNum){
   //      guess =parseInt(prompt("Too High, Enter a new guess!!!"));
   //    }
   //    else {
   //      guess =parseInt(prompt("Too Low, Enter a new guess!!!"));
   //    }
   // }
   // console.log("You got it");



///////////////////  202 project






////////////////////////   207
// function greet(firstName,lastName){
//    console.log(`Hi, There ${firstName} ${lastName[0]}`);
// }


//////////////////////////////    210   

// let totalEggs = 0;
// function collectEggs(){
//     totalEggs = 6;
// }
// console.log(totalEggs);
// collectEggs();
// console.log(totalEggs);




// const bird = ' sparow ';

// function birdWatch(){
//    const bird = 'pea cook'
//    console.log(bird);
// }
// // console.log(bird);
// birdWatch();

////////// ///////////////////////    211   lexical scop


// function bankRobarry(){
//    const heroes = ['Spiderman','wovlermen','Black Panter','Batrwo'];
//    function cryforHelp(){
//       for(let hero of heroes){
//          console.log(`Please help Us, ${hero.toUpperCase()} `);
//       }
//    }
//    cryforHelp();
// }


//////////////////////////////  214 High order Function

// function callTwice(func){
//    func();
//    func();
// }
// callTwice(rollDie);


// function callTenTime(f){
//    for(let i=0; i<10 ; i++){
//          f();
//    }
// }

// function rollDie(){
//    const roll = Math.floor(Math.random()*6 ) +1;
//    console.log(roll);
// }


////////////////////////////////////// 215    high order function

// function makeMysterfunc(){
//    const rand = Math.random();
//    if(rand > 0.5){
//       return function(){
//          console.log('Congrates');
//          console.log('Congrates');
//       }
//    }else {
//       return function(){
//          alert("YOu have been injected by computer vireus");
//          alert('Stop trying to close the Window!!')
//          alert('Stop trying to close the Window!!')
//          alert('Stop trying to close the Window!!')
//          alert('Stop trying to close the Window!!')
//          alert('Stop trying to close the Window!!')
//          alert('Stop trying to close the Window!!')
//          alert('Stop trying to close the Window!!')
//          alert('Stop trying to close the Window!!')
//       }
//    }
// }


/////////////////////////////////////   216 Factory function


   // function makeBetweenFunc(min,max){
   //    return function(num){
   //       return num >= min && num <= max;
   //    }
   // }

//////////////////////////////  217  Method function =>   every method is a function but no every function is a method


// const math = {
//    add: function(x,y){
//       return x + y;
//    },
//    multiply: function(x , y){
//       return x * y;
//    },
//    divide: function(x,y){
//       return x / y;
//    },
//    subrate: function(x,y){
//       return x - y;
//    },
//       squre: function(x){
//          return x*x;
//       },
//       cube: function(x){
//          return x**3;
//       }
// }

///////////                              Shortand method


// const math = {
//    hi: 'Jani',
//    add(x,y){
//       return x+y;
//    },
//    subrate(x,y){
//       return x -y;
//    },
//    multiply(x,y){
//       return x*y;
//    },
//    dividision(x,y){
//       return x / y;
//    },
//    squre(x){
//       return x*x;
//    },
//    cube(x){
//       return x**3;
//    }
// }





//////////////////////// 218   try and catch


     

   // try{
   //    hello.toUpperCase();
   // }catch{
   //    console.log("Error!!!");
   // }
   // hello.toUpperCase();
   // console.log("after");




// function yell(msg){
//    try{

//       console.log(msg.toUpperCase().repeat(5));
//    }catch(e){
//       console.log("Please pass a string next time!!");
//    }
// }

/////////////////////////////////////  221  for each


// const numbers = [1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,16,17,18,19,20];

// function print(element){
//    console.log(element);
// }

// numbers.forEach(print);
// numbers.forEach(function(el){
//    console.log(el);
// })

// numbers.forEach(function(el){
//   if(el % 2 ===0){
//    console.log(el);
// }
// })


// const movies = [
//    {
//       title: 'Amadous',
//       score:89
//    },
//    {
//       title: 'Aline',
//       score:92
//    },
//    {
//       title: 'Stand by Me',
//       score: 94
//    },
//    {
//       title: 'Parasite',
//       score:96
//    }

// ];

// movies.forEach(function(movie){
//    // console.log(movie);
//    console.log(`${movie.title} - ${movie.score} / 100`);
// })


///////////////////////////////////////////////    222 maping 


// const numbers = [1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,16,17,18,19,20];

//  const doubles = numbers.map(function(num){
//    return num * 2
// })



// const movies = [
//    {
//       title: 'Amadous',
//       score:89
//    },
//    {
//       title: 'Aline',
//       score:92
//    },
//    {
//       title: 'Stand by Me',
//       score: 94
//    },
//    {
//       title: 'Parasite',
//       score:96
//    }
// ];


// const titles = movies.map(function(movie){
//    return movie.title.toUpperCase();
// })



////////////////////////////  223    Arrow function     


// const add = (x,y) =>{
//    return x + y;
// }

// const squre = (x) =>{
//    return x * x;
// }

// const rollDie = () =>{
//    return Math.floor(Math.random() * 6) + 1;
// }


/////////////////////////////////////// implicit fucntion

// const add = (a,b) => a + b


// const rollDie = () => (
//  Math.floor(Math.random * 6) + 1 
//  );



// const movies = [
//    {
//       title: 'Amadous',
//       score:89
//    },
//    {
//       title: 'Aline',
//       score:92
//    },
//    {
//       title: 'Stand by Me',
//       score: 94
//    },
//    {
//       title: 'Parasite',
//       score:96
//    }
// ];


// const newMovies = movies.map(function(movie){
//    return `${movie.title} - ${movie.score/10}`
// })

// const newMovies = movies.map(movies =>{
//     return `${movies.title} - ${movies.score/10}`
//    })



// const newMovies = movies.map(movies =>(
//    `${movies.title} - ${movies.score/10}`
// ))






/////////////////////////////////    226 settime out and setInterval;


// setTimeout(() => {
//    console.log("Web & BlockChain Developer!!!");
// }, 2000);

// setInterval(() =>{
//    console.log()
// },2000)


// console.log("Hello World!");
// setTimeout(() => {
//    console.log("BlockChain Developer");
// }, 3000);
// console.log("Are you Still there.......");

// setInterval(() => {
//    console.log(Math.random());
// }, 3000);

// const id = setInterval(() => {
//    console.log(Math.random());
// }, 3000);

// const numbers = [1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,16,17,18,19,20];

//  numbers.filter(n =>{
//    return n ===4
//  })

//  numbers.filter(n =>{
//    return n < 10;
//  })


// const movies = [
//       {
//          title: 'Amadous',
//          score:89,
//          year:1984
//       },
//       {
//          title: 'Aline',
//          score:92,
//          year:1985
//       },
//       {
//          title: 'Stand by Me',
//          score: 94,
//          year:1986
//       },
//       {
//          title: 'Parasite',
//          score:96,
//          year:1988
//       },
//       {
//          title: 'saro khniii',
//          score:95,
//          year:2023
//       },
//       {
//          title: 'salman khaniii',
//          score:29,
//          year:1945
//       },
//       {
//          title: 'Amir khainnnn',
//          score:46,
//          year:1932
//       }
//    ];

/////////////////// by return function 
//   const goodMovies = movies.filter(movie =>{
//       return movie.score > 80;
//    })

/////////////// by arrow function

// const goodMovies = movies.filter(m => m.score >80)
// const goodTitles = goodMovies.map(m => m.title)

// const badMovies = movies.filter(m => m.score <80)
// const badTitles = badMovies.map( m => m.title);



// const recentMovies = movies.filter(m => m.year > 1990);


/////////////////////////  228   some and every Method



// const numbers = [90,89,93,94,95,76,77,78,79,80,81,82,83,84,85,86,87,88,91,70];

// numbers.every(score => score >= 75);

// numbers.some(score => score >= 75);


//////////////////////////   229  reduce Method 


   // const prices = [9.99,10.99,40.99,23.4,12.99,31.99,38.99,8.99];

   // let total = 0;

//    for(let price of prices){
//       total += price;
//    }
// console.log(total);

// const total = prices.reduce((total,price) =>{
//    return total + price;
// })



////////////////// or


// const total = prices.reduce((total,price) => total + price);
// const total = prices.reduce((total,price) => total * price);




///////// for  finding a min value or max value in arrays

//  const minPrice = prices.reduce((min,price) =>{
//     if(price < min){
//       return price;
//     }else{
//       return min;
//     }
//  })

//  const highRatedMovies = movies.reduce((bestMovies, currMovies) =>{
//    if(currMovies.score > bestMovies.score){
//       return currMovies;
//    }
//    return bestMovies
//   })


// const even = [2,4,6,8,10];
// even.reduce((sum, num) => sum + num)





/////////////////// 230   Arrow function and this


//////////////////// using function   

// const person = {
//    firstName: "Muhammad",
//    lastName: "Saddique",
//    fullName: function(){
//       return `${this.firstName} ${this.lastName}`
//    }
// }




//////////// using arrow function

// const person = {
//    firstName: "Muhammad",
//    lastName: "Saddique",
//    fullName: function(){
//       return `${this.firstName} ${this.lastName}`
//    }
// }




///////////////////////////  232 Defult Params


// function rollDie(numSide){
//    if(numSide === undefined){
//       numSide = 6;
//    }
//    return Math.floor(Math.random () * numSide ) +1;
// }

//  function greet(msg, person){
//    return `${msg}, ${person}`
//  }


// function greet(person,msg ="Hello"){
//    return `${msg}, ${person}`
//  }

//////////////////////////////////  236 rest params


// function sum(){
//    return arguments.reduce((total,el) => total + el)
// }

// function sum(...nums){
//    return nums.reduce((total,el) => total + el);
// }

// function raceResult(gold,silver,...everyoneElse){
//    console.log(`Gold Medal goes to : ${gold}`);
//    console.log(`silver Medal goes to : ${silver}`);
//    console.log(`And Thanks to Every One Else: ${everyoneElse}`);
// }



// function myfunction(){
//    var h1 = document.getElementById("first_line");
//    h1.innerHTML = "I have no money! to go home back!!!";
//    h1.style.color = "red";
//    h1.style.fontSize = "5rem"
//    h1.style.backgroundColor = "blue";
//    h1.style.borderRadius = "50%"
// }


//  var a = document.querySelector("h1");

//  a.addEventListener("click",function(){
//    a.innerHTML = "Badal giya hu me teraaa ex ke taraaa";
//    a.style.color = "red";
//    a.style.backgroundColor = "Yellow"
//  })



///////////////////////////////   blub



// var blub = document.querySelector("#blub");
// var btn = document.querySelector("button");


// var flage = 0;

// btn.addEventListener("click", function(){
//    if(flage == 0){
//       blub.style.backgroundColor = "Yellow";
//       console.log("Clicked");
//       flage = 1
//    }else{
//       blub.style.backgroundColor = "Transparent";
//       console.log("Again Click");
//       flage = 0
      
//    }
// })

////////////////////////////////////////////////




// var h = document.querySelectorAll("h1");
// console.log(h);

// h.forEach(function(e){
//    console.log(e);
// })



// var h = document.querySelector("h1");
// h.textContent = 'Byeeeee'


                           //////// 257   The OnClick Property


var btn = document.querySelector("#v2");

// btn.onclick = function(){
//     console.log("You clicked me")
//     console.log("I hope it works porperly")
// }

// function scream(){
//     console.log("AAAAAAAAAaaHHHHHHHHH");
//     console.log("you have touch me");
// }
// btn.onmouseenter = scream;


////////////////////////////  258    addEventListener 

// var btn3 = document.querySelector("#v3");

// btn3.addEventListener("click",function(){
//    // alert("You clicked me 3rd time!!!")
//    console.log("You clicked me 3rd time!!!");
//    console.log(scream);
// })
// btn3.addEventListener("click",scream)


// var tasButton = document.querySelector("#tas");

// function twist(){
//    console.log("Twist");
// }
// function shout(){
//    console.log("Shout");
// }

// tasButton.onclick = twist;
// tasButton.onclick = shout;


// tasButton.addEventListener('click',twist, {once: "true"});
// tasButton.addEventListener('click',shout, {once: "true"});



//////////////////////    258   Random Color Generator


// var button = document.querySelector("button");
// var h1 = document.querySelector("h1");

// button.addEventListener("click",function(){
   
//     var newColor = makeRandColor();
//     document.body.style.backgroundColor = newColor;
//     h1.innerText = newColor;
// })

// var makeRandColor = () =>{
    
//     var r = Math.floor(Math.random() *255);
//     var g = Math.floor(Math.random() *255);
//     var b = Math.floor(Math.random() *255);
//     return `rgb(${r},${g},${b})`;
// }



//////////////////////// 260 Events & the keywords this


var makeRandColor = function() {
   var r = Math.floor(Math.random() * 255);
   var g = Math.floor(Math.random() * 255);
   var b = Math.floor(Math.random() * 255);
   return `rgb(${r},${g},${b})`;
}

// var buttons = document.querySelectorAll("button");
// for(let button of buttons){
//    button.addEventListener("click",function(){
//       button.style.backgroundColor = makeRandColor();
//       button.style.color = makeRandColor();
//    })
// }

// var h1s = document.querySelectorAll("h1");
// for(let h1 of h1s){
//    h1.addEventListener("click",function(){
//       h1.style.backgroundColor = makeRandColor();
//       h1.style.color = makeRandColor();
//    })
// }


/////////////////////////// or



var buttons = document.querySelectorAll("button");
for(let button of buttons){
   button.addEventListener("click", colorized)
}





var h1s = document.querySelectorAll("h1");
for(let h1 of h1s){
   h1.addEventListener("click",colorized)
}


var colorized = function(){
   this.style.backgroundColor = makeRandColor()
   this.style.color = makeRandColor();
}

















