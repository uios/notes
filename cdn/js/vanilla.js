Array.prototype.attr = function(attr, name) {
    var that = this;
    if (that.length > 1) {
        for (var i = that.length; i--; ) {
            var it = this[i];
            it ? it.setAttribute(attr, name) : null;
        }
    } else {
        that[0] ? that[0].setAttribute(attr, name) : null;
    }
    return that;
}
Array.prototype.removeAttr = function(name) {
    var that = this;
    if (that.length > 1) {
        for (var i = that.length; i--; ) {
            var it = this[i];
            it ? it.removeAttribute(name) : null;
        }
    } else {
        that[0] ? that[0].removeAttribute(name) : null;
    }
    return that;
}
Array.prototype.addClass = function(name) {
    var that = this;
    var vals = Object.values(that);
    if (vals.length > 0) {
        for (var i = vals.length; i--; ) {
            this[i].classList.add(name);
        }
    } else {
        that[0] ? that[0].classList.add(name) : null;
    }
    return that;
}
Array.prototype.removeClass = function(name) {
    var that = this;
    var vals = Object.values(that);
    if (vals.length > 0) {
        for (var i = vals.length; i--; ) {
            this[i].classList.remove(name);
        }
    } else {
        that[0] ? that[0].classList.add(name) : null;
    }
    return that;
}
Array.prototype.toggleClass = function(name) {
    var that = this;
    if (that.length > 1) {
        for (var i = that.length; i--; ) {
            var it = this[i];
            it.hasClass(name) ? it.classList.remove(name) : it.classList.add(name);
        }
    } else {
        that[0].hasClass(name) ? that[0].classList.remove(name) : that[0].classList.add(name);
    }
    return that;
}

Element.prototype.find = function(elem) {
    return this.querySelector(elem);
}
Element.prototype.hasClass = function(n) {
    return new RegExp(' ' + n + ' ').test(' ' + this.className + ' ');
}

String.prototype.contains = function(pattern) {
    var value = false
      , p = 0;
    do {
        value === false ? value = this.toString().includes(pattern[p]) : null;
        p++;
    } while (p < pattern.length);
    return value;
}

window.$ = function(e) {
    var obj = e;
    if (typeof obj === 'object') {
        if (NodeList.prototype.isPrototypeOf(obj)) {
            obj = Array.from(obj);
        } else {
            if (Element.prototype.isPrototypeOf(obj)) {
                obj = [obj];
            } else {
                obj = null;
            }
        }
    } else if (typeof obj === 'string') {
        var body = window.document.body;
        obj = body.querySelectorAll(obj);
        if (obj.length === 0) {
            obj = [];
        } else {
            obj = Array.from(obj);
        }
    } else {
        obj = null;
    }
    return obj;
}
window.byId = s=>{
    return document.getElementById(s);
}
window.is = {
    json: str=>{
        try {
            JSON.parse(str);
        } catch (e) {
            return false;
        }
        return true;
    }
    ,
    local: href=>href.contains(['127.0.0.1', 'about:', 'blob:', 'file:', 'localhost']),
    mobile: ()=>{
        return ['iPad Simulator', 'iPhone Simulator', 'iPod Simulator', 'iPad', 'iPhone', 'iPod'].includes(navigator.platform) || (navigator.userAgent.includes("Mac") && "ontouchend"in document)
    }
    ,
    touch: ()=>{
        return (('ontouchstart'in window) || (navigator.maxTouchPoints > 0) || (navigator.msMaxTouchPoints > 0));
    }
}

function ajax(url, settings) {
    var dir = window.location.href.split(url);
    return new Promise((resolve,reject)=>{
        var req;
        var data = {};
        if (settings) {
            settings.headers ? data.headers = settings.headers : null;
            if (settings.dataType) {
                data = {
                    method: settings.dataType,
                    body: (settings.data ? settings.data : null)
                };
                settings.dataType === "OPTIONS" ? data.credentials = 'include' : null;
            } else {
                req = url;
            }
        } else {
            req = url;
        }
        fetch(url, data).then(async(response)=>{
            if (!response.ok) {
                return response.text().then(text=>{
                    var statusText = JSON.parse(text);
                    var data = {
                        code: response.status,
                        message: statusText
                    };
                    var text = JSON.stringify(data);
                    throw new Error(text);
                }
                )
            }
            return response.text();
        }
        ).then(response=>{
            const isJSON = is.json(response);
            const data = isJSON ? JSON.parse(response) : response;
            resolve(response);
        }
        ).then(response=>resolve(response)).catch(error=>{
            console.log('vanilla.js ajax.fetch catch', error.message);
            var message = JSON.parse(error.message);
            reject(message);
        }
        );
    }
    );
}