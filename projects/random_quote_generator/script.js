const quotes = [
  "Success is built one small step at a time.",
  "Discipline beats motivation every single day.",
  "Your future depends on what you do today.",
  "Consistency creates extraordinary results.",
  "Dream big, but work even bigger.",
  "The hardest choices lead to the strongest growth.",
  "Don't count the days, make the days count.",
  "Failure is a lesson, not a destination.",
  "Stay patient; progress takes time.",
  "Great things never come from comfort zones.",
  "Focus on progress, not perfection.",
  "Every expert was once a beginner.",
  "Your only competition is yesterday's version of you.",
  "Small daily improvements lead to remarkable achievements.",
  "Work hard in silence; let success make the noise.",
  "Difficult roads often lead to beautiful destinations.",
  "The best investment is in yourself.",
  "Nothing changes until you take action.",
  "Believe in yourself even when no one else does.",
  "Success starts with the decision to try."
];

const button = document.querySelector('button');

const quote = document.querySelector('h1');

button.addEventListener('click',()=>{
  const index = Math.floor(Math.random() * quotes.length);
  quote.textContent = quotes[index];
})

