// Zobacz gotowy projekt: https://websamuraj.pl/examples/js/projekt7/
const tabWyborow = ['Papier', 'Kamień', 'nożyczki'];
const papier = document.querySelector('[data-option="papier"]');
const kamien = document.querySelector('[data-option="kamień"]');
const nozyczki = document.querySelector('[data-option="nożyczki"]');
const wybor = document.querySelector('[data-summary="your-choice"]')
const start = document.querySelector('.start');
const AIchoice = document.querySelector('[data-summary="ai-choice"]')
const whoWin = document.querySelector('[data-summary="who-win"]');
const numbers = document.querySelector('.numbers span');
const wins = document.querySelector('.wins span');
const losses = document.querySelector('.losses span');
const draws = document.querySelector('.draws span');
let player = '';
let ai = '';
let win = '';
let games = 0;
let yourWin = 0;
let yourWon = 0;
let remisy = 0;

const markOption = () => {
    papier.className = kamien.className = nozyczki.className= "";
    const select = event.target;
    //console.log(event.target.title)
    select.classList.toggle('selected');
    wybor.innerHTML = event.target.title;
    player = event.target.title;
}
const letsPlay = () => {
    //console.log(wybor.innerHTML)
        if(player === ''){
            alert("Wybierz Przycisk !");
        }
        const los = Math.floor(Math.random()* 3);
        AIchoice.innerHTML = tabWyborow[los];
        ai = tabWyborow[los];
        numbers.innerHTML = ++games;
        if(ai === "nożyczki" && player === "nożyczki"){
            whoWin.innerHTML = 'remis'
            draws.innerHTML = ++remisy;
        }
        else if(ai === "nożyczki" && player === "Papier"){
            whoWin.innerHTML = 'Przegrałeś';
            losses.innerHTML = ++yourWon;
        }
        else if(ai === "nożyczki" && player === "Kamień"){
            whoWin.innerHTML = 'Wygrałeś';
            wins.innerHTML = ++yourWin;
        }else if(ai === "Papier" && player === "nożyczki"){
            whoWin.innerHTML = 'Wygrałeś';
            wins.innerHTML = ++yourWin;
        }
        else if(ai === "Papier" && player === "Papier"){
            whoWin.innerHTML = 'remis';
            draws.innerHTML = ++remisy;
        }
        else if(ai === "Papier" && player === "Kamień"){
            whoWin.innerHTML = 'Przegrałeś';
            losses.innerHTML = ++yourWon;
        }
        else if(ai === "Kamień" && player === "nożyczki"){
            whoWin.innerHTML = 'Przegrałeś';
            losses.innerHTML = ++yourWon;
        }
        else if(ai === "Kamień" && player === "Papier"){
            whoWin.innerHTML = 'Wygrałeś';
            wins.innerHTML = ++yourWin;
        }
        else if(ai === "Kamień" && player === "Kamień"){
            whoWin.innerHTML = 'remis';
            draws.innerHTML = ++remisy;
        }
        if(whoWin.innerHTML === 'Przegrałeś'){
            whoWin.style.color ="red";
            losses.innerHTML = ++yourWon;
        }
        else {
            whoWin.style.color ="black"
        }
        console.log(whoWin.style)
        
        
        //console.log(document.querySelector('Przegrales'))
        //document.querySelector('Przegrales')[0].style.color = "red";

    
}

papier.addEventListener("click", markOption);
kamien.addEventListener("click", markOption);
nozyczki.addEventListener("click", markOption);

start.addEventListener("click", letsPlay);
