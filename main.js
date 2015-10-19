// var totWords = document.body.textContent;
// var wordsArray = totWords.split(" ");
// var rwpm = 230;
// var readingTime = wordsArray.length / rwpm;
//
// document.getElementById('readTime').innerHTML = Math.round(readingTime);
// var rwpm = 230;
var readingTime = function (rwpm) {
  var totWords = document.body.textContent;
  var totSplitWords = totWords.split(" ");
  return totSplitWords.length / rwpm;
}
// return readingTime(230);

document.getElementById('readTime').innerHTML = Math.round(readingTime(230));
