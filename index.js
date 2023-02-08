const calcs = {
    years: milliseconds => milliseconds / 31556952000,
    months: milliseconds => (milliseconds / 2629800000) % 12,
    weeks: milliseconds => (milliseconds / 604800000) % 4,
    days: milliseconds => (milliseconds / 86400000) % 7,
    hours: milliseconds => (milliseconds / 3600000) % 24,
    minutes: milliseconds => (milliseconds / 60000) % 60,
    seconds: milliseconds => (milliseconds / 1000) % 60,
    milliseconds: milliseconds => milliseconds % 1000
}
const strings = {
    years: (value) => `${value}г.`,
    months: (value) => `${value}мес.`,
    weeks: (value) => `${value}н.`,
    days: (value) => `${value}д.`,
    hours: (value) => `${value}ч.`,
    minutes: (value) => `${value}мин.`,
    seconds: (value) => `${value}сек.`,
    milliseconds: (value) => `${value}мс.`
}
const u = ["years", "months", "weeks", "days", "hours", "minutes", "seconds", "milliseconds"]
/**
 * 
 * @param {Number} milliseconds 12345
 * @param {Array<String>} args [ "years", "months", "weeks", "days", "hours", "minutes", "seconds", "milliseconds" ]
 * @returns {Object<Number>} { years: 0, months: 0, ... }
 */
function parseMilliseconds(milliseconds, args = u) {
    if (typeof milliseconds !== "number")
        throw new TypeError("Expected a number");
    if (args.some(a => !u.includes(a))) throw new TypeError("Invalid args")
    const math = milliseconds > 0 ? Math.floor : Math.ceil;
    const result = {};
    for (const a of args) result[a] = math(calcs[a](milliseconds));
    return result;
}

/**
 * 
 * @param {Number} milliseconds 
 * @param {Boolean} mark default value false
 * @param {Array<String>} args 
 * @returns {String}
 */
function formatTime(milliseconds, mark = false, args) {
    const obj = parseMilliseconds(milliseconds, args);
    let arr = [];
    for (const [name, value] of Object.entries(obj))
        arr.push(strings[name](value));
    return mark ? `\`${arr.join("` `")}\`` : arr.join(" ");
}
/**
 * 
 * @param {Number} milliseconds 
 * @param {String} style Timestamp Style, default value - "f". Others values: "t" - 16:20 | "T" - 16:20:30 | "d" - 20/04/2021 | "D" - 20 April 2021 | "f" - 20 April 2021 16:20 | "F" - Tuesday, 20 April 2021 16:20 | "R" - 2 months ago
 * @returns {String} formatted timestamp discord
 */
function formattingDiscordTimestamp(milliseconds, style = ":f"){
    if(typeof milliseconds !== "number") throw new TypeError("Expected a Number");
    return `<t:${Math.floor(milliseconds / 1000)}${style}>`
}
module.exports = {
    parseMilliseconds,
    formatTime,
    formattingDiscordTimestamp
}