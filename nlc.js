var fs = require('fs');
var NaturalLanguageUnderstandingV1 = require('watson-developer-cloud/natural-language-understanding/v1.js');

var nlu = new NaturalLanguageUnderstandingV1({
  username: '1146e841-7a58-4aa2-8414-1986fc9b47f5',
  password: 'whaHXAnqEX8n',
  version_date: NaturalLanguageUnderstandingV1.VERSION_DATE_2017_02_27
});

var readFile = fs.readFile("text.txt", "utf8", function(error, data) {
    console.log("Contents of file: " + data);
});



nlu.analyze({
  'text': words, // Buffer or String
  'features': {
    'sentiment': {

    },
    'keywords': {
      'sentiment': true,
      'limit': 20
    }
  }
}, function(err, response) {
     if (err)
       console.log('error:', err);
     else
       console.log(JSON.stringify(response, null, 2));
 });
