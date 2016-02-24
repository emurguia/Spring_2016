// alert('js working :)')
var userName = prompt('What\'s your name?');
alert('Hi ' + userName);

var coder = confirm("Are you a coder?");

if (coder == true) {
	document.write(userName + " is a coder!");
} else{
	document.write(userName + " is not a coder!");
}

var age = parseInt(prompt("What's your age?"));

if (age > 30) {
	var newAge = age + 10; 
	alert(newAge + "the camerca adds ten years LOL")
} else {
	alert("sweet");
}

