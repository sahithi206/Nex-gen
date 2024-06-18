//sidebar
const menuItems = document.querySelectorAll('.menu-item');
const messagesNotification = document.querySelector('#messages-notification');
const messages = document.querySelector('.messages');
const message = messages.querySelectorAll('.message');
const messageSearch = document.querySelector('#message-search');

const theme = document.querySelector('#theme');
const themeModal = document.querySelector('.customize-theme');

const root = document.querySelector(':root');
const colorPalette = document.querySelectorAll('.choose-color span');
const Bg1 = document.querySelector('.bg-1');
const Bg2 = document.querySelector('.bg-2');

//============== Sidebar ===============
const changeActiveItem = () => {
    menuItems.forEach(item => {
        item.classList.remove('active');
    })
}

menuItems.forEach(item => { 
    item.addEventListener('click', () => {
        changeActiveItem();
        item.classList.add('active');

        if (item.id !== 'notifications') {
           document.querySelector('.notifications-popup').style.display = 'none';
        } else {
            document.querySelector('.notifications-popup').style.display = 'block';
           document.querySelector('#notifications .notification-count').style.display = 'none';
        }
    })
})

//============== Messages ==============
const searchMessage = () => {
    const val = messageSearch.value.toLowerCase();
    console.log(val);
    message.forEach(chat => {
        let name = chat.querySelector('h5').textContent.toLowerCase();
        chat.style.display = name.indexOf(val) != -1 ? 'flex' : 'none';
    })
}

messageSearch.addEventListener('keyup', searchMessage);

messagesNotification.addEventListener('click', () => {
    messages.style.boxShadow = '0 0 1rem var(--color-primary)';
     messagesNotification.querySelector('.notification-count').style.display = 'none';
    
    setTimeout(() => {
        messages.style.boxShadow = 'none';
    }, 2000);
})

// Theme customization
const openThemeModal = () => {
    themeModal.style.display = 'grid';
}

const closeThemeModal = (e) => {
    if (e.target.classList.contains('customize-theme')) {
        themeModal.style.display = 'none';
    }
}

themeModal.addEventListener('click', closeThemeModal);
theme.addEventListener('click', openThemeModal);
//remove active class
const changeActiveColorClass = () => {
    colorPalette.forEach(colorPicker => {
        colorPicker.classList.remove('active');
    })
}
// Change primary colors
colorPalette.forEach(color => {
    color.addEventListener('click', () => {
        let primaryHue;
        changeActiveColorClass();
        if (color.classList.contains('color-1')) {
            primaryHue = 252;
        } else if (color.classList.contains('color-2')) {
            primaryHue = 52;
        } else if (color.classList.contains('color-3')) {
            primaryHue = 352;
        } else if (color.classList.contains('color-4')) {
            primaryHue = 152;
        } else if (color.classList.contains('color-5')) {
            primaryHue = 202;
        }
        color.classList.add('active');
        root.style.setProperty('--primary-color-hue', primaryHue);
    })
})

//theme background values
let lightColorLightness;
let whiteColorLightness;
let darkColorLightness;
 const changeBG = () => {
    root.style.setProperty('--light-color-lightness',lightColorLightness);
    root.style.setproperty('--white-color-lightness',whiteColorLightness);
    root.style.setProperty('--dark-color-lightness',darkColorLightness);
 }

Bg1.addEventListener('click', () => {

    Bg1.classList.add('active');
    Bg2.classList.remove('active');
   
    window.location.reload();
});

Bg2.addEventListener('click', () => {
    darkColorLightness = '95%';
    whiteColorLightness = '20%';
    lightColorLightness ='15%';
    Bg2.classList.add('active');
    Bg1.classList.remove('active');
    changeBG();

});
