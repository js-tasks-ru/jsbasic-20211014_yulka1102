let str, maxlength;
let str2;
function truncate(str, maxlength) {
  if (str.length <= maxlength) {
    return `${str}`;
    } else {
    str2 = str.substr(0, maxlength - 1);
    return `${str2}…`;
    }
}
truncate('Вот, что мне хотелось бы сказать на эту тему:', 20);

truncate('Всем привет!', 20);
