function calcAverage(a, b, c) {
    return (a + b + c) / 3;
}
function checkWinner(a,b) {
    if(a >= 2 * b) {
        console.log(`Dolphins win (${a} vs. ${b})`);
    } else if(b >= 2 * a) {
        console.log(`Koalas win (${b} vs. ${a})`);
    } else {
        console.log('No team wins...');
    }
}
console.log('Test data 1');
avgDolphins = calcAverage(44, 23, 71);
avgKoalas = calcAverage(65, 54, 49);
console.log(avgDolphins, avgKoalas);
checkWinner(avgDolphins, avgKoalas);
console.log('Test data 2');
avgDolphins = calcAverage(85, 54, 41);
avgKoalas = calcAverage(23, 34, 27);
console.log(avgDolphins, avgKoalas);
checkWinner(avgDolphins, avgKoalas);
