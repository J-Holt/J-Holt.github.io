function luckyNumbers() {
  let plays = [];
  for (p=0;p < 5;p++) {
    let play = [];
    for (l=0;l < 5;l++) {
      let num = Math.round(Math.random() * 70).toString();
      if (num == 0) {num = Math.round(Math.random() * 70).toString();}
      if (num.toString().length == 1) {num = "0" + num};
        play.push((`<span class="regNums">`+ num +`</span>`));
    }
  
    let powerball = Math.round(Math.random() * 25).toString();
    if (powerball == 0) {powerball = Math.round(Math.random() * 70).toString();}
    if (powerball.toString().length == 1) {powerball = "0" + powerball;}; 
    play.push((`<span class="powerNums">`+ powerball +`</span>`));  
    let j = play.join(' ');
    plays.push(j);
    plays.push(`<br>`);
    play = [];
  } 
  let myPlays = plays.join(' ');
  document.getElementById('test').innerHTML = myPlays;
  
}
