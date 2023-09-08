function calculateScore(s1, s2, s3) {
    let avarageScore = (s1 + s2 + s3) / 3
    return avarageScore
    console.log('The average score is' + avarageScore)
}
calculateScore(96, 108, 89)
let dolphinAverage = Math.round(calculateScore(97, 112, 101))
let koalasAverage = Math.round(calculateScore(109, 95, 106))
console.log(dolphinAverage)
console.log(koalasAverage)
const minScore = 100;

function checkWinner(dolphinAverage, koalasAverage) {
    if (dolphinAverage > koalasAverage && minScore)
        console.log('Dolphin won!')
    else if (koalasAverage > dolphinAverage && minScore)
        console.log('Koalas won!')
    else console.log('They tie')
}
checkWinner(dolphinAverage, koalasAverage)