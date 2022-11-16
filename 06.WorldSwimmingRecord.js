function worldSwimmingRecord(input) {
    let record = Number(input[0]);
    let distance = Number(input[1]);
    let time = Number(input[2]);

    let totalTime = distance * time;
    let timeFromDeley = Math.floor(distance / 15) * 12.5;
    let finalTime = timeFromDeley + totalTime;

    if (finalTime >= record) {
        result = finalTime - record;
        console.log(`No, he failed! He was ${result.toFixed(2)} seconds slower.`);
    } else {
        console.log(`Yes, he succeeded! The new world record is ${finalTime.toFixed(2)} seconds.`);
    }
}

worldSwimmingRecord(["55555.67", "3017", "5.03"]);