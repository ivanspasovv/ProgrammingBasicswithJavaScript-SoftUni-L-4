function shopping(input) {
    let budget = Number(input[0]);
    let videocard = Number(input[1]);
    let cpu = Number(input[2]);
    let ram = Number(input[3]);

    let videocardPrice = videocard * 250;
    let cpuPrice = videocardPrice * 0.35 * cpu;
    let ramPrice = videocardPrice * 0.1 * ram;

    let totalPrice = videocardPrice + cpuPrice + ramPrice;

    if (videocard > cpu) {
        totalPrice = totalPrice - (totalPrice * 0.15);
    }

    if (totalPrice > budget) {
        result = totalPrice - budget;
        console.log(`Not enough money! You need ${result.toFixed(2)} leva more!`);
    } else {
        totalPrice = budget - totalPrice;
        console.log(`You have ${totalPrice.toFixed(2)} leva left!`);
    }
    
}

shopping(["900", "2", "1", "3"]);