var fs = require('fs');
var NaturalLanguageUnderstandingV1 = require('watson-developer-cloud/natural-language-understanding/v1.js');

var nlu = new NaturalLanguageUnderstandingV1({
  username: process.env.WATSON_USERNAME,
  password: process.env.WATSON_PASSWORD,
  version_date: NaturalLanguageUnderstandingV1.VERSION_DATE_2017_02_27
});


var parameters = {
  'url': 'https://www.newidea.com.au/home-and-away-raechelle-bannos-powerful-message-to-her-fans',
  'features': {
    'entities': {
      'emotion': true,
      'sentiment': true,
      'limit': 2
    },
    'keywords': {
      'emotion': true,
      'sentiment': true,
      'limit': 2
    }
  }
}

nlu.analyze(parameters, function(err, response) {
  if (err)
    console.log('error:', err);
  else
    console.log(JSON.stringify(response, null, 2));
});


//
// nlu.analyze({
//   'url': text, // Buffer or String
//   'features': {
//     'sentiment': {
//
//     },
//     'keywords': {
//       'sentiment': true,
//       'limit': 20
//     }
//   }
// }, function(err, response) {
//      if (err)
//        console.log('error:', err);
//      else
//        console.log(JSON.stringify(response, null, 2));
//  });
