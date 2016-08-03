// I=1
// V=5
// X=10
// L=50
// C=100
// D=500
// M=1000
// kick back roman Numeral from a given numerical input

// var I = 1;
// var V = 5;
// var X = 10;
// var L = 50;
// var C = 100;
// var D = 500;
// var M = 1000;

// var romanNumeral = "";




// function romanize(input){
// 	if((input % 1000 >= 0) && (input % 1000 !== input)){
// 		romanNumeral += "M";
// 		input - 1000;
// 		singleDigits(input);
// 		// if(input.length > 2){
// 		// 	var secondDigit = Math.floor(secondDigit / 100);
// 		// }
// 	}
// 	return romanNumeral;
// }
// console.log(romanize(1004));

// function singleDigits(input){
// 	if(input == 5){
// 		romanNumeral += "V";
// 	}else if(input == 4){
// 		romanNumeral.splice(romanNumeral.length - 1, 0, "IV")
// 	}else if(input == 3){
// 		romanNumeral += "III";
// 	}else if(input == 2){
// 		romanNumeral += "II";
// 	}else if(input == 1){
// 		romanNumeral += "I";
// 	}
// }


function romanize(num) {
  var lookup = {M:1000,CM:900,D:500,CD:400,C:100,XC:90,L:50,XL:40,X:10,IX:9,V:5,IV:4,I:1};
  var roman = '';
  var i;
  for ( i in lookup ) {
    while ( num >= lookup[i] ) {
      roman += i;
      num -= lookup[i];
    }
  }
  return roman;
}