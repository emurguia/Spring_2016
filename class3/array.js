var animals = ['parrot', 'bear', 'tiger'];

var inList = function(search){
if (animals.indexOf(search) != -1) {
	return true;
 } else if(animals.indexOf(search) ==-1){
 	return false; 
 }
}

var getRandom = function(array){
	var randomIndex = Math.floor(Math.random()*array.length);
	return array[randomIndex];
}

//changes to end of array - push to add to array, pop to subtract from array 
//chnages to beginning of array - unshift to add, shift to subtract
