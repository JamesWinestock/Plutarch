var watson = require('watson-developer-cloud');
// var auth = require('./auth.js');
var ToneAnalyzerV3 = require('watson-developer-cloud/tone-analyzer/v3');

var tone_analyzer = new ToneAnalyzerV3 ({
  username: "2da271a8-6922-4dd2-8c72-58609127a53b",
  password: "dtzzo82uYQB3",
  version_date: '2016-05-19'
});


var inVerrem = "Gentlemen of the Court: At this great political crisis, there seems to have been offered to you, not through man’s wisdom but almost as the direct gift of heaven, the very thing that was most to be desired; a thing that will help, more than anything else, to mitigate the unpopularity of your Order and the discredit attaching to these Courts of Law. A belief has by this time established itself, as harmful to the whole nation as it is perilous to yourselves, and everywhere expressed not merely by our own people but by foreigners as well: the belief that these Courts, constituted as they now are, will never convict any man, however guilty, if only he has money. And now, at the moment of supreme danger for your Order and your judicial privileges, when preparations have been made for an attempt, by means of public meetings and proposals for legislation, to fan the flames of senatorial unpopularity, Gaius Verres appears, to stand his trial before you: a man already condemned, in the world’s opinion, by his life and deeds; already acquitted, according to his own confident assertions, by his vast fortune. In this case, gentlemen, I appear as prosecutor, backed by the strong approval and keen interest of the nation; not to increase the unpopularity";

var proMurena = "On that day, gentlemen of the jury, on which after I had taken the auspices I announced Lucius Murena’s election as consul to the assembly of the centuries, I prayed to the immortal gods according to the traditional usage of our ancestorsb that his election should bring all good fortune to myself, my trust, my office and to the people and commons of Rome. Today I pray again to those same immortal gods that Murena’s acquittal may preserve him for his consulship, that your opinion given in your verdict may tally with the wishes of the Roman people expressed in their votes, and that this agreement may bring peace, calm, tranquillity and harmony to yourselves and to the people of Rome. Believing that that customary election prayer, hallowed by the auspices taken by a consul, has the force and religious weight that the majesty of the Republic demands, I prayed too that the election over which I presided should bring to the successful candidates all good fortune and prosperity. Accordingly, gentlemen, since the immortal gods have either transferred to you their whole power or at least have allowed you to share it, I now commend to your protection the consul whom I"

var proRoscio = "Gentlemen of the jury, you probably wonder why, when so many eminent orators and illustrious citizens remain seated, it is I, rather than any of them, who have risen to speak, though neither in age, nor ability, nor authority, can I be compared with them. All those whom you see here supporting the accused are of opinion that in this case an unjust charge, concocted by an unexampled act of villainy, should be repelled, but dare not undertake the task themselves owing to the unfavourable conditions of the times. Hence it is that they are present in fulfilment of a duty, but remain silent because they are desirous of avoiding danger. What then? Am I the boldest of all? By no means. Or am I so much more eager to render a service than the rest? I am not so eager even for that title to praise, as to wish others to be deprived of it. What then was the reason that impelled me, more than anyone else, to undertake the defence of Sextus Roscius? The reason is this. If any of those whom you see here, in whom the highest authority and dignity are vested, had risen to speak and uttered a word about public affairs—a thing impossible to avoid doing in a case like this—it would be made out that he had said much more than he really did"

var proCaelio = "Men of spirit may indeed have just cause for attacking Marcus Caelius. But you in your wisdom, gentlemen, will appreciate that you should not on this account be guided by other people’s grievances rather than by your sense of honour"

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
