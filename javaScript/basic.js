// console.log("Hello World");
// var word = "word";
// console.log("Hello ",word);
// var isHelloWordPrints = true;
// console.log(isHelloWordPrints);
// var number;
// var type;
// number = 2;
// number%2 == 0? console.log("Number is Even"):console.log("Number is odd");
// number = 5;
// if(number%2 == 0){
//     type ="Number is Even";
// }else{
//     type = "number is odd";
// }
// console.log(type);
// var num1 = 2;
// var num2 = 5;
// var test1 = num1 % 2 == 0;
// var test2 = num2 % 2 == 0;
// console.log("Is", num1, "an even number?",test1);
// console.log("Is", num2, "an even number?",test2);
function consoleStyler(color, background, fontSize, txt) {
    const message = `%c${txt}`;
    let style = `color: ${color};`;
    style += `background: ${background};`;
    style += `font-size: ${fontSize};`;

    console.log(message, style);
}

// Example usage:
consoleStyler('white', 'blue', '20px', 'Styled Console Message');
