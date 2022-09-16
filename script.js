const squareEl = document.querySelectorAll('.square');
const el1 = document.getElementById('1')

let toggle = true;
let click = 0;

const playerOne = []
const playerTwo = []

squareEl.forEach((square) => {

    square.addEventListener('click', () => {


        let checker = (arr, target) => target.every(v => arr.includes(v));
        target = [
            ['1', '2', '3'],
            ['4', '5', '6'],
            ['7', '8', '9'],
            ['1', '4', '7'],
            ['2', '5', '8'],
            ['3', '6', '9'],
            ['1', '5', '9'],
            ['7', '5', '3']]

        for (let i = 0; i < 8; i++) {
            if (checker(playerOne, target[i])) {
                console.log("PLAYER ONE WIN");
            };
        }

        for (let i = 0; i < 8; i++) {
            if (checker(playerTwo, target[i])) {
                console.log("PLAYER TWO WIN");
            };
        }

        square.style.backgroundRepeat = "no-repeat"
        square.style.backgroundPosition = "center"
        if (toggle) {
            square.style.backgroundImage = "url(assets/red.png)"
            window.onclick = e => {
                playerOne.push(e.target.id)
            }
            toggle = !toggle
        } else {
            square.style.backgroundImage = "url(assets/yellow.png)"
            window.onclick = e => {
                playerTwo.push(e.target.id)
            }
            toggle = !toggle
        }






    })
});

