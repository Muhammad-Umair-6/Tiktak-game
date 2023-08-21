const msg =document.querySelector('.msg');
const guess = document.querySelector('input');
const btn = document.querySelector('.btn');
let play = false;
let newWords ="";
let randWords ="";
let sWords =['python','php','nodejs','c#','java','reactjs','swift','sql','c++','javascript','android','angular','html','css','bootstrap','tailwind','nextjs','typescript','laravel','express'];
const creteNewWords =()=>{
let ranNum = Math.floor(Math.random() * sWords.length);
let newTempSwords = sWords[ranNum];
//console.log(newTempSwords.split(""));
return newTempSwords;
}
const scrambleWords = (arr) =>{
    for (let i = arr.length-1; i>0;i--){
let temp = arr[i];
//console.log(temp);
let j =Math.floor(Math.random()*(i+1));
//console.log(i);
//console.log(j);
arr[i] = arr[j];
arr[j] = temp;
    }
    return arr;
}
btn.addEventListener('click',function(){
    if(!play){
        play = true;
        btn.innerHTML="Guess";
        guess.classList.toggle('hidden');
          newWords = creteNewWords();
           randWords = scrambleWords(newWords.split("")).join("");
           msg.innerHTML = ` Guess the word :${randWords}`;
    }
    else{
        let tempWord = guess.value;
        if(tempWord === newWords){
            play = false;
            msg.innerHTML = `Awesome It's  Correct.it is ${newWords}`;
            btn.innerHTML = "Start Again";
            guess.classList.toggle('hidden');
            guess.value ="";
        }else{
            msg.innerHTML = `Sorry Boss InCorrect.Plz try again ${newWords}`;
        }
    }
})