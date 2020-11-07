keyboardContainer = document.createElement('div');
keyboardContainer.classList.add('keyboard', 'keyboard--hidden');

document.body.append(keyboardContainer);


const enKeys = {
    normal: {
        keys: ['1', '2', '3', '4', '5', '6', '7', '8', '9', '0', 'backspace',
            'q', 'w', 'e', 'r', 't', 'y', 'u', 'i', 'o', 'p',
            'caps', 'a', 's', 'd', 'f', 'g', 'h', 'j', 'k', 'l', 'enter',
            'shift', 'z', 'x', 'c', 'v', 'b', 'n', 'm', ',', '.', '?',
            'space'
        ],
        lastKeys: function (key) {
            return ['backspace', 'p', 'enter', '?'].indexOf(key) !== -1;
        }
    },
    shifted: {
        keys: ['!', '@', '#', '$', '%', '^', '&', '8', '(', ')', 'backspace',
            'Q', 'W', 'E', 'R', 'T', 'Y', 'U', 'I', 'O', 'P',
            'caps', 'A', 'S', 'D', 'F', 'G', 'H', 'J', 'K', 'L', 'enter',
            'shift', 'Z', 'X', 'C', 'V', 'B', 'N', 'M', '<', '>', '/',
            'space'
        ],
        lastKeys: function (key) {
            return ['backspace', 'P', 'enter', '/'].indexOf(key) !== -1;
        }
    }
}

const ruKeys = {
    normal: {
        keys: ['1', '2', '3', '4', '5', '6', '7', '8', '9', '0', 'backspace',
            'й', 'ц', 'у', 'к', 'е', 'н', 'г', 'ш', 'щ', 'з', 'х', 'ъ',
            'caps', 'ф', 'ы', 'в', 'а', 'п', 'р', 'о', 'л', 'д', 'ж', 'э', 'enter',
            'shift', 'я', 'ч', 'с', 'м', 'и', 'т', 'ь', 'б', 'ю', '.',
            'space'],
        lastKeys: function (key) {
            return ['backspace', 'ъ', 'enter', '.'].indexOf(key) !== -1;
        }
    },
    shifted: {
        keys: ['!', '@', '#', '$', '%', '^', '&', '8', '(', ')', 'backspace',
            'Й', 'Ц', 'У', 'К', 'Е', 'Н', 'Г', 'Ш', 'Щ', 'З', 'Х', 'Ъ',
            'caps', 'Ф', 'Ы', 'В', 'А', 'П', 'Р', 'О', 'Л', 'Д', 'Ж', 'Э', 'enter',
            'shift', 'Я', 'Ч', 'С', 'М', 'И', 'Т', 'Ь', 'Б', 'Ю', ',',
            'space'],
        lastKeys: function (key) {
            return ['backspace', 'Ъ', 'enter', ','].indexOf(key) !== -1;
        }
    }
}

let keyboardShow = true;
let currentLang = enKeys;
let currentShifted = 'normal';
let capsLockButton = false;
const isControlButton = (key) => ['backspace', 'caps', 'enter',
    'shift','space','langbutton','hidebutton', 'leftbutton', 'rightbutton'].indexOf(key) !== -1;
const buttonIcon = (name) => `<i class="material-icons">${name}</i>`;
const buttonSound = new Audio('./zvuk.mp3');

class Keys {

    keyboardInit(keyboard) {
        keyboardContainer.append( ...(this.keyboardButtons(keyboard)) );

        const langButton = document.createElement("button");
        langButton.classList.add("keyboard__key", "lang-button","keyboard__key--wide");
        langButton.onclick = () => keyb.buttonClick(langButton);
        langButton.innerHTML = buttonIcon("language");
        langButton.id = 'langbutton';
        keyboardContainer.append( langButton);

        const hideButton = document.createElement("button");
        hideButton.classList.add("keyboard__key--wide", "keyboard__key");
        hideButton.innerHTML = buttonIcon("keyboard_hide");
        hideButton.onclick = () => keyb.buttonClick(hideButton);
        hideButton.id = 'hidebutton';
        keyboardContainer.append( hideButton );

        const leftButton = document.createElement("button");
        leftButton.classList.add("keyboard__key");
        leftButton.innerHTML = buttonIcon("arrow_back");
        leftButton.onclick = () => {
            textarea.focus();
            textarea.selectionStart = --textarea.selectionEnd;
        }
        leftButton.id = 'leftbutton';
        keyboardContainer.append( leftButton );

        const rightButton = document.createElement("button");
        rightButton.classList.add("keyboard__key");
        rightButton.innerHTML = buttonIcon("arrow_forward");
        rightButton.onclick = () => {
            textarea.focus();
            textarea.selectionStart = ++textarea.selectionEnd;
        }
        rightButton.id = 'rightbutton';
        keyboardContainer.append( rightButton );

    }

    keyboardButtons() {
        return currentLang[currentShifted].keys.reduce((res,buttonName) => {

            const buttonElement = document.createElement("button");

            buttonElement.classList.add("keyboard__key");
            buttonElement.id = buttonName;
            buttonElement.onclick = () => this.buttonClick(buttonElement);

            switch (buttonName) {
                case 'backspace':
                    buttonElement.classList.add("keyboard__key--wide");
                    buttonElement.innerText = buttonName;
                    buttonElement.innerHTML = buttonIcon("keyboard_backspace");
                    break;
                case 'shift':
                    buttonElement.classList.add("keyboard__key--wide", "keyboard__key--activatable");
                    buttonElement.innerText = buttonName;
                    buttonElement.innerHTML = buttonIcon("arrow_upward");
                    break;
                case 'enter':
                    buttonElement.classList.add("keyboard__key--wide");
                    buttonElement.innerText = buttonName;
                    buttonElement.innerHTML = buttonIcon("keyboard_return");
                    break;
                case 'space':
                    buttonElement.classList.add("keyboard__key--extra-wide");
                    buttonElement.innerText = buttonName;
                    buttonElement.innerHTML = buttonIcon("space_bar");
                    break;
                case 'caps':
                    buttonElement.classList.add("keyboard__key--wide", "keyboard__key--activatable");
                    buttonElement.innerHTML = buttonIcon("keyboard_capslock");
                    break;
                default: buttonElement.innerText = buttonName;

            }
            res.push(buttonElement);
            if (currentLang[currentShifted].lastKeys(buttonName)) {
                res.push(document.createElement("br"));
            }
            return res;
        },[]);
    };
    buttonClick (clickedButt) {
        switch (clickedButt.id) {
            case 'backspace':
                textarea.value = textarea.value.slice(0,-1);
                // textarea.selectionStart = textarea.selectionEnd--;
                // textarea.setRangeText('');

                break;
            case 'enter':
                textarea.value += '\n';
            break;
            case 'space':
                textarea.value += ' ';
            break;
            case 'shift':
                keyboardContainer.innerHTML = '';
                currentShifted = (currentShifted === 'normal') ? 'shifted' : 'normal';
                this.keyboardInit();
                shift.classList.toggle( 'keyboard__key--active',
                    currentShifted === 'shifted' );
            break;
            case 'caps':
                const arr = document.querySelectorAll('button.keyboard__key');
                clickedButt.classList.toggle( 'keyboard__key--active',
                    capsLockButton = !capsLockButton );
                arr.forEach(button => {
                    if (!isControlButton(button.id))
                        if (capsLockButton) {
                            button.innerText = button.innerText.toUpperCase();
                        } else {button.innerText = button.innerText.toLowerCase();}
                });
            break;
            case 'langbutton':
                keyboardContainer.innerHTML = '';
                currentLang = (currentLang === enKeys) ? ruKeys : enKeys;
                rec.lang = (currentLang === enKeys) ? 'en' : 'ru';
                this.keyboardInit();
            break;
            case 'hidebutton':
                keyboardContainer.classList.toggle('keyboard--hidden',
                    keyboardShow = !keyboardShow);
            break;
            case 'leftbutton':
                textarea.focus();
                textarea.dispatchEvent(new KeyboardEvent('keydown', {key: 'e'}));
            break;
            default: //textarea.value += clickedButt.innerText;
                textarea.setRangeText(clickedButt.innerText);
                textarea.selectionStart = ++textarea.selectionEnd;
        }
        textarea.focus();
        (() => buttonSound.play())();
    }
}

const keyb = new Keys();

keyb.keyboardInit(currentLang);

show.onclick = () => keyboardContainer.classList.toggle('keyboard--hidden',
    keyboardShow = !keyboardShow);

// nfgzk80b7ch7nsbo9y


// *************** SpeechRecognition
window.SpeechRecognition = window.SpeechRecognition || window.webkitSpeechRecognition;
var rec = new SpeechRecognition();
rec.interimResults = true;
mic.innerHTML = buttonIcon("mic");

mic.onclick = setMic;
var valueText = '';

rec.addEventListener("result", function(e) {
    var text = Array.from(e.results)
        .map(result => result[0])
        .map(result => result.transcript)
        .join('');
    mic.style.color = '';
    mic.onclick = setMic;
    textarea.value = valueText + text;
});

function setMic() {
    valueText = textarea.value;
    rec.start();
    mic.style.color = 'red';
    mic.onclick = () => {
        rec.stop();
        mic.style.color = '';
        mic.onclick = setMic;
    };
}
// rec.addEventListener("end", function(e) {
//
// });
