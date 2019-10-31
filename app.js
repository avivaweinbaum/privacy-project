


function processTerms() {
  console.log("made it here");
  text = document.getElementById('terms').value;
  console.log(text);
  document.getElementById('title').innerHTML = 'Key terms in this  policy:\n';
  //document.getElementById('output').innerHTML = '<b>Third-parties</b>: Other parties may be receiving your data without your knowledge or consent.<br>';
  //document.getElementById('output').innerHTML += '<b>Identify</b>: Your information may or may not be identifiable to you. See <i>Protecting your Privacy</i> for more information.';
  document.getElementById('output').innerHTML = text + ':\n';
}

