let menu = document.getElementById('menu-bars');
let header = document.querySelector('header');
let cursor1 = document.querySelector('.cursor-1');
let cursor2 = document.querySelector('.cursor-2');
const submitButton = document.getElementById('submit-form');

const formSubmitHandler = (e) => {
    e.preventDefault();
    e.target.form[0].form[0].value = '';
    e.target.form[0].form[1].value = '';
    e.target.form[0].form[2].value = '';
    e.target.form[0].form[3].value = '';
};

window.onscroll = () => {
    menu.classList.remove('fa-times');
    header.classList.remove('active');
};

window.onmousemove = (e) => {
    cursor1.style.top = e.pageY + 'px';
    cursor1.style.left = e.pageX + 'px';
    cursor2.style.top = e.pageY + 'px';
    cursor2.style.left = e.pageX + 'px';
};

document.querySelectorAll('a').forEach(links => {
    links.onmouseenter = () => {
        cursor1.classList.add('active');
        cursor2.classList.add('active');
    }

    links.onmouseleave = () => {
        cursor1.classList.remove('active');
        cursor2.classList.remove('active');
    }
});

menu.onclick = () => {
    menu.classList.toggle('fa-times');
    header.classList.toggle('active');
};

submitButton.addEventListener('click', formSubmitHandler)