// alert('Helloy word');
// const age = prompt ( 'Сколько тебе лет?');
// const isBoss = confirm('Ты сдесь главный?');
// alert(age)
// alert(isBoss)
// if (age > 30) {
//     alert('Торопись жить');
// } else {
//     alert('ещё успеешь пожить');
// }
const age = prompt ( 'Сколько тебе лет?');
const profession= prompt ( 'Кем ты работаешь?');
const like = prompt ( 'Нравится ли тебе?');
let counter = 0;

if (age ==30) {
    counter++;
}
if (profession === 'developer') {
    counter++;
}
if (like === 'yes') {
    counter++;
}
alert(`правильных ответов ${counter} из 3`);

