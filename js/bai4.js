const bill = 275;

const tip = bill * (15 / 100);
const tip2 = bill * (20 / 100);

function tip1(bill) {
    bill >= 50 && bill <= 300 ?
        console.log(`tip is ${tip}`) :
        console.log(`tip is ${tip2}`);
}

function totalValue(bill, tip) {
    total = bill + tip
    console.log(total)
}
tip1(bill)
totalValue(bill, tip)