// Code your solutions in this file
/*
for (let age = 30; age < 40; age++) {
    console.log(`I'm ${age} years old. Happy birthday to me!`);
  }



*/

/*
const gifts = ["teddy bear","drone","doll"];

function wrapGifts(gifts){
    for (let i=0; i<gifts.length; i++){
        console.log(`Wrapped ${gifts[i]} and added a bow!`);
        debugger;
    }
    return gifts;
}

wrapGifts(gifts);
*/

const names=[]
const event =""

function writeCards(names,event){
    const newList = []
    for (let i=0; i < names.length; i++){
        newList[i] = `Thank you, ${names[i]}, for the wonderful ${event} gift!`
    }
    console.log(newList)
    return newList

}


writeCards(["A","B","C"],"holiday");

/*To get more acquainted with while, your task is to write a function,
countDown, that takes in any positive integer and, starting from that number,
counts down to zero using console.log().
Note that this means that running countDown(10); would actually log 11 times.
*/


let starter = 10
function countDown(number){
    console.log(starter)
    starter = number
    while (starter > 0){
        console.log(starter--)
    }
}
countDown(6)