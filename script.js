// при загрузке страницы выдается js alert с текстом
window.onload = function () {
  alert("Set 'lng' and 'url' attributes in the URL above to change the language of the page and to be redirected to the website.");
};

// добавлено 2 перевода страницы, перевод осуществляется по параметру,
// прописанному в адресной строке либо автоматически по языку браузера пользователя
const paramsString = location.search.slice(1);
const searchParams = new URLSearchParams(paramsString);
const ru = document.querySelectorAll('[lang="ru"]');
const en = document.querySelectorAll('[lang="en"]');
const lang = window.navigator.language || navigator.userLanguage;

function toRussian() {
  for (let el of en) {
    el.classList.add("hidden");
  }
}

function toEnglish() {
  for (let el of ru) {
    el.classList.add("hidden");
  }
}

function switchLanguage() {
  if (searchParams.get("lng") === "ru") {
    toRussian();
  } else if (searchParams.get("lng") === "eng") {
    toEnglish();
  } else if (lang.slice(0, 2) === "ru") {
    toRussian();
  } else {
    toEnglish();
  }
}

switchLanguage();

// по клику на кнопку download пользователя перенаправляет на url,
// который будет прописан в одном из параметров лендинга в адресной строке
function redirect() {
  if (searchParams.has("url")) {
    location.href = searchParams.get("url");
  }
}

// автоматический редирект через 10 секунд на страничку из параметра url
setTimeout(redirect, 10000);
