var keyWords = [
	"third",
	"party",
	"affiliates",
	"advertisers",
	"advertiser",
	"advertisement",
	"consent",
	"cookies",
	"liable",
	"liability",
	"data",
	"automatic",
	"renewal",
	"discretion",
	"location",
	"tracking",
	"track",
	"information"
];

function processTerms() {
  //console.log("made it here");
  document.getElementById('outputL').innerHTML = ""; 
  document.getElementById('outputR').innerHTML = "";  
  var report = [];

  text = document.getElementById('terms').value;
  text = text.split(" ");
  console.log(text);
  
  for (var i = 0; i < text.length; i++) {
	if (keyWords.includes(text[i]) && !report.includes(text[i])) {
	  report.push(text[i]);
	}
  }
  if (report.length == 0) {
	 document.getElementById('title').innerHTML = 'There are no key terms in this policy.';
  }
  else {
    document.getElementById('title').innerHTML = 'Key terms in this  policy:\n';
  }
  //document.getElementById('output').innerHTML = '<b>Third-parties</b>: Other parties may be receiving your data without your knowledge or consent.<br>';
  //document.getElementById('output').innerHTML += '<b>Identify</b>: Your information may or may not be identifiable to you. See <i>Protecting your Privacy</i> for more information.';
    

  for (var j = 0; j < report.length; j++) {
    console.log(report[j]);
	document.getElementById('outputR').innerHTML += report[j] + "<br>";
  }
}

