function main(numOne,numTwo){
    // Only change code below this line
    var numOne1 = parseFloat(numOne);
    var numTwo1 = parseFloat(numTwo);
    var product = numOne1*numTwo1;
    // Only change code above this line
    return product;
}


console.log(main(2.5, 2.0));
console.log(main(5.5, 5.5));
console.log(main(100.25, 43.20));
module.exports = main;
