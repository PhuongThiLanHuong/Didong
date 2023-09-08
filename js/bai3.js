function calculateScore(s1, s2, s3) {
    let avarageScore = (s1 + s2 + s3) / 3
    return avarageScore
    console.log('The average score is' + avarageScore)
}
calculateScore(96, 108, 89)
let dolphinAverage = Math.round(calculateScore(96, 108, 89))
let koalasAverage = Math.round(calculateScore(88, 91, 110))
console.log(dolphinAverage)
console.log(koalasAverage)

function checkWinner(dolphinAverage, koalasAverage) {
    if (dolphinAverage > koalasAverage)
        console.log('Dolphin won!')
    else if (koalasAverage > dolphinAverage)
        console.log('Koalas won!')
    else console.log('They tie')
}
checkWinner(dolphinAverage, koalasAverage)