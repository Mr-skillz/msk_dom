function msk(selector) {

    const self = {

        element: document.querySelector(selector),
        html: () => self.element.innerHTML,
        outerHtml: () => self.element.outerHTML,
        // css actions
        css: (value) => { self.element.style = value },
        hide: () => { self.element.style.display = 'none' },
        show: () => { self.element.style.display = ' ' },
        toggle: (cls) => { self.element.classList.toggle(cls) },
        // attribute
        attr: (name, value) => {
            if (value == null)
                self.element.getAttribute(name)
            else
                self.element.setAttribute(name, value);
        },
        // text
        setText: (txt) => { self.element.textContent = txt },
        getText: () => { return self.element.textContent },

        // functions
        on: (event = 'load', callback) => { document.addEventListener(event, callback) },
        ready: (event, callback) => { self.element.addEventListener(event, callback) },
    }

    return self
}

function msc(text) {
    console.log(text);
}