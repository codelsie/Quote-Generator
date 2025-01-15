//Predefined quotes array
const quotes = [
    { text: "The greates glory in living lies not in never failing, but in rising every time we fall.", author: "Nelson Mandela" },
    { text: "The way to get started is to quit talking and begin doing.", author: "Walt Disney" },
    { text: "Your time is limited, so don't waste it living someone else's life.", author: "Steve Jobs" },
    { text: "If life were predictable it woud ceace to be life, and be without flavor.", author: "Eleanor Roosevelt" },
    { text: "Life is what happens when you're busy making other plans.", author: "John Lennon" },
    { text: "Spread love everywhere you go. Let no one ever come to you without leaving happier.", author: "Mother Teresa" },
    { text: "Always remember that you are absolutely unique. Just like everyone else.", author: "Margaret Mead" },
    { text: "Don't judge each day by the harvest you reap but by the seeds that you plant.", author: "Robert Louis Stevenson" },
    { text: "The future belongs to those who believe in the beauty of their dreams.", author: "Eleanor Roosevelt" },
    { text: "It is during our darkest moments that we must focus to see the light.", author: "Aristotle" },
    { text: "The only way to do great work is to love what you do.", author: "Steve Jobs" },
    { text: "The future belongs to those who believe in the beauty of their dreams.", author: "Eleanor Roosevelt" },
    { text: "Believe you can and you're halfway there.", author: "Theodore Roosevelt" },
    { text: "The only limit to our realization of tomorrow will be our doubts of today.", author: "Franklin D. Roosevelt" },
    { text: "The best and most beautiful things in the world cannot be seen or even touched - they must be felt with the heart.", author: "Helen Keller" },
    { text: "In the middle of difficulty lies opportunity.", author: "Albert Einstein" },
    { text: "The greatest glory in living lies not in never falling, but in rising every time we fall.", author: "Nelson Mandela" },
    { text: "The only thing constant is change.", author: "Heraclitus" },
    { text: "The best and most beautiful things in the world cannot be seen or even touched - they must be felt with the heart.", author: "Helen Keller" },
    { text: "In the middle of difficulty lies opportunity.", author: "Albert Einstein" }, 
    { text: "The greatest glory in living lies not in never falling, but in rising every time we fall.", author: "Nelson Mandela" },
    { text: "The only thing constant is change.", author: "Heraclitus" }
];

// DOM Elements
const quoteText = document.getElementById("quote-text");
const quoteAuthor = document.getElementById("quote-author");
const generateQuoteButton = document.getElementById("generateQuote");
const copyQuoteButton = document.getElementById("copyQuote");
const shareQuoteButton = document.getElementById("shareQuote");
const themeToggle = document.getElementById("themeToggle");

// Generate a random quote
generateQuoteButton.addEventListener("click", () => {
    const randomIndex = Math.floor(Math.random() * quotes.length);
    const randomQuote = quotes[randomIndex];
    quoteText.textContent = `"${randomQuote.text}"`;
    quoteAuthor.textContent = `- ${randomQuote.author}`;
});

// Copy quote to clipboard
copyQuoteButton.addEventListener("click", () => {
    const fullQuote = `${quoteText.textContent} ${quoteAuthor.textContent}`;
    navigator.clipboard.writeText(fullQuote).then(() => {
        alert("Quote copied to clipboard!");
    });
});

//Share Quote
document.querySelectorAll(".share-btn").forEach(button => {
    button.addEventListener("click", () => {
        const platform = button.dataset.platform;
        const quote = document.getElementById("quote-text").innerText;
        const author = document.getElementById("quote-author").innerText;

        let shareUrl = "";
        const message = `"${quote}" ${author}`; // The quote content

        switch (platform) {
            case "twitter":
                shareUrl = `https://twitter.com/intent/tweet?text=${encodeURIComponent(message)}`;
                break;
            case "whatsapp":
                shareUrl = `https://wa.me/?text=${encodeURIComponent(message)}`;
                break;
            case "facebook":
                shareUrl = `https://www.facebook.com/sharer/sharer.php?u=${encodeURIComponent(message)}`;
                break;
        }

        if (shareUrl) {
            window.open(shareUrl, "_blank");
        }
    });
});

// Theme toggle
themeToggle.addEventListener("click", () => {
    document.body.classList.toggle("dark-theme");
    themeToggle.textContent = document.body.classList.contains("dark-theme") ? "Light Mode" : "Dark Mode";
});