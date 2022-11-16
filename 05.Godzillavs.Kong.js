function godzillaVsKong(input) {
    let budget = Number(input[0]);
    let extra = Number(input[1]);
    let clothing = Number(input[2]);

    let decor = budget * 0.1;

    if (extra > 150) {
        clothing = clothing - (clothing * 0.1);
    }

    totalClothing = extra * clothing;

    totalExpense = totalClothing + decor;

    if (totalExpense <= budget ) {
        result = budget - totalExpense
        console.log("Action!");
        console.log(`Wingard starts filming with ${result.toFixed(2)} leva left.`);
    } else {
        result = totalExpense - budget;
        console.log("Not enough money!");
        console.log(`Wingard needs ${result.toFixed(2)} leva more.`);
    }

}

godzillaVsKong(["9587.88",
"222",
"55.68"])

