function BurgerMenu() {
    const menu = document.getElementById('burger-menu__img')
    const cross = document.getElementById('cross')
    const menuBackground = document.getElementById('burger-menu__background')

    menu.addEventListener('click', () => {
        menuBackground.style.display = 'flex'
    })

    cross.addEventListener('click', () => {
        menuBackground.style.display = 'none'
    })
}
BurgerMenu();

function timer(year,month,day){
    document.addEventListener('DOMContentLoaded', function() {

        const deadline = new Date(year, month, day);
        let timerId = null;

        function countdownTimer() {
            const diff = deadline - new Date();
            if (diff <= 0) {
                clearInterval(timerId);
            }
            const days = diff > 0 ? Math.floor(diff / 1000 / 60 / 60 / 24) : 0;
            const hours = diff > 0 ? Math.floor(diff / 1000 / 60 / 60) % 24 : 0;
            const minutes = diff > 0 ? Math.floor(diff / 1000 / 60) % 60 : 0;
            const seconds = diff > 0 ? Math.floor(diff / 1000) % 60 : 0;
            $days.textContent = days < 10 ? '0' + days : days;
            $hours.textContent = hours < 10 ? '0' + hours : hours;
            $minutes.textContent = minutes < 10 ? '0' + minutes : minutes;
            $seconds.textContent = seconds < 10 ? '0' + seconds : seconds;
            $days.dataset.title = 'D/'
            $hours.dataset.title = 'H/'
            $minutes.dataset.title = 'M/'
            $seconds.dataset.title = 'S'
        }

        const $days = document.querySelector('.timer__days');
        const $hours = document.querySelector('.timer__hours');
        const $minutes = document.querySelector('.timer__minutes');
        const $seconds = document.querySelector('.timer__seconds');

        countdownTimer();
        timerId = setInterval(countdownTimer, 1000);
    });
}
timer(2022,5,5)

function toolTip(){
    let tooltipElem;
    const tablet = window.matchMedia('(max-width: 960px)')
    const mobile = window.matchMedia('(max-width: 640px)')
    let correctionLeft = 385
    let correctionTop = 110

    function handleTabletChange(e) {
        if (e.matches) {
            correctionLeft = 300
            correctionTop = 150
        }
    }
    function handleMobileChange(e) {
        if (e.matches) {
            correctionLeft = 50
            correctionTop = -25
        }
    }
    document.onmouseover = function(event) {
        let target = event.target;

        let tooltipHtml = target.dataset.tooltip;
        if (!tooltipHtml) return;

        tooltipElem = document.createElement('div');
        tooltipElem.className = 'tooltip';
        tooltipElem.innerHTML = tooltipHtml;
        document.body.append(tooltipElem);

        let coords = target.getBoundingClientRect();

        let left = coords.left + (target.offsetWidth - tooltipElem.offsetWidth) + correctionLeft;
        let top = coords.top - tooltipElem.offsetHeight + correctionTop;

        if (left < 0) left = 0;

        if (top < 0) {
            top = coords.top + target.offsetHeight + 5;
        }

        tooltipElem.style.left = left + 'px';
        tooltipElem.style.top = top + 'px';
    };
    document.onmouseout = function(e) {

        if (tooltipElem) {
            tooltipElem.remove();
            tooltipElem = null;
        }

    };

    tablet.addListener(handleTabletChange)
    handleTabletChange(tablet)
    mobile.addListener(handleMobileChange)
    handleMobileChange(mobile)
}
toolTip();



