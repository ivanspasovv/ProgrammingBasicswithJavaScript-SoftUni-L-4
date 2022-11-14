function time(input) {
    let hours = Number(input[0]);
    let minutes = Number(input[1]);

    let totalMin = hours * 60 + minutes + 15;
    let hour = Math.floor(totalMin / 60);
    let min = totalMin % 60;
    if (min < 10) {
        min = `0${min}`;
    }

    if (hour === 24) {
        hour = 0;
    }

    console.log(`${hour}:${min}`)
}

time(["0", "01"])