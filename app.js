// Q1: write a program to display hello world five time for loops?

// QUESTION ONE ANSWER

// for (let i = 1; i <= 5; i++) {
//    console.log('hello world');
// }

// Q2: write a program to print numeric counting from 1 to 10?

// QUESTION TWO ANSWER

// for (let i = 1; i <= 10; i++) {
//     console.log(i);
// }

// Q3: write a program to print multiplication table of any number using for loop table number & length should be taken and as an input from user 

// QUESTION THREE ANSWER

// const userInput = +prompt("enter a table number")
// const times = +prompt("length of multiple table")


// for(let i = 1; i <= times ; i++){
//     console.log(`${userInput}*${i} = ${userInput*i}`)
// }

// QNO4:  const phones = ["MOTOROLA" , "NOKIA" , "Q MOBILE" , "IPHONE"]


// // QUESTION FOUR ANSWER

// for(let i = 1 ; i <= 1 ; i++){
//         document.write(phones[0])
//         document.write("<br>")
//         document.write(phones[1])
//         document.write("<br>")
//         document.write(phones[2])
//         document.write("<br>")
//         document.write(phones[3])
// }

// Writ a programe to print items of the follwing arry using for loop?

// QUESTION FIVE ANSWER

// const fruits = ["banana" , " " , "Watermalon" ,  " " , "apple" ,  " " , "grapes" ,  " " , "strawberry"]

// for(let i = 0 ; i < fruits.length ; i++){
//     document.write(fruits[i])
// }

// QNO6 : write a program to initalize of arry on N items

// QUESTION SIX ANSWER


// const N = +prompt("enter a number")
// const items = []

// for(let i=0; i<N ; i++){
//     const item = prompt("Enter items" + (i+1) + ':')
//     items.push(item)
// }
// document.write(items)


// QNO 8:

// QUESTION EIGHT ANSWER

// const A =["cookie" , "chips" , "patties" , "cake"]
// const userInput = prompt("please place order")
// const found = false;

// for(let i = 0; i < A.length ; I++){
//     if(A[i]===userInput){
//         found = true;
//         break;
//     }
// }
// if(found){
//     console.log(userInput + "is found in the list!")
// }else{
//     console.log(userInput + "is not found in list!")
// }


// QNO 9 :

// QUESTION NINE ANSWER


// var A = [90,67,109,672,787,653];
// var largestNumber = Math.max(...A)

// document.write("THE LARGEST NUMBER OF ARRAY IS" +largestNumber); 

// QNO.10

// QUESTION TEN ANSWER


// var A = [90,67,109,672,787,653];
// var smallNumber = Math.min(...A)

// document.write("THE LARGEST NUMBER OF ARRAY IS" +smallNumber)