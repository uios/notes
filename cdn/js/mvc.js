window.mvc = {};

window.mvc.m = model = {};

window.mvc.v = view = function(route) {
    const a = async function(resolve, reject) {
        var page = route.page;
        var path = route.path;
        var get = route ? route.GOT : rout.ed.dir(dom.body.dataset.path);
        var root = get[0];
        console.log('GET', GET, route, root);

        if (root) {

            if (root === "menu") {
                dom.body.note.dataset.zIndex = 2;
                dom.body.page.dataset.zIndex = 1;
                
                log(route);
                resolve(route);
            }
            if (root === "note") {
                dom.body.note.dataset.zIndex = 1;
                dom.body.page.dataset.zIndex = 2;
                
                log(route);
                resolve(route);
            }
            else if (root === "search") {
                dom.body.note.dataset.zIndex = 2;
                dom.body.page.dataset.zIndex = 1;
                
                log(route);
                resolve(route);
            } 
            else {                
                const e = {
                    code: 404
                }
                reject(e);
            }

        } else {}

        function log(route) {
            console.log('mvc.v log', route);
        }
    }
    return new Promise(a);
}

window.mvc.c = controller = {};

window.mvc.c.log = {};
window.mvc.c.log.on = function(event) {
    event.preventDefault();
    const form = event.target;
    const email = form.find('[type="text"]').value;
    const password = form.find('[type="password"]').value;
    auth.log.on(email, password).then(function() {
        '/desktop/'.router();
    }).catch(function(error) {
        alert(error.message);
    });
}
window.mvc.c.log.off = function() {
    window.firebase && window.auth && auth.account.user() ? auth.log.off().then('/'.router()) : '/'.router();
}
