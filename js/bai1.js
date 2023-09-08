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
var markBiggerBMI = markBMI > johnBMI;
console.log('mark: ' + markBMI, 'john: ' + johnBMI);
if (markBMI > johnBMI) {
    console.log('Mark\'s BMI is bigger than John\'s');
} else {
    console.log('John\'s BMI is bigger than Mark\'s');
}