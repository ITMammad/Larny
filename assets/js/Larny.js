class Larny {
    constructor() {
        this.Components = [];
        this.rootComponent = "";
    }

    Splash() {
        document.body.innerHTML += "<div class='splash'><img src='assets/img/loader.svg'></div>";
    }

    UnSplash() {
        document.querySelector(".splash").remove();
    }

    SetRootElement(el) {
        this.rootComponent = el;
    }

    Component(obj) {
        if (typeof obj === "object") {
            this.Components.push(obj);
        } else {
            throw "Larny: Error in build component...";
        }
    }

    Navigate(url) {
        this.Splash();
        $.get({
            url: url + "?navigate=true",
            success: (txt) => {
                this.UnSplash();
                window.history.pushState({path: url} , "" , url);
                document.documentElement.innerHTML = txt;
            },
            err: () => {
                this.UnSplash();
                throw "Larny: Navigate error...";
            }
        });
    }
}