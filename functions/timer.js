module.exports.timer = function (number, titles) {
    number1 = number
    number = Math.abs(number)
    let cases = [2, 0, 1, 1, 1, 2];
    return `${number1} ${titles[(number%100>4 && number%100<20)? 2 : cases[(number%10<5)?number%10:5]]}`;
}
