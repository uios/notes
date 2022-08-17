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
            if (root === "note") {
                dom.note.dataset.zIndex = 2;
                dom.page.dataset.zIndex = 1;
            } else {
                dom.note.dataset.zIndex = 1;
                dom.page.dataset.zIndex = 2;
            }

            if (root === "date") {
                log(route);
                resolve(route);
            }
            else if (root === "find") {

                log(route);
                resolve(route);
            } 
            else if (root === "menu") {
                log(route);
                resolve(route);
            }
            else if (root === "note") {
                log(route);
                resolve(route);
            }
            else {
                const e = {
                    code: 404
                }
                reject(e);
            }

        } else {
            log(route);
            resolve(route);
        }

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
