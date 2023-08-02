// var n1 = 4;
// var n2 = 5;
// var sum = n1 + n2;
// console.log("sum=>", sum);

let ar=[1,2,3,4]
let find =ar.find(( elment,index,ar) => {
    console.log(element, index, ar)
    return element == 2;
})
console.log(find);