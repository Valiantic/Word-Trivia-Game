

const trivia_words = [
   "Chaussette (French for sock) also names a bat in Madagascar.",
   "Greek Push Urge: Takipsilia is the urge to push things off-balance (without them falling).",
   "Japanese Book Hoard: Tsundoku describes buying books and letting them pile up unread.",
   "Spanish After-Meal Chat: Sobremesa is the social conversation after a meal.",
   "Chilean Tablecloth Saver: Sobremesa (in Chile) is a small tablecloth placed on top to protect from crumbs."
];


function showTrivia() {
    const paragraph = document.getElementById("words");
    paragraph.textContent = "";

    const randomwords =  Math.floor(Math.random() * trivia_words.length);
    const triviawords = trivia_words[randomwords];

    paragraph.textContent = triviawords;
}

// const buttonshow = document.getElementById("buttonshowtrivia");

// // Attach click event listener to the button
// buttonshow.addEventListener("click", showTrivia);


window.onload = showTrivia;

