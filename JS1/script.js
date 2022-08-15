// VARIABLES
let btn = document.querySelector('#new-quote');
let quote = document.querySelector('.quote');
let person = document.querySelector('.person');

const quotes = [
    {quote:`"The best way to find yourself is to loose yourself in the service of others."`,
    person:"Muhatma Gandhi"},
    {quote:`"Never take criticism from someone you wouldn't go to for advice."`,
    person:"John Smith"},
    {quote:`"Become the type of leader that people would follow voluntarily, even if you had no title or position."`,
    person:"Brian Tracy"},
    {quote:`"The beauty of empowering others is that your own power is not diminished in the process."`,
    person:"Andrew Carnegie"},
    {quote:`"Earn your leadership every day."`,
    person:"Michael Jordan"},
    {quote:`"My job is not to be easy on people. My job is to take great people and push them to make them even better."`,
    person:"Steve Jobs"},
    {quote:`"A leader is best when people barely know he exists, when his work is done, his aim fulfilled, they will say: we did it ourselves."`,
    person:"Lao Tzu"},
    {quote:`"I must follow the people. Am I not their leader? "`,
    person:"Benjamin Disraeli"},
    {quote:`"My own definition of leadership is this: The capacity and the will to rally men and women to a common purpose."`,
    person:"General Montgomery"},
    {quote:`"The first responsibility of a leader is to define reality. The last is to say thank you. In between, the leader is a servant."`,
    person:"Max DePree"},
    {quote:`"Before you are a leader, success is all about growing yourself.When you become leader, success is all about growing others."`,
    person:"Jack Welch"}
]
btn.addEventListener('click',function(){
    let random = Math.floor(Math.random() * quotes.length);
    quote.innerText = quotes[random].quote;
    person.innerText = quotes[random].person;
});