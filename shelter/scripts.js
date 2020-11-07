const sideMenuContainer = document.querySelector('.header-menu');
const darkness = document.createElement('div');
darkness.style.width = '100%';
darkness.style.height = '100%';
darkness.style.position = 'fixed';
darkness.style.background = 'rgba(0,0,0,.5)';
darkness.style.top = '0';
darkness.style.zIndex = '0';
darkness.style.justifyContent = 'center';
darkness.style.display = 'flex';
darkness.style.alignItems = 'center';

function sideMenu() {
    if (sideMenuContainer.style.right === '-320px' || !sideMenuContainer.style.right)  { doMenuOpen(); }
    else { doMenuClose(); }
}

function doMenuOpen() {
    sideMenuContainer.style.right = '0';
    burger.style.transform = 'rotate(90deg)';
    document.body.style.overflow = 'hidden';
    darkness.onclick = () => doMenuClose();
    document.body.prepend(darkness);
}
function doMenuClose() {
    sideMenuContainer.style.right = '-320px';
    burger.style.transform = 'rotate(0deg)';
    document.body.style.overflow = '';
    darkness.remove();
}
// const request = new XMLHttpRequest();
// request.open('GET', './pets.json');
// request.onload = () => {console.log(request.response)};
// fetch('./pets.json').
// then(async data => pets = await data.json()).
// then(() => setPets());
var pets = [
    {
        "name": "Jennifer",
        "img": "pets-jennifer.png",
        "type": "Dog",
        "breed": "Labrador",
        "description": "Jennifer is a sweet 2 months old Labrador that is patiently waiting to find a new forever home. This girl really enjoys being able to go outside to run and play, but won't hesitate to play up a storm in the house if she has all of her favorite toys.",
        "age": "2 months",
        "inoculations": ["none"],
        "diseases": ["none"],
        "parasites": ["none"]
    },
    {
        "name": "Sophia",
        "img": "pets-katrine2.png",
        "type": "Dog",
        "breed": "Shih tzu",
        "description": "Sophia here and I'm looking for my forever home to live out the best years of my life. I am full of energy. Everyday I'm learning new things, like how to walk on a leash, go potty outside, bark and play with toys and I still need some practice.",
        "age": "1 month",
        "inoculations": ["parvovirus"],
        "diseases": ["none"],
        "parasites": ["none"]
    },
    {
        "name": "Woody",
        "img": "pets-woody.png",
        "type": "Dog",
        "breed": "Golden Retriever",
        "description": "Woody is a handsome 3 1/2 year old boy. Woody does know basic commands and is a smart pup. Since he is on the stronger side, he will learn a lot from your training. Woody will be happier when he finds a new family that can spend a lot of time with him.",
        "age": "3 years 6 months",
        "inoculations": ["adenovirus", "distemper"],
        "diseases": ["right back leg mobility reduced"],
        "parasites": ["none"]
    },
    {
        "name": "Scarlett",
        "img": "pets-scarlet.png",
        "type": "Dog",
        "breed": "Jack Russell Terrier",
        "description": "Scarlett is a happy, playful girl who will make you laugh and smile. She forms a bond quickly and will make a loyal companion and a wonderful family dog or a good companion for a single individual too since she likes to hang out and be with her human.",
        "age": "3 months",
        "inoculations": ["parainfluenza"],
        "diseases": ["none"],
        "parasites": ["none"]
    },
    {
        "name": "Katrine",
        "img": "pets-katrine.png",
        "type": "Cat",
        "breed": "British Shorthair",
        "description": "Katrine is a beautiful girl. She is as soft as the finest velvet with a thick lush fur. Will love you until the last breath she takes as long as you are the one. She is picky about her affection. She loves cuddles and to stretch into your hands for a deeper relaxations.",
        "age": "6 months",
        "inoculations": ["panleukopenia"],
        "diseases": ["none"],
        "parasites": ["none"]
    },
    {
        "name": "Timmy",
        "img": "pets-timmy.png",
        "type": "Cat",
        "breed": "British Shorthair",
        "description": "Timmy is an adorable grey british shorthair male. He loves to play and snuggle. He is neutered and up to date on age appropriate vaccinations. He can be chatty and enjoys being held. Timmy has a lot to say and wants a person to share his thoughts with.",
        "age": "2 years 3 months",
        "inoculations": ["calicivirus", "viral rhinotracheitis"],
        "diseases": ["kidney stones"],
        "parasites": ["none"]
    },
    {
        "name": "Freddie",
        "img": "pet3.png",
        "type": "Cat",
        "breed": "British Shorthair",
        "description": "Freddie is a little shy at first, but very sweet when he warms up. He likes playing with shoe strings and bottle caps. He is quick to learn the rhythms of his humanвЂ™s daily life. Freddie has bounced around a lot in his life, and is looking to find his forever home.",
        "age": "2 months",
        "inoculations": ["rabies"],
        "diseases": ["none"],
        "parasites": ["none"]
    },
    {
        "name": "Charly",
        "img": "pets-charly.png",
        "type": "Dog",
        "breed": "Jack Russell Terrier",
        "description": "This cute boy, Charly, is three years old and he likes adults and kids. He isnвЂ™t fond of many other dogs, so he might do best in a single dog home. Charly has lots of energy, and loves to run and play. We think a fenced yard would make him very happy.",
        "age": "8 years",
        "inoculations": ["bordetella bronchiseptica", "leptospirosis"],
        "diseases": ["deafness", "blindness"],
        "parasites": ["lice", "fleas"]
    },
    {
        "name": "Jimmy",
        "img": "pet1.png",
        "type": "Dog",
        "breed": "Jack Russell Terrier",
        "description": "This cute boy, Jimmy, is three years old and he likes kids. He isnвЂ™t fond of many other dogs, so he might do best in a single dog home. Jimmy has lots of energy, and loves to run and play. We think a fenced yard would make him very happy.",
        "age": "8 years",
        "inoculations": ["bordetella bronchiseptica", "leptospirosis"],
        "diseases": ["deafness", "blindness"],
        "parasites": ["lice", "fleas"]
    },
    {
        "name": "Missy",
        "img": "pet2.png",
        "type": "Dog",
        "breed": "Jack Russell Terrier",
        "description": "Missy, is three years old and he likes adults and kids. He isnвЂ™t fond of many other dogs, so he might do best in a single dog home. Missy has lots of energy, and loves to run and play. We think a fenced yard would make him very happy.",
        "age": "8 years",
        "inoculations": ["bordetella bronchiseptica", "leptospirosis"],
        "diseases": ["deafness", "blindness"],
        "parasites": ["lice", "fleas"]
    },
    {
        "name": "Katty",
        "img": "pets-katrine1.png",
        "type": "Dog",
        "breed": "Jack Russell Terrier",
        "description": "This boy, Katty, is three years old and he likes adults and kids. He isnвЂ™t fond of many other dogs, so he might do best in a single dog home. Katty has lots of energy, and loves to run and play. We think a fenced yard would make him very happy.",
        "age": "8 years",
        "inoculations": ["bordetella bronchiseptica", "leptospirosis"],
        "diseases": ["deafness", "blindness"],
        "parasites": ["lice", "fleas"]
    }
]

function getRandomPet() {
    function getRandomInt(max) {
        return Math.floor(Math.random() * Math.floor(max));

    }
    return pets[getRandomInt(11)]
}

function setPets() {
    let x = [];
    sliderItems = document.querySelectorAll('.slider-item');
    sliderItems.forEach((item, index) => {
        let pet = getRandomPet()
        while (x.findIndex(ite => ite.img === pet.img) >= 0) {
            pet = getRandomPet();
        }
        x[index] = pet;
        item.querySelector('.slider-item-img').src = imgPath + pet.img;
        item.querySelector('.slider-item-name').innerText = pet.name;
        item.setAttribute('onclick',`modalShow('${pet.name}')`)
    })
}
setPets();

function pageSlider(arrow) {
    switch (arrow) {
        case 'first':
            sliderPage.innerText = '1';
            setFirstAttr();
            setPets();
        break;
        case 'prev':
            sliderPage.innerText = (+sliderPage.innerText - 1).toString();
            sliderLast.removeAttribute('disabled');
            sliderNext.removeAttribute('disabled');
            setPets();
        break;
        case 'next':
            sliderPage.innerText = (+sliderPage.innerText + 1).toString();
            sliderPrev.removeAttribute('disabled');
            sliderFirst.removeAttribute('disabled');
            setPets();
        break;
        case 'last':
            setLastAttr();
            sliderPage.innerText = '6';
            setPets();
        break;
    }
    if (sliderPage.innerText === '1') {
        setFirstAttr();
    } else if (sliderPage.innerText === '6'){
        setLastAttr();
    }

}
function lastPage() {
    return Math.round(48 / 48); // document.documentElement.clientWidth
}
function setFirstAttr() {
    sliderPrev.setAttribute('disabled','disabled');
    sliderFirst.setAttribute('disabled','disabled');
    sliderLast.removeAttribute('disabled');
    sliderNext.removeAttribute('disabled');
}
function setLastAttr() {
    sliderNext.setAttribute('disabled','disabled');
    sliderLast.setAttribute('disabled','disabled');
    sliderPrev.removeAttribute('disabled');
    sliderFirst.removeAttribute('disabled');
}


const modalContainer = document.createElement('div')
modalContainer.classList.add('modal-container');

function modalShow(petName) {
    const pet = pets.find(item => item.name === petName)
    document.body.style.overflow = 'hidden';
    darkness.prepend(modalContainer);
    darkness.onclick = () => modalHide();
    modalContainer.innerHTML = `<div class="modal-img">
    <img src="${imgPath + pet.img}" alt="pets">
</div>
    <div class="modal-content">
    <h3 class="modal-header">${petName}</h3>
    <p class="modal-subheader">${pet.type} - ${pet.breed}</p>
    <div class="modal-text">${pet.description}</div>
    <div class="modal-list">
        <ul>
            <li class="pet-param"><strong>Age</strong>: ${pet.age}</li>
            <li class="pet-param"><strong>Inoculations</strong>: ${pet.inoculations}</li>
            <li class="pet-param"><strong>Diseases</strong>: ${pet.diseases}</li>
            <li class="pet-param"><strong>Parasites</strong>: ${pet.parasites}</li>
        </ul>
    </div>
</div>
`;
    document.body.prepend(darkness);
}
function modalHide() {
    document.body.style.overflow = '';
    darkness.remove();
    modalContainer.remove();
}


