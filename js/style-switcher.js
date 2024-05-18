// style-switcher

const styleSwitcherToggle = document.querySelector('.style-switcher-toggler');
styleSwitcherToggle.addEventListener('click', () => {
    document.querySelector('.style-switcher').classList.toggle('open');
})

//hide style swicher on scroll
window.addEventListener('scroll', () => {
    if(document.querySelector('.style-switcher').classList.contains('open')) {
        document.querySelector('.style-switcher').classList.remove('open')
    }
})

//theme colour
const alternateStyles = document.querySelectorAll('.alternate-style');
function setActiveStyle(colour) {
    alternateStyles.forEach((style) => {
        if (colour === style.getAttribute('title')) {
           style.removeAttribute('disabled');
        } else {
            style.setAttribute('disabled','true');
        }
    });
}