function toys(input) {
    let vacantion = Number(input[0]);
    let puzzles = Number(input[1]);
    let dolls = Number(input[2]);
    let bears = Number(input[3]);
    let minions = Number(input[4]);
    let trucks = Number(input[5]);

    let totalToys = puzzles + dolls + bears + minions + trucks;

    let puzzlesPrice = puzzles * 2.60;
    let dollsPrice = dolls * 3;
    let bearsPrice = bears * 4.1;
    let minionPrice = minions * 8.2;
    let trucksPrice = trucks * 2;

    let totalPrice = puzzlesPrice + dollsPrice + bearsPrice + minionPrice + trucksPrice;
    
    if (totalToys >= 50) {
        totalPrice = totalPrice - (totalPrice * 0.25);
    }

    totalPrice = totalPrice - (totalPrice * 0.1);

    if (totalPrice >= vacantion) {
        totalPrice = totalPrice - vacantion;
        console.log(`Yes! ${totalPrice.toFixed(2)} lv left.`);
    } else {
        totalPrice = vacantion - totalPrice;
        console.log(`Not enough money! ${totalPrice.toFixed(2)} lv needed.`);
    }
}

toys(["40.8", "20", "25", "30", "50", "10"]);