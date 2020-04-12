// Intervals & Keys
let     keyboard = ['C', 'C#', 'D', 'E♭', 'E', 'F', 'F#', 'G', 'A♭', 'A', 'B♭', 'B',
                    'C', 'C#', 'D', 'E♭', 'E', 'F', 'F#', 'G', 'A♭', 'A', 'B♭', 'B',
                    'C', 'C#', 'D', 'E♭', 'E', 'F', 'F#', 'G', 'A♭', 'A', 'B♭', 'B'],

        ib9 = {name: '♭9', search: ' b9 ', note: 1},
        i9 = {name: '9', search: ' 9 ', note: 2},
        ib3 = {name: '♭3/#9 ', search: ' b3 ', note: 3},
        i3 = {name: '3/10', search: ' 3 ', note: 4},
        i4 = {name: '4/11', search: ' 4 ', note: 5},
        ib5 = {name: '♭5/#11', search: ' b5 ', note: 6},
        i5 = {name: '5', search: ' 5 ', note: 7},
        ib6 = {name: '#5/♭6', search: ' #5 ', note: 8},
        i6 = {name: '6/13', search: ' 6 ', note: 9},
        ib7 = {name: '♭7', search: ' b7 ', note: 10},
        i7 = {name: '7', search: ' 7 ', note: 11},

        intervals = [ib9, i9, ib3, i3, i4, ib5, i5, ib6, i6, ib7, i7];

// CHORDS

let     major = {name: 'Major', formula: ' 1 3 5 ', answer: '1, 3, 5', notes: [0, 4, 7]},
        add9 = {name: 'Add 9', formula: ' 1 9 3 5 ', answer: '1, 3, 5, 9', notes: [0, 4, 7, 14]},
        addb9 = {name: 'Add ♭9', formula: ' 1 b9 3 5 ', answer: '1, 3, 5, ♭9', notes: [0, 4, 7, 13]},
        tenth = {name: '10th', formula: ' 1 5 3 ', answer: '1, 5, 10', notes: [0, 7, 16]},
        sixth = {name: 'Sixth', formula: ' 1 3 5 6 ', answer: '1, 3, 5, 6', notes: [0, 4, 7, 9]},
        seventh = {name: 'Seventh', formula: ' 1 3 5 b7 ', answer: '1, 3, 5, ♭7', notes: [0, 4, 7, 10]},
        ninth = {name: 'Ninth', formula: ' 1 3 5 b7 9 ', answer: '1, 3, 5, ♭7, 9', notes: [0, 4, 7, 10, 14]},
        ss9 = {name: '6/7/9', formula: ' 1 3 5 6 b7 9 ', answer: '1, 3, 5, 6, ♭7, 9', notes: [0, 4, 7, 9, 10, 14]},
        s9 = {name: '6/9', formula: ' 1 3 5 6 9 ', answer: '1, 3, 5, 6, 9', notes: [0, 4, 7, 9, 14]},
        sb9 = {name: '7 ♭9', formula: ' 1 3 5 b7 b9 ', answer: '1, 3, 5, ♭7, ♭9', notes: [0, 4, 7, 10, 14]},
        ss9f10 = {name: '7 #9 (flattened 10th)', formula: ' 1 3 5 b7 b3 ', answer: '1, 3, 5, ♭7, ♭10', notes: [0, 4, 7, 10, 15]},
        maj7 = {name: 'Maj7 (Δ)', formula: ' 1 3 5 7 ', answer: '1, 3, 5, 7', notes: [0, 4, 7, 11]},
        maj9 = {name: 'Maj9', formula: ' 1 3 5 7 9 ', answer: '1, 3, 5, 7, 9', notes: [0, 4, 7, 11, 14]},
        maj69 = {name: 'Maj6/9', formula: ' 1 3 5 6 7 9 ', answer: '1, 3, 5, 6, 7, 9', notes: [0, 4, 7, 9, 11, 14]},
        thirteen = {name: '13', formula: '1 3 7 9 6 ', answer: '1, 3, 7, 9, 13', notes: [0, 4, 11, 14, 21]},

        minor = {name: 'Minor', formula: ' 1 b3 5 ', answer: '1, ♭3, 5', notes: [0, 3, 7]},
        min10 = {name: 'Minor 10th', formula: ' 1 5 b3 ', answer: '1, 5, ♭10', notes: [0, 7, 15]},
        min6 = {name: 'Minor 6th', formula: ' 1 b3 5 6 ', answer: '1, ♭3, 5, 6', notes: [0, 3, 7, 9]},
        min7 = {name: 'Minor 7th', formula: ' 1 b3 5 b7 ', answer: '1, ♭3, 5, ♭7', notes: [0, 3, 7, 10]},
        min9 = {name: 'Minor 9th', formula: ' 1 b3 5 b7 9 ', answer: '1, ♭3, 5, ♭7, 9', notes: [0, 3, 7, 10, 14]},
        min11 = {name: 'Minor 11th', formula: ' 1 b3 5 b7 9 4 ', answer: '1, ♭3, 5, ♭7, 9, 11', notes: [0, 3, 7, 10, 14, 17]},
        min69 = {name: 'Minor 6/9', formula: ' 1 b3 5 6 9 ', answer: '1, ♭3, 5, 6, 9', notes: [0, 3, 7, 9, 14]},
        minmaj7 = {name: 'Minor Maj7', formula: ' 1 b3 5 7 ', answer: '1, ♭3, 5, 7', notes: [0, 3, 7, 11]},
        minmaj79 = {name: 'Minor Maj7 9', formula: ' 1 b3 5 7 9 ', answer: '1, ♭3, 5, 7, 9', notes: [0, 3, 7, 11, 14]},
        minmaj7911 = {name: 'Minor Maj7 9 11', formula: ' 1 b3 5 7 9 4 ', answer: '1, ♭3, 5, 7, 9, 11', notes: [0, 3, 7, 11, 14, 17]},
        min713 = {name: 'Minor 7/13', formula: ' 1 b3 5 6 b7 ', answer: '1, ♭3, 5, 6, ♭7', notes: [0, 3, 7, 9, 10]},

        augmented = {name: 'Augmented (+) (#) [III+]', formula: ' 1 3 #5 ', answer: '1, 3, #5', notes: [0, 4, 8]},
        aug7 = {name: 'Aug 7', formula: ' 1 3 #5 b7 ', answer: '1, 3, #5, ♭7', notes: [0, 4, 8, 10]},
        aug79 = {name: 'Aug 7/9', formula: ' 1 3 #5 b7 9 ', answer: '1, 3, #5, ♭7, 9', notes: [0, 4, 8, 10, 14]},
        aug7s9 = {name: 'Aug 7#9', formula: ' 1 3 #5 b7 b3 ', answer: '1, 3, #5, ♭7, ♭10', notes: [0, 4, 8, 10, 15]},
        aug7b9 = {name: 'Aug 7♭9', formula: ' 1 3 #5 b7 b9 ', answer: '1, 3, #5, ♭7, ♭9', notes: [0, 4, 8, 10, 13]},
        augmaj7 = {name: 'Aug Maj7', formula: ' 1 3 #5 7 ', answer: '1, 3, #5, 7', notes: [0, 4, 8, 11]},

        flat5 = {name: 'Flattened 5th', formula: ' 1 3 b5 ', answer: '1, 3, ♭5', notes: [0, 4, 6]},
        sixb5 = {name: '6 ♭5', formula: ' 1 3 b5 6 ', answer: '1, 3, ♭5, 6', notes: [0, 4, 6, 9]},
        sevenb5 = {name: '7 ♭5', formula: ' 1 3 b5 b7 ', answer: '1, 3, ♭5, ♭7', notes: [0, 4, 6, 10]},
        nineb5 = {name: '9 ♭5', formula: ' 1 3 b5 b7 9 ', answer: '1, 3, ♭5, ♭7, 9', notes: [0, 4, 6, 10, 14]},
        b5b9 = {name: '♭5 ♭9', formula: ' 1 3 b5 b9 ', answer: '1, 3, ♭5, ♭9', notes: [0, 4, 6, 13]},
        maj7b5 = {name: 'Maj7 ♭5', formula: ' 1 3 b5 7 ', answer: '1, 3, ♭5, 7', notes: [0, 4, 6, 11]},

        dimtri = {name: 'Diminished Triad (°)', formula: ' 1 b3 b5 ', answer: '1, ♭3, ♭5', notes: [0, 3, 6]},
        dim7 = {name: 'Dim7 (°7)', formula: ' 1 b3 b5 6 ', answer: '1, ♭3, ♭5, 6', notes: [0, 3, 6, 9]},
        min7b5 = {name: 'm7♭5 (ø7)', formula: ' 1 b3 b5 b7 ', answer: '1, ♭3, ♭5, ♭7', notes: [0, 3, 6, 10]},
        dimmaj7 = {name: 'Dim Maj7 (7#9/III)', formula: ' 1 b3 b5 7 ', answer: '1, ♭3, ♭5, 7', notes: [0, 3, 6, 11]},

        sus2 = {name: 'Sus2', formula: ' 1 9 5 ', answer: '1, 2, 5', notes: [0, 2, 7]},
        majsus2 = {name: 'Maj Sus2', formula: ' 1 9 5 7 ', answer: '1, 2, 5, 7', notes: [0, 2, 7, 11]},
        sus4 = {name: 'Sus4', formula: ' 1 4 5 ', answer: '1, 4, 5', notes: [0, 5, 7]},

        eleven = {name: '11', formula: ' 1 5 7 9 4 ', answer: '1, 5, 7, 9, 11', notes: [0, 7, 11, 14, 17]},
        sus13 = {name: 'Sus13', formula: ' 1 7 9 4 6 ', answer: '1, 7, 9, 11, 13', notes: [0, 11, 14, 17, 21]},
        thirteens11 = {name: '13 #11', formula: ' 1 3 7 9 b5 6 ', answer: '1, 3, 7, 9, #11, 13', notes: [0, 4, 11, 14, 18, 21]};

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
          slot1 = document.getElementById('slot1'),
          slot2 = document.getElementById('slot2'),
          slot3 = document.getElementById('slot3'),
          btn = document.getElementById('button'),
          btn2 = document.getElementById('button2'),
          btn3 = document.getElementById('button3'),
          timer = document.getElementById('timer');
          

// FUNCTION

let generator = () => {

  // KEY SELECTOR

  let   selectKey = Math.floor((Math.random() * keyboard.length)),
        chosenKey = keyboard[selectKey],
        key = 0;

  let keyFinder = () => {
    if(chosenKey === 'C') {
      key = 0;
    } else if(chosenKey === 'C#') {
      key = 1;
    } else if(chosenKey === 'D') {
      key = 2;
    } else if(chosenKey === 'E♭') {
      key = 3;
    } else if(chosenKey === 'E') {
      key = 4;
    } else if(chosenKey === 'F') {
      key = 5;
    } else if(chosenKey === 'F#') {
      key = 6;
    } else if(chosenKey === 'G') {
      key = 7;
    } else if(chosenKey === 'A♭') {
      key = 8;
    } else if(chosenKey === 'A') {
      key = 9;
    } else if(chosenKey === 'B♭') {
      key = 10;
    } else if(chosenKey === 'B') {
      key = 11;
    } else {
      key = 0
    }
  }

  keyFinder();

  // console.log(chosenKey);

  // INTERVAL SELECTOR

  let   selectInterval = Math.floor((Math.random() * intervals.length)),
        intervalName = intervals[selectInterval].name,
        intervalSearch = intervals[selectInterval].search,
        intervalNote = intervals[selectInterval].note,
        intervalNoteName = keyboard[key + intervalNote];
  // console.log(intervalName);

  // console.log(intervalNoteName);


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
        matchedChord = chordsArray[selectChord].name,
        selectChordNotes = chordsArray[selectChord].notes,
        chordNotes = [],
        newChordIndex = [],
        chordString = '';

  // SELECTED CHORD NOTES
  for (let i = 0; i < selectChordNotes.length; i++) {
    newChordIndex.push(selectChordNotes[i] + key)
  }
  
  for(let i = 0; i < selectChordNotes.length; i++) {
    chordNotes.push(keyboard[newChordIndex[i]]);
  }

  for(let i = 0; i < chordNotes.length; i++) {
    chordString += chordNotes[i] + ', ';
  }
  
  // console.log(chordString);

  // PRINT 

  s1.innerHTML = chosenKey;
  s2.innerHTML = intervalName;
  s3.innerHTML = matchedChord;
  chordString = chordString.slice(0, -2);


  slot2.onmouseover = () => {
    s2.innerHTML = intervalNoteName;
  }

  slot2.onmouseleave = () => {
    s2.innerHTML = intervalName;
  }

  slot3.onmouseover = () => {
    s3.innerHTML = chordString;
    s3b.innerHTML = chordsArray[selectChord].answer;
  }

  slot3.onmouseleave = () => {
    s3.innerHTML = matchedChord;
    s3b.innerHTML = '';
  }

  // SNEAK PEAK
  let sneakButton = document.getElementById('status');
  let s3b = document.getElementById('s3b');
  sneakButton.onmousedown = () => {
    s2.innerHTML = intervalNoteName;
    s3.innerHTML = chordString
    s3b.innerHTML = chordsArray[selectChord].answer;
  }

  sneakButton.onmouseup = () => {
    s2.innerHTML = intervalName;
    s3.innerHTML = matchedChord;
    s3b.innerHTML = '';
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