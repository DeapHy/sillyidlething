function reset(error) {
    document.getElementById("daily-rate").value = ""
    
    document.getElementById("required-coins").value = ""
    document.getElementById("to-first-expo").value = ""
    document.getElementById("to-second-expo").value = ""
    document.getElementById("to-third-expo").value = ""
    document.getElementById("to-fourth-expo").value = ""

    if (!error) {
        document.getElementById("error").innerHTML = ""
    }
}

function result() {

    var cpg = 0

    var firstExpoRate = 900/15;
    var secondExpoRate = 2250/40;
    var thirdExpoRate = 4800/120;
    var fourthExpoRate = 9000/300;

    var guildmates = document.getElementById("guildmates").value

    if (guildmates == "") {
        reset(false)
        return
    }

    if (document.getElementById("first-expo").checked) {
        cpg += 900/guildmates;
    }
    if (document.getElementById("second-expo").checked) {
        cpg += 2250/guildmates;
    }
    if (document.getElementById("third-expo").checked) {
        cpg += 4800/guildmates;
    }
    if (document.getElementById("fourth-expo").checked) {
        cpg += 9000/guildmates;
    }

    reset(false)
    document.getElementById("daily-rate").value = Math.floor(cpg);

    var acquiredCoins = document.getElementById("acquired-coins").value;

    if ((acquiredCoins < 0) || (guildmates < 0)) {
        document.getElementById("error"),innerHTML = "Нельзя вводить отрицательные числа :P"
        reset(true)
        return
    }

    var coinsToAcquire = Math.floor(cpg - acquiredCoins);

    if (coinsToAcquire < 0) {
        document.getElementById("error").innerHTML = "Полученное количество монет превышает дневной лимит при данном количестве согильдейцев"
        reset(true)
        return
    }

    document.getElementById("required-coins").value = coinsToAcquire;

    if (document.getElementById("first-expo").checked) {
        document.getElementById("to-first-expo").value = Math.round((coinsToAcquire / firstExpoRate + Number.EPSILON) * 100) / 100;
    }
    if (document.getElementById("second-expo").checked) {
        document.getElementById("to-second-expo").value = Math.round((coinsToAcquire / secondExpoRate + Number.EPSILON) * 100) / 100;
    }
    if (document.getElementById("third-expo").checked) {
        document.getElementById("to-third-expo").value = Math.round((coinsToAcquire / thirdExpoRate + Number.EPSILON) * 100) / 100;
    }
    if (document.getElementById("fourth-expo").checked) {
        document.getElementById("to-fourth-expo").value = Math.round((coinsToAcquire / fourthExpoRate + Number.EPSILON) * 100) / 100;
    }
}