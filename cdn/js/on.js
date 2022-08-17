window.on = {};

window.on.contextmenu = function() {}

window.on.key = {};

window.on.input = {};
window.on.input.note = function(textarea) {
    console.log(textarea.scrollHeight);
    textarea.style.height = 0;
    textarea.style.height = textarea.scrollHeight + 'px';
}

window.on.touch = {};
window.on.touch.tap = async(event)=>{
    var elem = target = event.target;

    elem = target.closest("[data-href]");
    if (elem) {
        var href = elem.dataset.href;
        var params = elem.dataset.params ? JSON.parse(elem.dataset.params) : null;
        href.router(params);
    }

    elem = target.closest("[data-tap]");
    if (elem) {
        var x = eval(elem.dataset.tap);
        typeof x === "function" ? x() : null;
    }
}