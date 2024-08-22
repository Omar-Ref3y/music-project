gsap.to('#content', {
    opacity: 1,
    delay: 2,
    ease: 'smooth',
})

function showSideBar() {
    const sidebar = document.querySelector('.sideBar')
    sidebar.style.display = 'flex';
    hideLoginSec()
    hideSignUpSec()
}
function hideSideBar() {
    const sidebar = document.querySelector('.sideBar')
    sidebar.style.display = 'none'
}
function showLoginSec() {
    const loginSec = document.querySelector('.login')
    loginSec.style.display = 'flex';
    hideSideBar()
    hideSignUpSec()
}
function hideLoginSec() {
    const loginSec = document.querySelector('.login')
    loginSec.style.display = 'none';
}
function showSignUpSec() {
    const signSec = document.querySelector('.signUp')
    signSec.style.display = 'flex';
    hideSideBar()
    hideLoginSec()
}
function hideSignUpSec() {
    const signSec = document.querySelector('.signUp')
    signSec.style.display = 'none';
}

addEventListener('resize', () => {
    const width = window.innerWidth;
    if (width > 1200) {
        hideSideBar()
    }
})

document.addEventListener('DOMContentLoaded', () => {
    function scrollToElement(ele, ins = 0) {
        let element = document.querySelectorAll(ele)
        if (element.length > ins) {
            element[ins].scrollIntoView({ behavior: 'smooth' })
        }
    }
    const link1 = document.getElementById("link1")
    const link2 = document.getElementById("link2")
    const link3 = document.getElementById("link3")
    const link4 = document.getElementById("link4")

    link1.addEventListener('click', () => {
        scrollToElement('.battle',)
        hideSideBar()
    });
    link2.addEventListener('click', () => {
        scrollToElement('.events')
        hideSideBar()
    });
    link3.addEventListener('click', () => {
        scrollToElement('.music')
        hideSideBar()
    });
    link4.addEventListener('click', () => {
        scrollToElement('.albums')
        hideSideBar()
    })
})