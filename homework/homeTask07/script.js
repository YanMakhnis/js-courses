document.addEventListener("DOMContentLoaded", onPageLoad);

function onPageLoad(event) {
    const userStateWrapper = document.querySelector('#user-state');
    let sessionId = getCookie('sessionId');
    if(sessionId){
         userStateWrapper.textContent = "Авторизированный пользователь"
    }
    else {
        if(confirm("Хотите авторизоваться?")){
            const now = new Date();
            const sessionId = `${now.getFullYear()}${now.getMonth()}${now.getDate()}${now.getHours()}${now.getMinutes()}`;
            document.cookie = `sessionId=${sessionId}; max-age=60`;
            location.reload();
        }
    } 
}

function getCookie(name) {
    const cookieString = document.cookie;
    console.log(cookieString)
    const cookies = cookieString.split('; ');

    for (let cookie of cookies) {
        const [cookieName, cookieValue] = cookie.split('=');
        if (cookieName === name) {
            return cookieValue; 
        }
    }
    return null; 
}