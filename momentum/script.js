userName = document.querySelector('#usernamefield');
dayFocus = document.querySelector('#focus');
greeting = document.querySelector('[greet]');
cngBtn = document.querySelector('[changeBgndBtn]');
quoteText = document.querySelector('#quote');
quoteAuthor = document.querySelector('#quote-author');
nextQuote = document.querySelector('#next-quote');

const dateObj = {
    day: ['Понедельник','Вторник','Среда','Четверг','Пятница','Суббота','Воскресенье'],
    month: ['Января','Февраля','Марта','Апреля','Мая','Июня','Июля','Августа','Сентября',
        'Октября','Ноября','Декабря',]
}
nextPic = 0;

currentTime = function () {
    setInterval(() => {
        document.querySelector('[timer]').innerText = (Date().split(' '))[4];
        const dateNow = new Date();
        if ( dateNow.getHours() >= 7 && (new Date()).getHours() < 12 ) {
            document.body.style.backgroundImage = `url("./assets/images/morning/${nextPic}.jpg")`;
            document.body.style.color = '#DDD';
            this.greeting.textContent = 'Good Morning';
        } else if ((new Date()).getHours() >= 12 && (new Date()).getHours() < 18) {
            document.body.style.backgroundImage = `url("./assets/images/day/${nextPic}.jpg")`;
            document.body.style.color = '#DDD';
            this.greeting.textContent = 'Good Day';
        } else if ((new Date()).getHours() >= 18) {
            document.body.style.backgroundImage = `url("./assets/images/evening/${nextPic}.jpg")`;
            document.body.style.color = '#DDD';
            this.greeting.textContent = 'Good Night';
        } else if ((new Date()).getHours() >= 22 || (new Date()).getHours() <= 7) {
            document.body.style.backgroundImage = `url("./assets/images/night/${nextPic}.jpg")`;
            document.body.style.color = '#DDD';
            this.greeting.textContent = 'Good Night';
        }
        datestring.innerText =
`${dateObj.day[dateNow.getDay()]}, ${dateNow.getDate()} ${dateObj.month[dateNow.getMonth()]}`;
    }, 1000);
}

cngBtn.addEventListener('click', () => {
    if ((++nextPic) >= 24) {nextPic = 0;}
});

nextQuote.addEventListener('click', () => getQuote());

function setData(dataObj, locStokey, defaultString) {
    dataObj.value = (localStorage.getItem(locStokey) || defaultString);

    dataObj.addEventListener('blur',
        (dat) => {
            if (dat.target.value) {
                localStorage.setItem(locStokey, dat.target.value);
            } else {
                this.userName.value = (localStorage.getItem(locStokey) || defaultString);
        }
            if (locStokey === 'city') getWeather();
    } );

    dataObj.addEventListener('focus', (dat) => this.dataObj.value = '');

    dataObj.addEventListener('keypress', (dat) => {
            if (dat.key === 'Enter') {
                if (dat.target.value) {
                    localStorage.setItem(locStokey, dat.target.value);
                } else {
                    this.dataObj.value = (localStorage.getItem(locStokey) || defaultString);
                }
                dataObj.blur();
                if (locStokey === 'city') getWeather();
            }
    } );
}

setData(userName, 'user-name', 'Пользователь');
setData(dayFocus, 'focus', 'Улыбаться');
setData(city, 'city', 'Минск');
function getQuote() {
    const url = 'https://cors-anywhere.herokuapp.com/https://api.forismatic.com/api/1.0/?method=getQuote&format=json&lang=en';
    fetch(url).then(async (data) => {
        const jsondata = await data.json();
        quoteText.innerText = jsondata.quoteText;
        quoteAuthor.innerText = jsondata.quoteAuthor;
    })
}

function getWeather() {
    urlWeather = `https://api.openweathermap.org/data/2.5/weather?q=${localStorage.getItem('city')}&lang=ru&appid=a6671c7d09b219a76bde238398196886&units=metric`;
    fetch(urlWeather).
    then(async data => await data.json()).
    then(data => {
        wthr.innerText = `Сегодня ${data.main.temp} градусов,
    влажность ${data.main.humidity}%,
    скорость ветра ${data.wind.speed} м/с`;
    wthricon.style.background = `url('http://openweathermap.org/img/w/${data.weather[0].icon}.png') no-repeat center`;
    }).catch(() => alert('Город не найден или сервис погоды не доступен.'));
}

currentTime();
getQuote();
getWeather();
