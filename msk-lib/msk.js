function msc(text = "welcome to msk library") {
    console.log(text);
}

function animator() {
    fade = 'hello word';
}

function msk(selector) {
    var self = {};
    self.selector = selector;
    self.element = document.querySelector(self.selector);
    self.html = function() { return self.element; }
    self.innerHtml = function(text) {
        if (!text) return self.element.innerHTML;
        self.element.innerHTML = text;
    }
    self.outerHtml = function(text) {
        if (!text) return self.element.outerHTML;
        self.element.outerHTML = text;
    }
    self.attr = function(name, value) {
        if (!value) return self.element.getAttribute(name);
        self.element.setAttribute(name, value);
        return self;
    }
    self.text = function(text) {
        if (!text) return self.element.textContent;
        self.element.textContent = text;
        return self;
    }
    self.css = function(value) { return self.element.style = value; }
    self.on = function(type, callback) {
        self.element['on' + type] = callback;
        return self;
    }
    self.toggle = function(cls = 'active') { return self.element.classList.toggle(cls) }
    self.hide = function() { return self.element.style.display = 'none' };
    self.show = function(type = 'block') { return self.element.style.display = type };
    self.length = function() { return self.element.textContent.length };
    self.type = function() { return typeof(self.element.innerHTML) };
    self.append = function(tag) { return self.element.appendChild(tag) };
    self.prepend = function(tag) { return self.element.prepend(tag) };
    self.fade = function() {
        return self.element.style = `
            background: lime;
        `;
    }

    return self;
}



function MSK(method, url, data) {
    const promise = new Promise((resolve, reject) => {
        const xhr = new XMLHttpRequest();
        xhr.open(method, url);
        xhr.responseType = 'json';
        if (data) {
            xhr.setRequestHeader('Content-Type', 'application/json');
        }
        xhr.onload = () => {
            if (xhr.status >= 400) {
                reject(xhr.response);
            } else {
                resolve(xhr.response);
            }
        }

        xhr.onerror = () => {
            reject('Something went Wrong');
        }

        xhr.send(JSON.stringify(data));
    });

    return promise;
}

msc()