document.querySelector('#menu img').addEventListener('click', function() {
    var menuWindow = document.getElementById('menu-window');
    if (menuWindow.classList.contains('hidden')) {
        menuWindow.classList.remove('hidden');
    } else {
        menuWindow.classList.add('hidden');
    }
});

document.addEventListener('click', function(event) {
    var menuWindow = document.getElementById('menu-window');
    var menuIcon = document.querySelector('#menu img');
    if (!menuWindow.contains(event.target) && event.target !== menuIcon) {
        menuWindow.classList.add('hidden');
    }
});