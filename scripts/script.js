
(function() {
    var burger = document.querySelector('.burger');
    var menu = document.querySelector('#'+burger.dataset.target);
    var helloButton = document.querySelector("#hello-button");
    burger.addEventListener('click', function() {
        burger.classList.toggle('is-active');
        menu.classList.toggle('is-active');
        //helloButton.classList.replace("is-dark","is-light");
    });
})();
