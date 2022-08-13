window.onload = ()=>{
    window.dom = {
        body: document.body,
        boot: document.getElementById("boot")
    };

    dom.body.dataset.load = "ing";

    init();
}

function init() {
    dom.body.dataset.load = "ed";

    touch.events = {
        dbltap: on.touch.dbltap,
        drag: on.touch.drag,
        press: on.touch.press,
        tap: on.touch.tap
    };    
    touch.ing = false;
    
    dom.body.dataset.theme = "meridiem";
    dom.body.addEventListener("click", function(e) {
        if(window.touch.ing === false) {
            on.touch.tap(e);
            //console.log(e.type,window.touch.ing);
        } else {
            window.touch.ing = false;
            //console.log(e.type,window.touch.ing);
        }
    });
    dom.body.addEventListener("touchstart", function(e) {
        window.touch.ing = true;
        touch.handler(event);
        console.log(e.type);
    }, {
        passive: true
    });
    dom.body.addEventListener("touchmove", touch.handler, {
        passive: true
    });
    dom.body.addEventListener("touchcancel", touch.handler, false);
    dom.body.addEventListener("touchend", function(e) {
        //window.touch.ing = false;
        touch.handler(event);
        console.log(e.type);
    });
    
    window.location.pathname.router();
}

window.onhover = {
    menu: {
        item: target => {
            byId('menu-backdrop') ? byId('menu-backdrop').remove() : null;
            var html = `<picture class="-tap-display-flex -tilde--hover--tap-display-flex display-none height-100pct left-0 position-fixed top-0 width-100pct z-index-1" data-tap="event.target.closest('header').classList.remove('-tap')" id="menu-backdrop"></picture>`;
            target.closest('box').insertAdjacentHTML('afterend',html);            
        }
    }
}

window.on.submit = {};

window.on.submit.index = {};
window.on.submit.index.path = function(event) {
    console.log(event);
    event.preventDefault();
    const form = event.target;
    const path = form.find('input[type="text"]');
    var GOT = path.value.split("\\");
    GOT.shift();
    var href = rout.ed.url(GOT.filter(n => n));
    console.log(GOT,href);
    href.router();
}

window.submit = window.on.submit;
