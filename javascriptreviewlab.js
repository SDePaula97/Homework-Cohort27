
// Part A
//How do we assign a value to a variable? var= value
//How do we change the value of a variable? var = newValue
//How do we assign an existing variable to a new variable? let newVar = oldVar
//Remind me, what are declare, assign, and define? declaring a variable creates and allocates the memory, assign gives a variable a value, definition defines the value
//What is pseudocoding and why should you do it? explains the logic and functionality of code
//What percentage of time should be spent thinking about how you're going to solve a problem vs actually typing in code to solve it?


// Part B 

// let firstVariable = "Hello World";
// let secondVariable = 25;
// yourName = "Svetly";

// console.log(`Hello my name is ${yourName}`)


//Part C 
// const a = 4;
//   const b = 53;
//   const c = 57;
//   const d = 16;
//   const e = 'Kevin';

//   console.log(a < b);
//   console.log(c > d);
//   console.log('Name' == 'Name');
//   // FOR THE NEXT TWO, USE ONLY && OR ||
//   console.log(true || false);
//   console.log(false || false ||  false || false || false || true);
//   console.log(false == false)
//   console.log(e === 'Kevin');
//   console.log(a + b == c); // note: a < b < c is NOT CORRECT (and is not a valid JS expression, think about using other math operations)
//   console.log(a === a < d); // note: the answer is a simple arithmetic equation, not something "weird"
//   console.log(48 !== '48');


//Part D 
//   let animal = 'koala';
//     (animal == `cow`) ? console.log(`moo`) : console.log(`Hey! You're not a cow.`)


//Part E 

// let age = 18;
(age <= 16) ? console.log(`Here are the keys!`) : console.log(`Sorry, you're too young.`)
   

// Part II

//     for (let i = 0; i <= 10; i++ ){
//  console.log(i);
//     }

// for(let i = 10; i <= 400; i++) {
// console.log(i);
// }

//  for (let i = 12; i < 4000; i++3){
// console.log(i);
//  }

// B

// for(let i = 0; i <= 100; i++){
// (i % 2 ==0) ? console.log(i + `<--is an even number`) : console.log(i)

// Part C 

//   for (let i = 0; i < 101; i++) {
//     if (i % 5== 0) {
//         console.log("I found a ${i}. High Five!");
//     } if (i % 3 == 0) {
//         console.log("Three is a crowd.");
//     } else{ 
//         console.log("I found a ${i}")
//     }
// }


// D Savings Account

// let bank_account =
// for (let i = 0; i <= 10; i++) {
//     bank_account += if;
// }
// check  balance
// console.log(`Your account balance is ${bank_account}`);

// let bank_account = 0
// for (let i = 0; i <+ 100; i++) {
//     bank_account += (i*2);
// }
// console.log(`Your account balance is ${bank_account}`);

////////////////////////////////////////////////////////////////////
//Arrays and Control Flow
///////////////////////////////////////////////////////////////////

// A.
// Elements
// No
// Databases or a library


// B.
// const quotes = ['quote1' , 'quote2', 'quote3'];
// console.log(quotes);


// C.
// //  randomThings = [1, 10, "Hello", true];
// console.log(`The first element is ${randomThings[0]} at index 0`);
// randomThings[2] = "World";
// //  console.log(randomThings);


//  D. 
//  const ourClass = ["Salty", "Zoom", "Sardine", "Slack", "Github"]
// console.log(`The third element is ${ourClass[2]} at index 2`);
// // ourClass[4]= "Octocat"
// ourClass.push('Cloud City')
// // console.log(ourClass);



// E.

// const myArray = [5, 10, 500, 20]

// myArray.push = ("Aegon");
// myArray.push('stringy thing');
// myArray.shift();
// myArray.unshift('Bob Marley');
// myArray.pop();
// myArray.reverse();
// // console.log(myArray);


// F.
// let num = 35
// if (num < 100){
//     console.log(`little number`);
// } else if (num > 100) {
//     console.log(`big number`);
// }


// G.
// let num = 35
// if (num < 5) {
//     console.log(`little number`);
// } else if(num > 10){
//     console.log(`big number`);
// }else {
//     console.log('monkey')
// }

// H. 
// const kristynsCloset = [
//     'left shoe',
//     'cowboy boots',
//     'right sock',
//     'GA Hoodie',
//     'Green Pants',
//     'yellow knit hat',
//     'marshmallow peeps'

// ];
// const thomsCloset = [
//     'grey button-up',
//     'dark grey button-up',
//     'light blue button-up',
//     'blue button-up'

// ], [
//     'grey jeans',
//     'blue jeans',
//     'PJs'
// ], [
//     'wool mittens',
//     'wool scarf',
//     'raybans'
// ]

// console.log(`kristyn is rocking that ${kristynsCloset[3]} today!`);
// kristynsCloset.splice(6,0, 'raybans');
// kristynsCloset[5] = 'stained knit hat'
// console.log(kristynsCloset);

// console.log(`thom is looking fierce in a ${thomsCloset[0][0]}, ${thomsCloset[1][1]} and ${thomsCloset[2][2]}`)
// thomsCloset[1][3] = `Footie Pajamas`
// console.log(thomsCloset)


// IV.

// A. printGreeting
// console.log(`Slimer`);
// // B. printCool
// let printCool = (name) => `${name} is cool!`
// console.log(printCool(`Svetly`))
// // C. calculateCube
// let calculateCube = (num) => Math.pow(num,3)
// console.log(calculateCube(3));
// // D. isVowel
// let isVowel = (letter) => {
//     letter = letter.toLowerCase();
//     return (letter == `a` || letter == `e` || letter == `i` || letter == `o` || letter == `u`)
// }

// console.log(isVowel(`A`))
// // console.log(isVowel(`a`))
// // console.log(isVowel(`E`))
// // console.log(isVowel(`e`))
// // console.log(isVowel(`I`))
// // console.log(isVowel(`i`))
// // console.log(isVowel(`O`))
// // console.log(isVowel(`o`))
// // console.log(isVowel(`U`))
// // console.log(isVowel(`u`))



///// Get TwoLengths
// function getTwoLengths(string1, string2){
//     const list = [string1.length, string2.length]
//     console.log(list);
// }
// getTwoLengths('purple', 'blue')


//////// GetMultipleLengths
// function getMultipleLengths(array){
//     const list = [array[0].length, array[1].length,array[2].length,array[3].length,array[4].length]
//     console.log(list);
// }
//  getMultipleLengths(["hello", "what", "is", "up", "dude"]);

 ///// maxOfThree
//  function maxOfThree(6,9,1) {
//     if(6 > 9){
//         return 9;
//     } else (6 > 1){
//         return 6;
//     }
//  }
//  console.log(maxOfThree);



 /////// printLongestWord

//  let printLongestWord = (arr) => {
//     const decreasing = arr.sort((a,b) => b.length - a.length);
//     return arr[0]
// }
// // 
// // printLongestWord(["BoJack", "Princess", "Diane", "a", "Max", "Peanutbutter", "big", "Todd"]);

// V.
// A.
// const user = {
//     name: `name`,
//     email: `email`
//     age: 25
//     purchased []
// }

// // B. Update the use
// user.email = `newemail@email.com`
// user.age++ ;

// // C adding keys and values
// user.location = `Portugal`

// // D. Shopaholic
// user.purchased.push('carbohydrates')
// user.purchased.push('peace of mind')
// user.purchased.push('Merino Jodhpurs')
// console.log(user.purchased[2])

// // E. Object within Object
// user.friend = {
//     name: "Josie Pickles",
//     age: 2,
//     location: `Lisbon`,
//     purchased: []
// }

// console.log(user.friend.name);
// console.log(user.friend.location);
// user.friend.age = 55
// user.friend.purchased.push(`The one ring`)
// user.friend.purchased.push(`The latte`)
// console.log(user.friend.purchased[1]);



// // F. user.purchased.foreach(item => {
//     console.log(item)
// });

// G. 
let updateUser = () => {
    user.age++
    user.name.toUpperCase()
    return person;
}

let oldAndLoud = (person) => {
    person.age = person.age++
    person.name = person.name.toUpperCase()
    return person;
}

console.log(updateUser());
console.log(oldAndLoud(user));









  







    


