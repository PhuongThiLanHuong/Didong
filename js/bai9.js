array=[17,21,23];
function printForecast(array) {
    for (let i = 0; i < array.length; i++) {
        console.log(`... ${array[i]}oC in ${i + 1} days`);
    }
}
printForecast([17, 21, 23]);
printForecast([12, 5, -5, 0, 4]);
