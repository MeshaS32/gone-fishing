const prompt = require('prompt-sync')({sigint: true});

let caughtFish = []
// let fish1 = generateFish()
// let fish2 = generateFish()

// caughtFish.push(fish1, fish2)

// console.log(caughtFish)

console.log("You've gone fishing! Try to maximize the value of your fish. You can fish for 12 hours(till 12:00pm and can only catch 10 or less fish." )
//1. Current fish list - keep track of our fish print list # of fish = .length of caught fish
// weigth/value- function to calculate total weigth 


for(let i = 6; i < 12; i++){
    console.log('==========================\n');
    console.log(`the time is ${i}:00am. So far you caught:`)
//1. current fish list - keep track of our fish and print list
//2. logging out our random fish - generateRandomFish



// catch or release - user prompt

console.log(`${caughtFish.length} ${getTotalWeigth()} $${getTotalValue()}`)

let fish = generateFish();

console.log(`You caught a ${fish.name} weighing ${fish.weigth} lbs and valued at $${fish.value}`);

//check weigth exceeds 10lbs
let currentTotalWeight = getTotalWeigth();


if(currentTotalWeight + fish.weigth > 10){
console.log("\nThis fish would put you over 10lb so you should release it!\n");
console.log("press any key to continue ");
prompt('> ');

continue

}

console.log("\n Your action: [c] atch or [r]elease? ")
let action = prompt('> ')

//error check
//not over 10lbs
while(action !== 'c' && action !== 'r'){
console.log('please enter [c] or [r]')
action = prompt('> ')
}

if(action === 'c'){
 //catch-push fish into array. you chose to keep the fish
 caughtFish.push(fish);
 console.log(`You chose to keep the ${fish.name}!\n`)

}else if(action = 'r'){
   //release message you chose to release the fish
   console.log(`You chose to keep release the ${fish.name}!\n`)
}
} 

function generateRandomWeigth(){
    let weigth = Number((Math.random() * 5).toPrecision(3))

    while(weigth < 1){
     weigth = Number((Math.random() * 5).toPrecision(3))
    }
    return weigth
}


function generateRandomValue(){
    let value = Number((Math.random() * 5).toPrecision(3));

    while(value < 0.1){
        Number((Math.random() * 5).toPrecision(3));
    }

    if(value < 1){
     value =  Number((Math.random() * 5).toPrecision(3));
    }
    return value;
}




function generateRandomName(){
    let adjectives = ['Shiny', 'Red','Dull', 'Blue', 'Slimy', 'Green', 'Dry', 'Yellow', 'Vibrant', 'Purple', 'Floppy', 'Orange', 'Silly', 'Silver']

    let types = ['Salmon', 'Bass', 'Trout', 'Flounder', 'Perch', 'Snapper', 'Cod', 'Catfish', 'Grouper', 'Tuna', 'Blobfish', 'Blowfish']

    let adj1 = adjectives[Math.floor(Math.random() * adjectives.length)]
    let adj2 = adjectives[Math.floor(Math.random() * adjectives.length)]
    let type = types[Math.floor(Math.random() * types.length)]

    while(adj1 === adj2){
        adj2 = adjectives[Math.floor(Math.random() * adjectives.length)]
    }
    return adj1 + " " + adj2 + " " + type;
}



function generateFish(){
    let fish = {}
        fish.name = generateRandomName()
        fish.weigth = generateRandomWeigth()
        fish.value = generateRandomValue()

        return fish

    }


    function getTotalWeigth(){
        let tweigth = 0
        for(let i = 0; i < caughtFish.length; i++){
            tweigth += caughtFish[i].weigth;
        }
        return Number(tweigth.toPrecision(3));
    }
   
    function getTotalValue(){
        let tValue = 0

        for(let fish of caughtFish){
            //fish.value gets us the value property of each fish in our caught fish array
            tValue = tValue + fish.value
            console.log(tValue)
        }
        return Number(tValue.toPrecision(3))
    }
    console.log()

    console.log("The time is 12:00pm. Times up!")
    console.log("You caught " + caughtFish.length + " fishes") 
    console.log(caughtFish)
    console.log("total weigth: " + getTotalWeigth() +"lbs")
    console.log("Total value: " + "$" +getTotalValue())



/*
fish
-weight: number
-name (2 descriptors and a type): string
-value: number

fish = {
    name: string
    weigth: number
    value: number 

}

Math.random
weight 1-5lbs
console.log((Math.random() * 5).toPrecision(3))

let rand = Math.random()* 5;
console.log(rand);
console.log(Number(rand.toPrecision(3)).
need a way to offset decimals with 3 places ie 0.574

value 0-1
Math.random() *5).toPrecision(3)

name - 2 descriptors + 1 type 
adjective array [ 'enormous', 'red', 'scaly']

type array [ 'salmon', 'bass', 'trout']
Math.floor(Math.random() * type.length)

adj1 + adj2 + type

red red salmon

check to make sure adj1 !== adj2 if so re-randomize

*/

