window.onload = ()=>{
    window.dom = {
        body: document.body,
        boot: document.getElementById("boot"),
        main: document.getElementById('main'),
        nav: document.getElementById('nav')
    };

    dom.body.dataset.load = "ing";

    init();
}

function init() {
    dom.body.dataset.load = "ed";

    dom.body.dataset.theme = "meridiem";

    window.location.pathname.router();
}
