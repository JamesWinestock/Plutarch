var watson = require('watson-developer-cloud');
// var auth = require('./auth.js');
var ToneAnalyzerV3 = require('watson-developer-cloud/tone-analyzer/v3');

var tone_analyzer = new ToneAnalyzerV3 ({
  username: ,
  password: ,
  version_date: '2016-05-19'
});


tone_analyzer.tone({text: proRoscio}, function(err, result){
  if (err) {
    return console.log(err);
  }
  var cats = result.document_tone.tone_categories;
  cats.forEach(function(cat){
    console.log(cat.category_name);
    cat.tones.forEach(function(tone) {
      console.log("  %s: %s", tone.tone_name, tone.score);
    })
    // console.log(JSON.stringify(result, null, 2));
  })
});
