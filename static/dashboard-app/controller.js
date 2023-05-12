function controller(view) {


    view.onHello = (x) => {
        console.log('Hello inside the class!')
    }

    view.getHello();
    view.render();

}

let view = new View();
controller(view);