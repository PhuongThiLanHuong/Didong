function calcTip(bill) {
    if (bill >= 50 && bill <= 300) {
        tip= bill * 0.15;
    } else {
        tip=bill * 0.2;
    }
    return tip;
    
}
array = [125, 555, 44];
console.log(array);
console.log('tip 0: ',calcTip(array[0]));
console.log('tip 1: ',calcTip(array[1]));
console.log('tip 2: ',calcTip(array[2]));
tips = [calcTip(array[0]), calcTip(array[1]), calcTip(array[2])];
console.log(tips);
total = [array[0] + tips[0], array[1] + tips[1], array[2] + tips[2]];
console.log(total);
