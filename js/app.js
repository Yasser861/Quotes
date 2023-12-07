var quotes=[
    {
        desc:"“Be yourself; everyone else is already taken.”",
        author:"― Oscar Wilde"
    },
    {
        desc:"“I'm selfish, impatient and a little insecure. I make mistakes, I am out of control and at times hard to handle. But if you can't handle me at my worst, then you sure as hell don't deserve me at my best.”",
        author:"― Marilyn Monroe"
    },
    {
        desc:"“Two things are infinite: the universe and human stupidity; and I'm not sure about the universe.”",
        author:"― Albert Einstein"
    },
    {
        desc:"“So many books, so little time.”",
        author:"― Frank Zappa"
    },
    {
        desc:"“Be the change that you wish to see in the world.”",
        author:"― Mahatma Gandh"
    },
    {
        desc:"“In three words I can sum up everything I've learned about life: it goes on.”",
        author:"― Robert Frost"
    },
    {
        desc:"“Don’t walk in front of me… I may not followDon’t walk behind me… I may not leadWalk beside me… just be my friend”",
        author:"― Albert Camus"
    },
    {
        desc:"“A friend is someone who knows all about you and still loves you.”",
        author:"― Elbert Hubbard"
    },
    {
        desc:"“Without music, life would be a mistake.”",
        author:"― Friedrich Nietzsche, Twilight of the Idols"
    },
    {
        desc:"I am so clever that sometimes I don't understand a single word of what I am saying.",
        author:"― Oscar Wilde, The Happy Prince and Other Stories"
    },
    {
        desc:"“We accept the love we think we deserve.”",
        author:"― Stephen Chbosky, The Perks of Being a Wallflower"
    }
];
function getChoice(choice,lastChoice){
    if(choice==lastChoice){
        choice=Math.floor(Math.random()*11);
        return choice;
    }else{
        return choice;
    }
};
function Quote(){
    var choice=getChoice(Math.floor(Math.random()*11),Math.floor(Math.random()*11));
    // var choice=Math.floor(Math.random()*11);
    console.log(choice);
    document.getElementById('Quote').innerHTML=quotes[choice].desc;
    document.getElementById('author').innerHTML=quotes[choice].author;
};