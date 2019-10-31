


function processTerms() {
  console.log("made it here");
  text = document.getElementById('terms').value;
  console.log(text);
  document.getElementById('title').innerHTML = 'This policy includes:\n';
  document.getElementById('output').innerHTML = 'Third parties.....';
  //document.getElementById('output').innerHTML = 'This policy includes: ' + text;
}

