var fs = require('fs');
var NaturalLanguageUnderstandingV1 = require('watson-developer-cloud/natural-language-understanding/v1.js');

var nlu = new NaturalLanguageUnderstandingV1({
  username: '1146e841-7a58-4aa2-8414-1986fc9b47f5',
  password: 'whaHXAnqEX8n',
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
