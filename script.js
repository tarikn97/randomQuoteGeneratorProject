let quotes = [
  "“We cannot solve problems with the kind of thinking we employed when we came up with them.” — Albert Einstein",
  "“Learn as if you will live forever, live like you will die tomorrow.” — Mahatma Gandhi",
  "“Stay away from those people who try to disparage your ambitions. Small minds will always do that, but great minds will give you a feeling that you can become great too.” — Mark Twain",
  "“When you give joy to other people, you get more joy in return. You should give a good thought to happiness that you can give out.” — Eleanor Roosevelt",
  "“When you change your thoughts, remember to also change your world.” — Norman Vincent Peale",
  "“It is only when we take chances, when our lives improve. The initial and the most difficult risk that we need to take is to become honest.” — Walter Anderson",
  "“Nature has given us all the pieces required to achieve exceptional wellness and health, but has left it to us to put these pieces together.” — Diane McLaren",
  "“The greatest glory in living lies not in never falling, but in rising every time we fall.”-Nelson Mandela",
  "“The way to get started is to quit talking and begin doing.” - Walt Disney”",
  "“Your time is limited, so don't waste it living someone else's life. Don't be trapped by dogma – which is living with the results of other people's thinking.” - Steve Jobs",
  "“If life were predictable it would cease to be life, and be without flavor.” - Eleanor Roosevelt",
  "“If you look at what you have in life, you'll always have more. If you look at what you don't have in life, you'll never have enough.” - Oprah Winfrey",
  "“If you set your goals ridiculously high and it's a failure, you will fail above everyone else's success.” - James Cameron",
  "“Life is what happens when you're busy making other plans.” - John Lennon",
];

let btn = document.getElementById("btnNewQuote");

function newQuote() {
  let randomNumber = Math.floor(Math.random() * quotes.length);
  document.getElementById("quoteDisplay").innerHTML = quotes[randomNumber];
}

btn.addEventListener("click", newQuote);
