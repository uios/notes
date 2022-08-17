window.on = {};

window.on.contextmenu = function() {}

window.on.key = {};

window.on.input = {};
window.on.input.note = function(textarea) {
    console.log(textarea.scrollHeight);
    textarea.style.height = 0;
    textarea.style.height = textarea.scrollHeight + 'px';
}
