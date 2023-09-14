arrayBill=[22,295,176,440,37,105,10,1100,86,52];
function calcTip(bill){
    if(bill>=50 && bill<=300){
        tip=bill*0.15;
    }else{
        tip=bill*0.2;
    }
    return tip;
}
arrayTip=[];
arrayTotal=[];
for(let i=0;i<arrayBill.length;i++){
    arrayTip.push(calcTip(arrayBill[i]));
    arrayTotal.push(arrayBill[i]+arrayTip[i]);
}
console.log('Bill :',arrayBill);
console.log('Tip: ',arrayTip);
console.log('Total: ',arrayTotal);
function calcAverage(array){
    let sum=0;
    for(let i=0;i<array.length;i++){
        sum+=array[i];
    }
    return sum/array.length;
}
console.log('Average Bill: ',calcAverage(arrayBill));
console.log('Average Tip: ',calcAverage(arrayTip));
console.log('Average Total: ',calcAverage(arrayTotal));
