function luckyNumbers() {
  let plays = [];
  for (p=0;p < 5;p++) {
    let play = [];
    for (l=0;l < 5;l++) { // Loop 5 times to generate 5 random numbers
      let num = Math.round(Math.random() * 70).toString(); // Random number generator
      if (num.toString().length == 1) {num = "0" + num;}; // Check if number is only 1 digit and add a zero prefix if so
        play.push((`<span class="regNums">`+ num +`</span>`)); // Create a span element with the random number
    } // End of nested for loop
  
    let powerball = Math.round(Math.random() * 25).toString();
    play.push((`<span class="powerNums">`+ powerball +`</span>`));  
    let j = play.join(' ');
    plays.push(j);
    plays.push(`<br>`);
    play = [];
  } 
  let myPlays = plays.join(' ');
  document.getElementById('test').innerHTML = myPlays;
}
