var keyWords = [
	"third",
	"party",
	"parties",
	"party's",
	"third-party",
	"third-parties",
	"third-party's",
	"responsible",
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
  document.getElementById('outputL').innerHTML = ""; 
  document.getElementById('outputR').innerHTML = "";  
  var report = [];

  text = document.getElementById('terms').value;
  var arr  = text.split(" ");
  
  for (var i = 0; i < arr.length; i++) {
	if (keyWords.includes(arr[i]) && !report.includes(arr[i])) {
	  report.push(arr[i]);
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

  var out = "";
  
  for (var n = 0; n < arr.length; n++) {
    if (keyWords.includes(arr[n])) {
	  out += "<b class='bolded'>" + arr[n] + "</b>";
    }
	else {
	  out += arr[n];
	}
    out += " ";
  }
  console.log(out);
  document.getElementById('outputL').innerHTML = out; 

}

