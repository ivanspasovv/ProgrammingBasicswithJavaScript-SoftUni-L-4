function sum(input) {
    let player1 = Number(input[0]);
    let player2 = Number(input[1]);
    let player3 = Number(input[2]);

    let totalTime = player1 + player2 + player3;
    let min = Math.floor(totalTime / 60);
    let seconds = totalTime % 60;

    if (seconds < 10) {
        console.log(`${min}:0${seconds}`);
    } else console.log(`${min}:${seconds}`);
}

sum(["14", "12", "10"])

