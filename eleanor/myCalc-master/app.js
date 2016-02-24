console.log('yar! js working.');

//couldn't get the correct logical operator to work for the if statements to work properly

var op = prompt("Would you like to add, subtract, multiply, divide, or exponentiate?");
// if(op ! "add" || "subtract" || "multiply" || "divide" || "exponentiate"){
// 	var op = prompt("Please pick add, subtract, multiply, divide, or exponentiate"); 
// }
var num1 = parseInt(prompt("Please enter a number"));
// if(num1 ! Number){
// 	var num1 = parseInt(prompt("Please enter a number (don't type it out!) "))
//  }
var num2 = parseInt(prompt("Please enter a second number")); 
// if(num2 ! Number){
// 	var num2 = parseInt(prompt("Please enter a number (don't type it out!) "))
// }
var ans; 
var remainder; 

if(op == "add"){
	ans = num1 + num2; 
}

if(op == "subtract"){
	ans = num1 - num2; 
}

if(op == "multiply"){
	ans = num1*num2;
}

if(op == "divide"){
	ans = num1/num2; 
	remainder = num1%num2; 
	document.write("The remainder is " + remainder + " ")
}

// if(op == "exponentiate") {
// 	ans = num1 ** num2; //According to Mozilla, this operator is experimental and support therefore varies 
// }

document.write("The answer is " + ans)

 