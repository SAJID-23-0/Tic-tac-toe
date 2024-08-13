const buttons = document.querySelectorAll('.button')
const winner = document.querySelector('.winner')
const reset = document.querySelector('.reset')
const move = document.querySelector('.move')


const winnerpattern = [
    [0, 1, 2],
    [3, 4, 5],
    [6, 7, 8],
    [0, 3, 6],
    [1, 4, 7],
    [2, 5, 8],
    [0, 4, 8],
    [2, 4, 6],
]



let turn = true;

buttons.forEach((insideButton) => {
    insideButton.addEventListener('click', () => {
        if (turn) {
            insideButton.innerHTML = 'X'
            insideButton.style = "background-color:#48D2FE; color:black; font-size:30px;"
            move.innerHTML = "O TURN"
            turn = false;
        } else {
            insideButton.innerHTML = 'O'
            insideButton.style = "background-color:#E2BE00; color:black; font-size:30px;"
            move.innerHTML = "X TURN"
            turn = true;
        }

        move.style = 'font-size:30px; font-weight:700; color:#975FB1;'
        insideButton.disabled = true;
        winn()
    })
})


const winn = () => {
    for (let pattern of winnerpattern) {
        let pattern_1 = buttons[pattern[0]];
        let pattern_2 = buttons[pattern[1]];
        let pattern_3 = buttons[pattern[2]];

        if (pattern_1.innerHTML != '' && pattern_2.innerHTML != '' && pattern_3.innerHTML != '') {
            if (pattern_1.innerHTML == pattern_2.innerHTML && pattern_2.innerHTML == pattern_3.innerHTML) {
                winner.innerHTML = `The Winner is ${pattern_1.innerHTML}`;

                buttons.forEach((butons) => {
                    butons.disabled = true;
                })

                winner.style = 'display:block; font-size:30px; font-weight:700; color:#975FB1; font-family: sans-serif; margin-top:5px;'
                move.innerHTML = "Game Over!"

                // setTimeout(() => {
                //     buttons.forEach((butons)=>{
                //         butons.disabled = false;
                //         butons.innerHTML = '';
                //     }) 
                //     winner.innerHTML = '';
                // }, 3000);
            }

        }
        
    }
}

reset.addEventListener('click', () => {
    // window.location.reload()
    buttons.forEach((butons) => {
        butons.disabled = false;
        butons.innerHTML = ''
        butons.style = ''
    })
    winner.innerHTML = ''
    move.innerHTML = ''
})