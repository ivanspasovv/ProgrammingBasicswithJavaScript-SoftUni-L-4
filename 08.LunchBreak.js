function lunchBreak(input) {
    let filmName = input[0];
    let filmDuration = input[1];
    let breakDuration = input[2];

    let lunch = breakDuration * 0.125;
    let relaxTime = breakDuration * 0.25;
    let timeleft = breakDuration - lunch - relaxTime;

    if (timeleft >= filmDuration) {
        let result = timeleft - filmDuration;
        console.log(`You have enough time to watch ${filmName} and left with ${Math.ceil(result)} minutes free time.`);
    } else {
        let result = filmDuration - timeleft;
        console.log(`You don't have enough time to watch ${filmName}, you need ${Math.ceil(result)} more minutes.`);
    }
}

lunchBreak(["Teen Wolf", "48", "60"]);