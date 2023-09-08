function BMI(height, weight) {
    let bmi = weight / Math.pow(height, 2);
    return bmi;
}
var markHeight = 169
var markMass = 78
var johnHeight = 195
var johnMass = 92
markBMI = BMI(markHeight, markMass);
johnBMI = BMI(johnHeight, johnMass);
console.log('mark: ' + markBMI, 'john: ' + johnBMI);
const markHigherBMI = markBMI > johnBMI;
console.log(markHigherBMI);
if (markHigherBMI) {
    console.log(`Mark's BMI (${markBMI}) is higher than John's (${johnBMI})!`);
} else {
    console.log(`John's (${johnBMI}) BMI is higher than Mark's (${markBMI})!`);
}