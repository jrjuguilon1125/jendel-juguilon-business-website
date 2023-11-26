const quotes = [
  {
    text: "It is during our darkest moments that we must focus to see the light.",
    author: "Aristotle"
  },
  {
    text: "Whoever is happy will make others happy.",
    author: "Oscar Wilde"
  },
  {
    text: "The only way to do great work is to love what you do.",
    author: "Steve Jobs"
  },
  {
    text: "If you can dream it, you can do it.",
    author: "Walt Disney"
  },
  {
    text: "The greatest glory in living lies not in never falling, but in rising every time we fall.",
    author: "Nelson Mandela"
  }
];

let currentQuoteIndex = 0;

function displayQuote() {
  const quote = quotes[currentQuoteIndex];
  const textElement = document.getElementById('text');
  const authorElement = document.getElementById('author');

  textElement.textContent = quote.text;
  authorElement.textContent = quote.author;
}

function newQuote() {
  currentQuoteIndex = Math.floor(Math.random() * quotes.length);
  displayQuote();
}

function tweetQuote() {
  const text = document.getElementById('text').textContent;
  const author = document.getElementById('author').textContent;

  window.open(`https://twitter.com/intent/tweet?text=${encodeURIComponent(text)} - ${encodeURIComponent(author)}`, '_blank');
}

document.getElementById('new-quote').addEventListener('click', newQuote);
document.getElementById('tweet-quote').addEventListener('click', tweetQuote);

displayQuote();
