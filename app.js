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
	"information",
	"protect"
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
    document.getElementById('outputL').innerHTML = out; 

  }

}

