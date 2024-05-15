
const quotes = [
  "'A room without books is like a body without a soul.'  {Marcus Tullius Cicero}",
 "Two things are infinite: the universe and human stupidity; and I'm not sure about the universe.        {Albert Einstein}",
  "'Your time is limited, don't waste it living someone else's life.' {Steve Jobs}",
  "'Success is not final, failure is not fatal: It is the courage to continue that counts.'  {Winston Churchill}",
  "'You know you're in love when you can't fall asleep because reality is finally better than your dreams.'  {Dr. Seuss}"
];


function generateQuote() {
  const x = Math.floor(Math.random()* quotes.length );
  document.getElementById("quote").innerHTML=quotes[x];
}
// 