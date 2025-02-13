// Писать дальнейший код здесь
// P.S. Это комментарий, при запуске скрипта он никак не влияет на его работу
// const firstName = "Yan";
// const familyName = "Makhnis";
// const sex = "male";

// alert(firstName);
// alert(familyName);
// alert(sex);

let name = prompt('Как вас зовут?')
if (name == null || name == '') {
    alert("Ну зачем вы так?")
} else {
    let res = confirm("Хотите проверить, верно ли мы запомнили ваше имя?")
    if (res) {
        alert(`${name}, верно?`)
    } else {
        alert("Ладно, будем надеяться, что верно")
    }
}

