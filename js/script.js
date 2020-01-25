/******************************************
Treehouse FSJS Techdegree:
project 1 - A Random Quote Generator
******************************************/

// For assistance:
  // Check the "Project Resources" section of the project instructions
  // Reach out in your Slack community - https://treehouse-fsjs-102.slack.com/app_redirect?channel=chit-chat



var quotes = [
    {
       author: 'Franklin D. Roosevelt',
       quote: 'The only thing we have to fear is fear itself.',
       year: '1941',
       from:'Speech to Congress'
    },
    {
       author: 'General George Patton',
       quote: 'If everyone is thinking alike, someone isn’t thinking.'
    },
    {
       author: 'Winston Churchill',
       quote: '…we shall fight on the beaches, we shall fight on the landing grounds, we shall fight in the fields and in the streets, we shall fight in the hills; we shall never surrender…',
       year: '1940',
       from:'House of Commons'
    },
    {
       author: 'Will Rodgers',
       quote: 'You can\'t say civilization don\'t advance ... in every war they kill you in a new way.',
       year:'1928',
    },
    {
       author: 'Plato',
       quote: 'Only the dead have seen the end of war.'
    },
    {
       author: 'Sun Tzu',
       quote: 'Appear weak when you are strong, and strong when you are weak.',
       from:'Art of War'
    },
    {
       author: 'Don Delillo',
       quote: 'War is the ultimate realization of modern technology.'
    },
    {
       author: 'Albert Einstein',
       quote: 'I do not know with what weapons World War III will be fought, but I do know that World War IV will be fought with spears..',
       year: '1946',

    },
    {
       author: 'Lewis F. Korns',
       quote: 'The nation having the strongest war footing can easily find an excuse for going to war.'
    }




];





/***
 * `getRandomQuote` function
***/
function getRandomQuote() {
   return Math.floor(Math.random() * quotes.length)
};


/***
 * `printQuote` function
***/
function printQuote(){
    var quotetoShow = quotes[getRandomQuote()];
    var quoteNew=quotetoShow.quote;
    var authorNew=quotetoShow.author;
    var fromNew=quotetoShow.from;
    var yearNew=quotetoShow.year;

    document.querySelector("#quote-box").innerHTML="<p class='quote'>"+quoteNew+"</p>"+"<p class='source'>"+authorNew+"<span class='citation'>"+fromNew+"</span>"+"<span class='year'>"+yearNew+"</span>"+"</p>";
    if (fromNew==undefined){
    document.querySelector(".citation").classList.add("hide");}
    if (yearNew==undefined){
      document.querySelector(".year").classList.add("hide");}


}


/***
 * click event listener for the print quote button
 * DO NOT CHANGE THE CODE BELOW!!
***/

document.getElementById('load-quote').addEventListener("click", printQuote, false);
