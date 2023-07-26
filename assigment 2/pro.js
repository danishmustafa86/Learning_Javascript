//1. Write a js program to print day of week name using switch case.

// 2. Write a js program print total number of days in a month using switch case.

// 3. Write a js program to check whether an alphabet is vowel or consonant using switch case.

//  4. Write a js program to find maximum between two numbers using switch case.

//  5. Write a js program to check whether a number is even or odd using switch case.

//  6. Write a js program to check whether a number is positive, negative or zero using switch case.

//  7. Write a js program to find roots of a quadratic equation using switch case.

// / 8. Write a js program to create Simple Calculator using switch case.

// 9. Write a js program to input any character and check whether it is alphabet, digit or special character.

// 10. Write a js program to check whether a character is uppercase or lowercase alphabet.

// 11. Write a js program to input week number and print week day.

//  12. Write a js program to input month number and print number of days in that month.

// // // // // // // // // // // // // // // // // // // // // // // 13. Write a js program to count total number of notes in given amount.

// 14. Write a js program to input angles of a triangle and check whether triangle is valid or not.

//  15. Write a js program to input all sides of a triangle and check whether triangle is valid or not.

// // // // // // // // // // // // // // // // // // // // // // // 16. Write a js program to check whether the triangle is equilateral, isosceles or scalene triangle.

// // // // // // // // // // // // // // // // // // // // // // // 17. Write a js program to find all roots of a quadratic equation.

// // // // // // // // // // // // // // // // // // // // // // // 18. Write a js program to calculate profit or loss.

// // // // // // // // // // // // // // // // // // // // // // // 19. Write a js program to input marks of five subjects Physics, Chemistry, Biology, Mathematics and Computer. Calculate percentage and grade according to following:

// // // // // // // // // // // // // // // // // // // // // // // Percentage >= 90% : Grade A

// // // // // // // // // // // // // // // // // // // // // // // Percentage >= 80% : Grade B

// // // // // // // // // // // // // // // // // // // // // // // Percentage >= 70% : Grade C

// // // // // // // // // // // // // // // // // // // // // // // Percentage >= 60% : Grade D

// // // // // // // // // // // // // // // // // // // // // // // Percentage >= 40% : Grade E

// // // // // // // // // // // // // // // // // // // // // // // Percentage < 40% : Grade F

// // // // // // // // // // // // // // // // // // // // // // // 20. Write a js program to input basic salary of an employee and calculate its Gross salary according to following:

// // // // // // // // // // // // // // // // // // // // // // // Basic Salary <= 10000 : HRA = 20%, DA = 80%

// // // // // // // // // // // // // // // // // // // // // // // Basic Salary <= 20000 : HRA = 25%, DA = 90%

// // // // // // // // // // // // // // // // // // // // // // // Basic Salary > 20000 : HRA = 30%, DA = 95%

// // // // // // // // // // // // // // // // // // // // // // // 21. Write a js program to input electricity unit charges and calculate total electricity bill according to the given condition:

// // // // // // // // // // // // // // // // // // // // // // // For first 50 units Rs. 0.50/unit

// // // // // // // // // // // // // // // // // // // // // // // For next 100 units Rs. 0.75/unit

// // // // // // // // // // // // // // // // // // // // // // // For next 100 units Rs. 1.20/unit

// // // // // // // // // // // // // // // // // // // // // // // For unit above 250 Rs. 1.50/unit

// // // // // // // // // // // // // // // // // // // // // // // An additional surcharge of 20% is added to the bill

// // // // // // // // // // // // // // // // // // // // // // // Assignment 2

// // // // // // // // // // // // // // // // // // // // // // write a program to print day of week name using switch case
// // // // // // // // // // // // // // // // // // var day = 'friday'
// // // // // // // // // // // // // // // // // // switch (day) {
// // // // // // // // // // // // // // // // // //   case 'monday':
// // // // // // // // // // // // // // // // // //     console.log('monday day')
// // // // // // // // // // // // // // // // // //     break
// // // // // // // // // // // // // // // // // //   case day == 'tuesday':
// // // // // // // // // // // // // // // // // //     console.log('tuesday day')
// // // // // // // // // // // // // // // // // //     break
// // // // // // // // // // // // // // // // // //   case day = 'wednesday':
// // // // // // // // // // // // // // // // // //     console.log('wedesday day')
// // // // // // // // // // // // // // // // // //     break
// // // // // // // // // // // // // // // // // //   case day = 'thursday':
// // // // // // // // // // // // // // // // // //     console.log('thursday day')
// // // // // // // // // // // // // // // // // // //     break
// // // // // // // // // // // // // // // // // // //   case day = 'friday':
// // // // // // // // // // // // // // // // // // //     console.log('friday day')
// // // // // // // // // // // // // // // // // // //     break
// // // // // // // // // // // // // // // // // // //   case day = 'sathurday':
// // // // // // // // // // // // // // // // // // //     console.log('sathurday day')
// // // // // // // // // // // // // // // // // // //     break
// // // // // // // // // // // // // // // // // // //   case day = 'sunday':
// // // // // // // // // // // // // // // // // // //     console.log('sunday day')
// // // // // // // // // // // // // // // // // // //     break
// // // // // // // // // // // // // // // // // // //   default:
// // // // // // // // // // // // // // // // // // //     console.log('invalid input')
// // // // // // // // // // // // // // // // // // // }

// // // // // // // // // // // // // // // // // // // // // write a program to print total number of days in a month using switch case

// // // // // // // // // // // // // // // // // // // // var days=31
// // // // // // // // // // // // // // // // // // // // switch(days){
// // // // // // // // // // // // // // // // // // // //    case 31:
// // // // // // // // // // // // // // // // // // // //     console.log("1,3,5,7,8,10,12")
// // // // // // // // // // // // // // // // // // // //    break;
// // // // // // // // // // // // // // // // // // // //    case days=30:
// // // // // // // // // // // // // // // // // // // //     console.log("4,6,9,11")
// // // // // // // // // // // // // // // // // // // //     break;
// // // // // // // // // // // // // // // // // // // //     default:
// // // // // // // // // // // // // // // // // // // //     console.log("28")
// // // // // // // // // // // // // // // // // // // //   }

// // // // // // // // // // // // // // // // // // // write a program to check an alphabet is vowel or consonant

// // // // // // // // // // // // // // // // // // var ch = 'i'
// // // // // // // // // // // // // // // // // // switch (
// // // // // // // // // // // // // // // // // //   ch.toLowerCase() // ch.toLowerCase() == 'u'
// // // // // // // // // // // // // // // // // // ) {
// // // // // // // // // // // // // // // // // //   case 'a':
// // // // // // // // // // // // // // // // // //     console.log('it is vowel')
// // // // // // // // // // // // // // // // // //     break
// // // // // // // // // // // // // // // // // //   case 'e':
// // // // // // // // // // // // // // // // // //     console.log('it is vowel')
// // // // // // // // // // // // // // // // // //     break
// // // // // // // // // // // // // // // // // //   case 'i':
// // // // // // // // // // // // // // // // // //     console.log('it is vowel')
// // // // // // // // // // // // // // // // // //     break
// // // // // // // // // // // // // // // // // //   case 'o':
// // // // // // // // // // // // // // // // // //     console.log('it is vowel')
// // // // // // // // // // // // // // // // // //     break
// // // // // // // // // // // // // // // // // //   case 'u':
// // // // // // // // // // // // // // // // // //     console.log('it is vowel')
// // // // // // // // // // // // // // // // // //     break
// // // // // // // // // // // // // // // // // //   default:
// // // // // // // // // // // // // // // // // //     console.log('it is consonant')
// // // // // // // // // // // // // // // // // // }

// // // // // // // // // // // // // let month = 2
// // // // // // // // // // // // // switch (month) {
// // // // // // // // // // // // //   case 1:
// // // // // // // // // // // // //   case 3:
// // // // // // // // // // // // //   case 5:
// // // // // // // // // // // // //   case 7:
// // // // // // // // // // // // //   case 8:
// // // // // // // // // // // // //   case 10:
// // // // // // // // // // // // //   case 12:
// // // // // // // // // // // // //     console.log(31)
// // // // // // // // // // // // //     break
// // // // // // // // // // // // //   case 4:
// // // // // // // // // // // // //   case 6:
// // // // // // // // // // // // //   case 9:
// // // // // // // // // // // // //   case 11:
// // // // // // // // // // // // //     console.log(30)
// // // // // // // // // // // // //     break
// // // // // // // // // // // // //   case 2:
// // // // // // // // // // // // //     console.log(28)
// // // // // // // // // // // // //     break

// // // // // // // // // // // // //   default:
// // // // // // // // // // // // //     console.log("Invalid input");
// // // // // // // // // // // // //     break
// // // // // // // // // // // // // }

// // // // // // // // // // // // // // // // // // wrte a program to find a number is positive ,negative or zero

// // // // // // // // // // // // // // var n = 0
// // // // // // // // // // // // // // switch (Math.sign(n)) {
// // // // // // // // // // // // // //   case 1:
// // // // // // // // // // // // // //     console.log('it is positive')
// // // // // // // // // // // // // //     break
// // // // // // // // // // // // // //   case -1:
// // // // // // // // // // // // // //     console.log('it is netive')

// // // // // // // // // // // // // //     break
// // // // // // // // // // // // // //   case 0:
// // // // // // // // // // // // // //     console.log('it is zero')
// // // // // // // // // // // // // //     break
// // // // // // // // // // // // // //   default:
// // // // // // // // // // // // // //     console.log('it is invalid input')
// // // // // // // // // // // // // // }

// // // // // // // // // // // // // // var names = [0,6,3,4,5,6,7,8,9,10,11,12,2]
// // // // // // // // // // // // // // // console.log("thirt variable",num[2]);
// // // // // // // // // // // // // // // console.log("length of variables",nam.length);

// // // // // // // // // // // // // // for(var ind=0;ind<12;ind++)
// // // // // // // // // // // // // // console.log("arry values",names[ind]);
// // // // // // // // // // // // // // var n1 = 4
// // // // // // // // // // // // // // var n2 = 5
// // // // // // // // // // // // // // var sum = n1+n2
// // // // // // // // // // // // // // console.log("sum",sum = n1+n2)

// // // // // // // // // var n1 = 3
// // // // // // // // // var n2 = 5
// // // // // // // // // switch ("+") {
// // // // // // // // //   case "/":
// // // // // // // // //     console.log(n1/n2)
// // // // // // // // //     break;

// // // // // // // // //   case "*":
// // // // // // // // //     console.log(n1*n2)
// // // // // // // // //     break;
// // // // // // // // //     case "+":
// // // // // // // // //     console.log(n1+n2)
// // // // // // // // //     break;
// // // // // // // // //     case "-":
// // // // // // // // //     console.log(n1-n2)
// // // // // // // // //     break;

// // // // // // // // //   default:
// // // // // // // // //     console.log(invlid)
// // // // // // // // // }

// // // // // // // // var n1= 2
// // // // // // // // var n2 = 8
// // // // // // // // var sum = n1+n2
// // // // // // // // console.log("sum+>",sum)
// // // // // // // // es.lengt console.log("names of indexes",names[namh])
// // // // // // // var names=["ali","ahmad","danish","hamid","jajja"]
// // // // // // // console.log("names of indexes",names[names.length])
// // // // // // // var num=[3,4,56,43,2,12,5,67]
// // // // // // //   for(var n=0;n<=7;n++){
// // // // // // //     console.log(num[n])
// // // // // // //   }

// // // // // // // names.push("ajwad","arbaz")
// // // // // // // console.log(names)
// // // // // // // names.pop()
// // // // // // // names.pop()
// // // // // // // console.log(names)
// // // // // // // names.unshift("mustafa")
// // // // // // // console.log(names)
// // // // // // // names.shift()
// // // // // // // console.log(names)
// // // // // // var names=["ali","ahmad","danish","hamid","jajja","hum","tum"]
// // // // // // console.log(names.length[3])
// // // // // // names.splice(2,0,"bin")
// // // // // // console.log("names=>",names)
// // // // // // var newNames = names.slice(1,7)
// // // // // // console.log(newNames)

// // // // // write a program to find maximum between two numbers

// // // // var n1=3
// // // // var n2=5
// // // // switch(n1>n2){
// // // // case true:
// // // // console.log("n1 is maximum",n1 );
// // // // case false:
// // // // console.log("n2 is maximum",n2);
// // // // break;
// // // // default:
// // // //     console.log("invalidinput")

// // // write a program to check a number is even or odd in switch case

// // //

// // //  Write a js program to find roots of a quadratic equation using switch case.

// // // const a = -9
// // // const b = 3
// // // const c = 1
// // // var disc = b * b - 4 * a * c
// // // switch (true) {
// // //   case disc == 0:
// // //     console.log('roots are real and imaginary')
// // //     break
// // //   case disc > 0:
// // //     console.log('roots are real and complex')
// // //     break
// // //   case disc < 0:
// // //     console.log('roots are imaginary')
// // //     break
// // //   default:
// // //     console.log('invalid input')
// // // }

// // // Write a js program to input any character and check whether it is alphabet, digit or special character.

// // // var ch='?'
// // // if(ch=='a'||ch=='b'||ch=='c'||ch=='d'||ch=='e'||ch=='f'||ch=='g'||ch =='h'||ch=='i'||ch=='j'||ch=='k'||ch=='l'||ch=='m'||ch=='n'
// // // ||ch=='o'||ch=='p'||ch=='q'||ch=='r'||ch=='s'||ch=='t'||ch=='u'||ch=='v'||ch=='w'||ch=='x'||ch=='y'||ch=='z'){
// // //     console.log("it is alphabet")
// // // }
// // // else if(ch==1||ch==2||ch==3||ch==4||ch==5||ch==6||ch==7||ch==8||ch==9||ch==0){
// // //     console.log("it is digit")
// // // }
// // // else{
// // //     console.log("it is special character")
// // // }

// // // Write a js program to check whether a character is uppercase or lowercase alphabet.

// // var ch = 'z'
// // if (
// //   ch == 'a' ||
// //   ch == 'b' ||
// //   ch == 'c' ||
// //   ch == 'd' ||
// //   ch == 'e' ||
// //   ch == 'f' ||
// //   ch == 'g' ||
// //   ch == 'h' ||
// //   ch == 'i' ||
// //   ch == 'j' ||
// //   ch == 'k' ||
// //   ch == 'l' ||
// //   ch == 'm' ||
// //   ch == 'n' ||
// //   ch == 'o' ||
// //   ch == 'p' ||
// //   ch == 'q' ||
// //   ch == 'r' ||
// //   ch == 's' ||
// //   ch == 't' ||
// //   ch == 'u' ||
// //   ch == 'v' ||
// //   ch == 'w' ||
// //   ch == 'x' ||
// //   ch == 'y' ||
// //   ch == 'z'
// // ) {
// //   console.log('it is lower case')
// // } else if (
// //   ch == 'A' ||
// //   ch == 'B' ||
// //   ch == 'C' ||
// //   ch == 'D' ||
// //   ch == 'E' ||
// //   ch == 'F' ||
// //   ch == 'G' ||
// //   ch == 'H' ||
// //   ch == 'I' ||
// //   ch == 'J' ||
// //   ch == 'K' ||
// //   ch == 'L' ||
// //   ch == 'M' ||
// //   ch == 'N' ||
// //   ch == 'O' ||
// //   ch == 'P' ||
// //   ch == 'Q' ||
// //   ch == 'R' ||
// //   ch == 'S' ||
// //   ch == 'T' ||
// //   ch == 'U' ||
// //   ch == 'V' ||
// //   ch == 'W' ||
// //   ch == 'X' ||
// //   ch == 'Y' ||
// //   ch == 'Z'
// // ) {
// //   console.log('it is UPPER case')
// // } else {
// //   console.log('invalid input')
// // }

// // // 11. Write a js program to input week number and print week day.

// const day = prompt("please enter week number")
// if ((day == 1)) {
//   console.log('sunday')
// }
// if ((day == 2)) {
//   console.log('monday')
// }
// if ((day == 3)) {
//   console.log('tuesday')
// }
// if ((day == 4)) {
//   console.log('wednesday')
// }
// if ((day == 5)) {
//   console.log('thursday')
// }

// if ((day == 6)) {
//   console.log('friday')
// }

// if ((day == 7)) {
//   console.log('sathrday')
// }

// 12 Write a js program to input month number and print number of days in that month.

// var num=2
// if (num==1) {
//   console.log("days are 31 in january")
//   } else if(num==2){
//   console.log("days are 28 in February")}
//  else if(num==3){
//   console.log("days are 31 in March")}
//   else if(num==4){
//     console.log("days are 31 in April")}

//  else if(num==5){
//   console.log("days are 31 in january")}

//  else if(num==6){
//   console.log("days are 30 in june")}

//  else if(num==7){
//   console.log("days are 31 in july")}

//  else if(num==8){
//   console.log("days are 31 in august")}

//  else if(num==9){
//   console.log("days are 3o in september")}

//  else if(num==10){
//   console.log("days are 31 in october ")}

//  else if(num==11){
//   console.log("days are 30 in november")}

//  else if(num==12){
//   console.log("days are 31 in december")}
// else{
//   console.log("invalid input")}

// 14. Write a js program to input angles of a triangle and check whether triangle is valid or not.

// var a = 90
// var b = 34
// var c = 56
// if (a + b + c == 180) {
//   console.log('triangle is valid')
// } else {
//   console.log('triangle is invalid')
// }

// 15. Write a js program to input all sides of a triangle and check whether triangle is valid or not.

// var a=4
// var b=5
// var c=5
// if(a==b&&a==c&&c==b){
//   console.log("triangle is valid")
// }
// else{
//   console.log("triangle is invalid")

// }


// Write a js program to check whether the triangle is equilateral, isosceles or scalene triangle.

var a=4
var b=5
var c=6
if(a==b&&a==c&&c==b){
  console.log("it is equilateral triangle")
}
else if(a==b||a==c||c==b){
  console.log("it is isosceles triangle")

}
else if(a!=b&&a!=c&&c!=b){
  console.log("it is scalene triangle")

}