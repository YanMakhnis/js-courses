const $ = jQuery;

const URL = 'http://127.0.0.1:5500/classwork/classWork14/src/'

function loadText() {
    // let textRequest = new XMLHttpRequest()
    // textRequest.open('GET', URL + 'load-this.txt')
    // textRequest.onload = function() {
    //     if(textRequest.status !=200) {
    //         alert (`Ошибка ${textRequest.status}: ${textRequest.statusText}`)
    //     }
    //     else {
    //         showText(textRequest.response)
    //     }
    // }
    // textRequest.send()

    // fetch(URL + 'load-this.txt')
    //     .then(response => {
    //         if (!response.ok) {
    //             throw new Error(`Ошибка ${response.status}: ${response.statusText}`);
    //         }
    //         return response.text();
    //     })
    //     .then(text => showText(text))
    //     .catch(error => {
    //         alert(error.message);
    //     });

    $.ajax({
        url: URL + 'load-this.txt',
        method: 'GET',
        success: showText,
        error: function(error) {
            alert(`Ошибка ${error}`);
        }
    });
}

function showText(text) {
    let element = $("#text-wrapper")
    element.html(text)
}

function loadUsers() {
    // let usersRequest = new XMLHttpRequest()
    // usersRequest.open('GET', URL + 'my-users.json')
    // usersRequest.onload = function () {
    //     if (usersRequest.status != 200) {
    //         alert(`Ошибка ${usersRequest.status}: ${usersRequest.statusText}`)
    //     }
    //     else {
    //         const users = JSON.parse(usersRequest.response)
    //         showUsers(users)
    //     }
    // }
    // usersRequest.send()

    // fetch(URL + 'my-users.json')
    // .then(response => {
    //     if (!response.ok) {
    //         throw new Error(`Ошибка ${response.status}: ${response.statusText}`);
    //     }
    //     return response.json();
    // })
    // .then(users => showUsers(users))
    // .catch(error => {
    //     alert(error.message);
    // });

    $.ajax({
        url: URL + 'my-users.json',
        method: 'GET',
        success: showUsers,
        error: function(xhr, status, error) {
            alert(`Ошибка ${xhr.status}: ${xhr.statusText}`);
        }
    });

}

function showUsers(users) {
    const wrapper = $("#users-wrapper")
    wrapper.html('')

    users.forEach(user => {
        wrapper.append(
            `<li class=${user.role}>${user.name}</li>`
        )
    });
}

$("#load-text").click(loadText);
$("#load-users").click(loadUsers);

