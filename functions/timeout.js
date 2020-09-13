// очень старый таймер...

module.exports.timeout = function (type, client, message){
    let timer = require('../functions/timer.js').timer
    let Users = client.enmap.Users;
    let cww = type
    let result = (cww - Date.now());
    if(result < 0) result = (cww+Date.now() - Date.now())
    let seconds = Math.floor((result/1000)%60);
    let minutes = Math.floor((result/1000/60)%60);
    let hours = Math.floor((result/1000/60/60)%24);
    let days = Math.floor((result/1000/60/60/24)%31);
    let months = Math.floor((result/1000/60/60/24/31)%12);
    let years = Math.floor((result/1000/60/60/24/31/365)%100);
    let text;
    text = `${timer(hours, ['час', 'часа', 'часов'])} и ${timer(minutes, ['минута', 'минуты', 'минут'])}`;
    if(years > 0 && months == 1) text = `${timer(years, ['год', 'года', 'лет'])} и ${timer(months, ['месяц', 'месяца', 'месяцев'])}`
    if(months >= 1) text = `${timer(months, ['месяц', 'месяца', 'месяцев'])} и ${timer(days, ['день', 'дня', 'дней'])}`
    if(days > 0 && months < 1) text = `${timer(days, ['день', 'дня', 'дней'])} и ${timer(hours, ['час', 'часа', 'часов'])}`
    if(hours < 1 && days < 1) text = `${timer(minutes, ['минута', 'минуты', 'минут'])} и ${timer(seconds, ['секунда' ,'секунды', 'секунд'])}`;
    if(days == 1 && hours <= 0) text = `${timer(days, ['день', 'дня', 'дней'])}`
    if(hours == 0 && minutes == 0 && days < 1 && years < 1) text = `${timer(seconds, ['секунда', 'секунды', 'секунд'])}`;
    return text;
}
