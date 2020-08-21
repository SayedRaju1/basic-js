// feetToMile

function feetToMile(feet) {
    var mile = feet / 5280;
    return mile;
}



// woodCalculator

function woodCalculator(chair, table, bed) {
    var chairWood = chair * 1;
    var tableWood = table * 3;
    var bedWood = bed * 5;
    totalWood = chairWood + tableWood + bedWood;
    return totalWood;
}



// brickCalculator

function brickCalculator(floor) {
    if (floor <= 10) {
        var ten = floor * 15000;
        var total = ten;
    }
    else if (floor <= 20) {
        var twenty = 150000 + (floor - 10) * 12000;
        total = twenty;
    }
    else {
        var twentyPlus = 150000 + 120000 + (floor - 20) * 10000;
        total = twentyPlus;
    }
    return total;
}


// tinyFriend

function tinyFriend(friends) {
    var tiny = friends[0];
    for (var i = 0; i < friends.length; i++) {
        var newTiny = friends[i];
        if (newTiny.length < tiny.length) {
            tiny = newTiny;
        }
    }
    return tiny;
}