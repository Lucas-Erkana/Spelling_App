var words = ['apple','lion','banana','cat','dog','firefly','giraffe','house','icecream','kangaroo','happy','sad','dancing','mommy']
var randomWord  = words[Math.floor(Math.random()*words.length)];
var button = document.getElementById('checkButton');
var button2 = document.getElementById('getWordButton');
var resetButon = document.getElementById('resetButton');
var image = document.getElementById('image')

const pics = []
for(let i = 0;i<words.length;i++){
    pics.push('images/'+words[i]+'.png')
}
console.log(randomWord)
console.log(words.indexOf(randomWord))

button.className = 'btn btn-primary';
button2.className = 'btn btn-success';
resetButton.className = 'btn btn-danger';

resetButon.addEventListener('click', function(){
    location.reload();
})

var speech = new SpeechSynthesisUtterance();

button.addEventListener('click', function(){
    var input = document.getElementById('input').value;
    if(input === randomWord){
        speech.text='You are correct'
        speech.rate = 0.7;
    } else if(input!==randomWord) {
        speech.text= "You misspelled your word" + 'It is actually spelled ' + randomWord.split('');
        speech.rate = 0.7;
    }
    window.speechSynthesis.speak(speech)
})

button2.addEventListener('click', function(){
    var input = document.getElementById('input').value;
        speech.text='You word is ' + randomWord;
        speech.pitch=1;
        speech.lang='en-US';
        speech.volume=1;
        speech.rate=0.9;
        image.innerHTML += `<img src="${pics[words.indexOf(randomWord)]}" alt="${randomWord}" width = 200 height="auto">`

       window.speechSynthesis.speak(speech)
})
