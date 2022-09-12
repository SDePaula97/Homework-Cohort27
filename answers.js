
///////////////////////////////////////////////////////////////
// Easy going 
///////////////////////////////////////////////////////////////
for (let i = 1; i <= 20; i++ ){
    console.log(i);
}

/////////////////////////////////////////////////////////////////
// Get even
/////////////////////////////////////////////////////////////////
for (let i = 0; i < 200; i+= 2){
    
        console.log(i);
    }


////////////////////////////////////////////////////////////////////////////
    // Fizz Buzz answered
  ////////////////////////////////////////////////////////////////////////// 

    for (let i = 0; i < 101; i++) {
        if (i % 3 === 0 && i % 5 === 0) {
            console.log("FizzBuzz");
        } else if (i % 3 === 0) {
            console.log("Fizz");
        } else if (i % 5 === 0) {
            console.log("Buzz");
        } else {
            console.log(i);
        }
    }

/////////////////////////////////////////////////////////////////////////////
  // Wild Wild Life Answered
////////////////////////////////////////////////////////////////////////////
    const wolfy = ["Wolfy", "wolf", 16, "Yukon Territory"]
    const sharky = ["Sharky", "shark", 20, "Left Coast"]
    const plantee = ["Plantee", "plant",  5000 , "Mordor"]
    const porgee = ["Porgee", "Porg", 186, "Ahch-To"]
    const dart = ["D'Art" , "Demogorgan Dog", 2, "Upside Down"]  

   plantee[2]++;
   console.log(plantee);
    

     wolfy[3] = "Gotham City";
     console.log(wolfy);

   dart.push("Hawkins");
   console.log(dart);

wolfy[0] = 'Gameboy';
console.log(wolfy,sharky,plantee,porgee,dart);

////////////////////////////////////////////////////////////////////
//  Yell at the Ninja Turtles
////////////////////////////////////////////////////////////////////

const turtles = ['Donatello', "Leonardo", "Raphael", "Michelangelo"];

for (const name of ninjaTurtles) {
  console.log(name.toUpperCase());
} 

//////////////////////////////////////////////////////////////////////////
// Methods Revisited 
//////////////////////////////////////////////////////////////////////////

const favMovies = ['Jaws', 'The Fellowship of the Ring', 'Howl\'s Moving Castle', 'Django Unchained', 'Cloud Atlas', 'The Usual Suspects', 'Toy Story', 'Conan the Barbarian', 'Titanic', 'Harry Potter', 'Fried Green Tomatoes', 'Volver', 'Oculus', 'Seven', 'Black Panther', 'Harry Potter', 'Imitation of Life', 'Snatch', 'Fast and Furious'];

favMovies.sort();
console.log(favMovies.indexOf('Titanic')); 

favMovies.pop();
favMovies.push('Guardians of the Galaxy');
favMovies.reverse();
favMovies.shift();
console.log(favMovies.unshift());
favMovies.splice(favMovies.indexOf('Django Unchained'), 0, 'Avatar');
console.log(favMovies);
console.log(Math.ceil(favMovies.length / 2));
console.log(favMovies.length);
let okMovies = favMovies.slice(favMovies.length / 2 -1);
console.log(`Good Movies: ${favMovies}`);
console.log(favMovies.indexOf('Fast and Furious'));

/////////////////////////////////////////////////////////////////////
// Where is Waldo
/////////////////////////////////////////////////////////////////////

const whereIsWaldo = [["Timmy", "Frank"], "Eggbert",
                    ["Lucinda", "Jacc", "Neff", "Snoop"],
                    ["Petunia", ["Baked Goods", "Waldo"]]];
                    
                    
whereIsWaldo.splice(1, 1)
console.log(whereIsWaldo);

whereIsWaldo.splice[1].splice(whereIsWaldo[1].indexOf('Neff'), 1, 'No One)
console.log(whereIsWaldo);
console.log(whereIsWaldo[2][1][1])


///////////////////////////////////////////////////////////////////
// Excited Kittens 
//////////////////////////////////////////////////////////////////

 for (let i = 0; i < 20; i++)
console.log("Love me, pet me! HSSSS!")
    if (i % 2 == 0) {
      rand = Math.floor(Math.random()*100);
      if (rand >= 60) {
        console.log("...human...why you taking pictures of me?...")
      } else if(rand <= 30) {
        console.log('...the catnip made me do it');
      }else {
        console.log('...why does the red dot always get away...');
      }
     
    } 
    
///////////////////////////////////////////////////////////////////////////
// Find the Median 
/////////////////////////////////////////////////////////////////////////

const nums = [14,11,16,15,13,16,15,17,19,11,12,14,19,11,15,17,11,18,12,17,12,71,18,15,12];

let median = (array) => Math.floor((array.length +1)/2)
console.log(median(nums));



 



