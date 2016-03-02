//make a list of 5 of your favorite bands/musicians and put it inside of an array and store that into a variable called 
//myFavoriteMusicalArtists (make all your options lower case)
//ask the user for a band/artist, turn the user input lower case and then tell the user if you like the band too

var myFavoriteMusicalArtists = ["tswift", "bastille", "adele", "the 1975", "lorde"];
var userBand = prompt("name an musician you like pls"); 
//userBand = str.toLowerCase(); 
if (myFavoriteMusicalArtists.indexOf(userBand) != -1) {
	alert("Hey, I like that musican too XD");
};


