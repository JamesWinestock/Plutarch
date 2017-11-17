var fs = require('fs');
var NaturalLanguageUnderstandingV1 = require('watson-developer-cloud/natural-language-understanding/v1.js');

var nlu = new NaturalLanguageUnderstandingV1({
  username: '1146e841-7a58-4aa2-8414-1986fc9b47f5',
  password: 'whaHXAnqEX8n',
  version_date: NaturalLanguageUnderstandingV1.VERSION_DATE_2017_02_27
});

//
function read(file, callback) {
  fs.readFile(file, "utf8", function(err, data) {
        if (err) {
          console.log(err);
        }
        return callback(data);
  });
}
//
// console.log(data)

// var words = "I like to eat chocolate."
function analyze(text) {

  return nlu.analyze({
    'text': text, // Buffer or String
    'features': {
      'sentiment': {

      },
      'keywords': {
        'sentiment': true,
        'limit': 10
      }
    }
  }, function(err, response) {
       if (err)
         console.log('error:', err);
       else
         console.log("response from watson: ", JSON.stringify(response, null, 2));
         return JSON.stringify(response, null, 2);
   });
}


console.log('output: ', read('text.txt', analyze))
