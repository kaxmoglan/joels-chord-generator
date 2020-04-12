// Intervals & Keys

let     keys = ['C', 'C#/D♭', 'D', 'D#/E♭', 'E', 'F', 'F#/G♭', 'G', 'G#/A♭', 'A', 'A#/B♭', 'B'],

        ib9 = {name: '♭9', search: ' b9 '},
        i9 = {name: '9', search: ' 9 '},
        ib3 = {name: '♭3/#9 ', search: ' b3 '},
        i3 = {name: '3/10', search: ' 3 '},
        i4 = {name: '4/11', search: ' 4 '},
        ib5 = {name: '♭5/#11', search: ' b5 '},
        i5 = {name: '5', search: ' 5 '},
        ib6 = {name: '#5/♭6', search: ' #5 '},
        i6 = {name: '6/13', search: ' 6 '},
        ib7 = {name: '♭7', search: ' b7 '},
        i7 = {name: '7', search: ' 7 '},

        intervals = [ib9, i9, ib3, i3, i4, ib5, i5, ib6, i6, ib7, i7];

// CHORDS

let     major = {name: 'Major', formula: ' 1 3 5 '},
        add9 = {name: 'Add 9', formula: ' 1 9 3 5 '},
        addb9 = {name: 'Add ♭9', formula: ' 1 9 3 5 '},
        tenth = {name: '10th', formula: ' 1 5 3 '},
        sixth = {name: 'Sixth', formula: ' 1 3 5 6 '},
        seventh = {name: 'Seventh', formula: ' 1 3 5 b7 '},
        ninth = {name: 'Ninth', formula: ' 1 3 5 b7 9 '},
        ss9 = {name: '6/7/9', formula: ' 1 3 5 6 b7 9 '},
        s9 = {name: '6/9', formula: ' 1 3 5 6 9 '},
        sb9 = {name: '7 ♭9', formula: ' 1 3 5 b7 b9 '},
        ss9f10 = {name: '7 #9 (flattened 10th)', formula: ' 1 3 5 b7 b3 '},
        maj7 = {name: 'Maj7 (Δ)', formula: ' 1 3 5 7 '},
        maj9 = {name: 'Maj9', formula: ' 1 3 5 7 9 '},
        maj69 = {name: 'Maj6/9', formula: ' 1 3 5 6 7 9 '},
        thirteen = {name: '13', formula: '1 3 7 9 6 '},

        minor = {name: 'Minor', formula: ' 1 b3 5 '},
        min10 = {name: 'Minor 10th', formula: ' 1 5 b3 '},
        min6 = {name: 'Minor 6th', formula: ' 1 b3 5 6 '},
        min7 = {name: 'Minor 7th', formula: ' 1 b3 5 b7 '},
        min9 = {name: 'Minor 9th', formula: ' 1 b3 5 b7 9 '},
        min11 = {name: 'Minor 11th', formula: ' 1 b3 5 b7 9 4 '},
        min69 = {name: 'Minor 6/9', formula: ' 1 b3 5 6 9 '},
        minmaj7 = {name: 'Minor Maj7', formula: ' 1 b3 5 7 '},
        minmaj79 = {name: 'Minor Maj7 9', formula: ' 1 b3 5 7 9 '},
        minmaj7911 = {name: 'Minor Maj7 9 11', formula: ' 1 b3 5 7 9 4 '},
        min713 = {name: 'Minor 7/13', formula: ' 1 b3 5 6 b7 '},

        augmented = {name: 'Augmented (+) (#) [III+]', formula: ' 1 3 #5 '},
        aug7 = {name: 'Aug 7', formula: ' 1 3 #5 b7 '},
        aug79 = {name: 'Aug 7/9', formula: ' 1 3 #5 b7 9 '},
        aug7s9 = {name: 'Aug 7#9', formula: ' 1 3 #5 b7 b3 '},
        aug7b9 = {name: 'Aug 7♭9', formula: ' 1 3 #5 b7 b9 '},
        augmaj7 = {name: 'Aug Maj7', formula: ' 1 3 #5 7 '},

        flat5 = {name: 'Flattened 5th', formula: ' 1 3 b5 '},
        sixb5 = {name: '6 ♭5', formula: ' 1 3 b5 6 '},
        sevenb5 = {name: '7 ♭5', formula: ' 1 3 b5 b7 '},
        nineb5 = {name: '9 ♭5', formula: ' 1 3 b5 b7 '},
        b5b9 = {name: '♭5 ♭9', formula: ' 1 3 b5 b9 '},
        maj7b5 = {name: 'Maj7 ♭5', formula: ' 1 3 b5 7 '},

        dimtri = {name: 'Diminished Triad (°)', formula: ' 1 b3 b5 '},
        dim7 = {name: 'Dim7 (°7)', formula: ' 1 b3 b5 6 '},
        min7b5 = {name: 'm7♭5 (ø7)', formula: ' 1 b3 b5 b7 '},
        dimmaj7 = {name: 'Dim Maj7 (7#9/III)', formula: ' 1 b3 b5 7 '},

        sus2 = {name: 'Sus2', formula: ' 1 9 5 '},
        majsus2 = {name: 'Maj Sus2', formula: ' 1 9 5 7 '},
        sus4 = {name: 'Sus4', formula: ' 1 4 5 '},

        eleven = {name: '11', formula: ' 1 5 7 9 4 '},
        sus13 = {name: 'Sus13', formula: ' 1 7 9 4 6 '},
        thirteens11 = {name: '13 #11', formula: ' 1 3 7 9 b5 6 '};

// ALL CHORDS

let chords =    [major, add9, addb9, tenth, sixth, seventh, ninth, ss9, s9, sb9, ss9f10, 
                maj7, maj9, maj69, thirteen, minor, min10, min6, min7, min9, min11, min69, minmaj7, 
                minmaj79, minmaj7911, min713, augmented, aug7, aug79, aug7s9, aug7b9, augmaj7, flat5, 
                sixb5, sevenb5, nineb5, b5b9, maj7b5, dimtri, dim7, min7b5, dimmaj7, sus2, majsus2, 
                sus4, eleven, sus13, thirteens11];

// HTML ELEMENTS
let       s1 = document.getElementById('s1'),
          s2 = document.getElementById('s2'),
          s3 = document.getElementById('s3'),
          btn = document.getElementById('button'),
          btn2 = document.getElementById('button2'),
          btn3 = document.getElementById('button3'),
          timer = document.getElementById('timer');
          

// FUNCTION

let generator = () => {

  // KEY SELECTOR

  let   selectKey = Math.floor((Math.random() * keys.length)),
        chosenKey = keys[selectKey];

  // console.log(chosenKey);

  // INTERVAL SELECTOR

  let   selectInterval = Math.floor((Math.random() * intervals.length)),
        intervalName = intervals[selectInterval].name,
        intervalSearch = intervals[selectInterval].search;
  // console.log(intervalName);

  // LOOP THROUGH CHORD FORMULAS TO CHECK MATCHING INTERVAL
  // PUT MATCHING CHORD FORMULAS INTO CHORDSARRAY
  let chordsArray = [];

  for(let i = 0; i < chords.length; i++) {
    if(chords[i].formula.includes(intervalSearch)) {
      chordsArray.push(chords[i]);
    }
  }

  // PICK RANDOM INTERVAL MATCHED CHORD

  let   selectChord = Math.floor((Math.random() * chordsArray.length)),
        matchedChord = chordsArray[selectChord].name;

  // console.log(matchedChord);

  // PRINT 

  s1.innerHTML = chosenKey;
  s2.innerHTML = intervalName;
  s3.innerHTML = matchedChord;

  s3.onmouseover = () => {
    s3.innerHTML = 'hello'
  }

  s3.onmouseleave = () => {
    s3.innerHTML = matchedChord;
  }

}

// AUTOPLAY 

let userTime;

let getTimeInterval = () => {
    userTime = document.getElementById('interval').value;
    userTime = Math.ceil(userTime);
    timer.innerHTML = ' ' + userTime + 's';
  }


let time;
let stopwatch;
let clock;
let countdown;

let autoplay = () => {

  btn2.disabled = true;
  btn3.disabled = false;

  getTimeInterval();

  clock = userTime;
  countdown = clock;
  userTime = userTime * 1000;
  
  if(userTime > 0) {
    generator();
    time = setInterval(generator, userTime);
    stopwatch = setInterval(() => {
      countdown--;
      if (countdown == 0) {
        countdown = clock;
        timer.innerHTML = ' ' + countdown + 's';
      } else {
        timer.innerHTML = ' ' + countdown + 's';
      }
    }, 1000)
  } else {
    alert('Bitch');
    stop();
  }

}

let stop = () => {
  clearTimeout(time);
  clearTimeout(stopwatch);
  clock = 0;
  countdown = 0;
  btn3.disabled = true;
  btn2.disabled = false;
  timer.innerHTML = '';
  // timer.innerHTML = '';
}

btn.addEventListener('click', () => {
  generator();
  stop();
  timer.innerHTML = '';
});
btn2.addEventListener('click', autoplay);
btn3.addEventListener('click', stop);







// COUNTDOWN CLOCK EXPERIMENT

// let countdown = 10;

// let x = setInterval(() => {
//   document.getElementById('timer').innerHTML = ' ' + countdown + 's';
//   countdown--;

//   if (countdown == 0) {
//     countdown = 10;
//   }
// }, 1000)