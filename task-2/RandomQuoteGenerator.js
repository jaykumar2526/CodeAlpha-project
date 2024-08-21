
const quotes = [
    { quote: "People always think something’s all true.", author: "J.D. Salinger, The Catcher in the Rye" },
    { quote: "You never really understand a person until you consider things from his point of view... Until you climb into his skin and walk around in it.", author: "Harper Lee, To Kill a Mockingbird" },
    { quote: "War is peace. Freedom is slavery. Ignorance is strength.", author: "George Orwell, 1984" },
    { quote: "It is a truth universally acknowledged, that a single man in possession of a good fortune, must be in want of a wife.", author: "Jane Austen, Pride and Prejudice" },
    { quote: "Call me Ishmael.", author: "Herman Melville, Moby-Dick" },
    { quote: "So we beat on, boats against the current, borne back ceaselessly into the past.", author: "F. Scott Fitzgerald, The Great Gatsby" },
    { quote: "It's enough for me to be sure that you and I exist at this moment.", author: "Gabriel Garcia Marquez, One Hundred Years of Solitude" },
    { quote: "There is some good in this world, and it's worth fighting for.", author: "J.R.R. Tolkien, The Hobbit" },
    { quote: "Happiness is the highest good.", author: "Aldous Huxley, Brave New World" },
    { quote: "He was going to live forever, or die in the attempt.", author: "Joseph Heller, Catch-22" },
    { quote: "All animals are equal, but some animals are more equal than others.", author: "George Orwell, Animal Farm" },
    { quote: "I am no bird; and no net ensnares me: I am a free human being with an independent will.", author: "Charlotte Brontë, Jane Eyre" },
    { quote: "The only thing we have to fear is fear itself.", author: "Franklin D. Roosevelt, Speech (often quoted in literature)" },
    { quote: "I felt my lungs inflate with the onrush of scenery—air, mountains, trees, people. I thought, 'This is what it is to be alive.'", author: "Sylvia Plath, The Bell Jar" },
    { quote: "The past is a foreign country: they do things differently there.", author: "L.P. Hartley, The Go-Between" },
    { quote: "We are all fools in love.", author: "Jane Austen, Pride and Prejudice" },
    { quote: "It's a truth universally acknowledged, that a single man in possession of a good fortune, must be in want of a wife.", author: "Jane Austen, Pride and Prejudice" },
    { quote: "I am no bird; and no net ensnares me: I am a free human being with an independent will.", author: "Charlotte Brontë, Jane Eyre" },
    { quote: "Not all those who wander are lost.", author: "J.R.R. Tolkien, The Lord of the Rings" },
    { quote: "The world breaks everyone, and afterward, some are strong at the broken places.", author: "Ernest Hemingway, A Farewell to Arms" },
    { quote: "The only way out of the labyrinth of suffering is to forgive.", author: "John Green, Looking for Alaska" },
    { quote: "It is better to be hated for what you are than to be loved for what you are not.", author: "Andre Gide, The Immoralist" },
    { quote: "We are such stuff as dreams are made on, and our little life is rounded with a sleep.", author: "William Shakespeare, The Tempest" },
    { quote: "In three words I can sum up everything I've learned about life: it goes on.", author: "Robert Frost" },
    { quote: "All that is gold does not glitter, not all those who wander are lost.", author: "J.R.R. Tolkien, The Lord of the Rings" },
    { quote: "It is not our abilities that show what we truly are… it is our choices.", author: "J.K. Rowling, Harry Potter and the Chamber of Secrets" },
    { quote: "So it goes.", author: "Kurt Vonnegut, Slaughterhouse-Five" },
    { quote: "Life is what happens when you're busy making other plans.", author: "John Lennon, attributed in literature" },
    { quote: "To be yourself in a world that is constantly trying to make you something else is the greatest accomplishment.", author: "Ralph Waldo Emerson" },
    { quote: "It is never too late to be what you might have been.", author: "George Eliot" },
    { quote: "I am not what happened to me, I am what I choose to become.", author: "Carl Jung" },
    { quote: "The best way to predict your future is to create it.", author: "Peter Drucker" },
    { quote: "Everything you can imagine is real.", author: "Pablo Picasso" },
    { quote: "To live is the rarest thing in the world. Most people exist, that is all.", author: "Oscar Wilde" },
    { quote: "Whatever our souls are made of, his and mine are the same.", author: "Emily Brontë, Wuthering Heights" },
    { quote: "The most beautiful experience we can have is the mysterious. It is the fundamental emotion that stands at the cradle of true art and true science.", author: "Albert Einstein" },
    { quote: "You must be the change you wish to see in the world.", author: "Mahatma Gandhi" },
    { quote: "The unexamined life is not worth living.", author: "Socrates" },
    { quote: "Everything has beauty, but not everyone sees it.", author: "Confucius" },
    { quote: "The truth is rarely pure and never simple.", author: "Oscar Wilde, The Importance of Being Earnest" },
    { quote: "We accept the love we think we deserve.", author: "Stephen Chbosky, The Perks of Being a Wallflower" },
    { quote: "We all have the extraordinary coded within us, waiting to be released.", author: "Jean Houston" },
    { quote: "You only live once, but if you do it right, once is enough.", author: "Mae West" },
    { quote: "It is not how much we have, but how much we enjoy, that makes happiness.", author: "Charles Spurgeon" },
    { quote: "I am no longer afraid of the truth, no matter where it leads.", author: "Ayn Rand" },
    { quote: "Happiness is not something ready-made. It comes from your own actions.", author: "Dalai Lama" },
    { quote: "You can't go back and change the beginning, but you can start where you are and change the ending.", author: "C.S. Lewis" },
    { quote: "The mind is everything. What you think you become.", author: "Buddha" },
    { quote: "I am a part of everything that I have read.", author: "Theodore Roosevelt" },
    { quote: "Everything in life is temporary, so if things are going well, enjoy it because it won’t last forever. And if things are going bad, don’t worry. It can’t last forever either.", author: "Jenni Young" },
    { quote: "The best revenge is massive success.", author: "Frank Sinatra" },
    { quote: "Success is not final, failure is not fatal: It is the courage to continue that counts.", author: "Winston Churchill" },
    { quote: "The only limit to our realization of tomorrow is our doubts of today.", author: "Franklin D. Roosevelt" },
    { quote: "Don’t watch the clock; do what it does. Keep going.", author: "Sam Levenson" },
    { quote: "Act as if what you do makes a difference. It does.", author: "William James" },
    { quote: "The only way to do great work is to love what you do.", author: "Steve Jobs" },
    { quote: "To live is the rarest thing in the world. Most people exist, that is all.", author: "Oscar Wilde" },
    { quote: "The only impossible journey is the one you never begin.", author: "Tony Robbins" },
    { quote: "Believe you can and you’re halfway there.", author: "Theodore Roosevelt" }
  ];
  
  function getRandomQuote() {
    const randomIndex = Math.floor(Math.random() * quotes.length);
    return quotes[randomIndex];
  }
  
  function displayQuote() {
    const { quote, author } = getRandomQuote();
    document.getElementById('quote').textContent = quote;
    document.getElementById('author').textContent = `— ${author}`;
  }
  
  document.getElementById('new-quote').addEventListener('click', displayQuote);
  
  document.getElementById('share-quote').addEventListener('click', () => {
    const quote = document.getElementById('quote').textContent;
    const author = document.getElementById('author').textContent;
    const encodedQuote = encodeURIComponent(`"${quote}" ${author}`);
  
    // Static URL pointing to a page with the quote (replace with actual URL if you have one)
    const shareUrl = `https://example.com/share?quote=${encodedQuote}`;
  
    const linkedInUrl = `https://www.linkedin.com/sharing/share-offsite/?url=${encodeURIComponent(shareUrl)}`;
    window.open(linkedInUrl, '_blank');
  });

  displayQuote();
  