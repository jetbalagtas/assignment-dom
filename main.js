// var totWords = document.body.textContent;
// var wordsArray = totWords.split(" ");
// var rwpm = 230;
// var readingTime = wordsArray.length / rwpm;
//
// document.getElementById('readTime').innerHTML = Math.round(readingTime);
// ^my first instinct as a n00b was to write simple equation-type vars but it is not reusable, unlike below
var readingTime = function (rwpm) {
  var totWords = document.body.textContent;
  var totSplitWords = totWords.split(" ");
  return totSplitWords.length / rwpm;
}

document.getElementById('readTime').innerHTML = Math.round(readingTime(230));
