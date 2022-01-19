import DOM from "./js/utils/DOM";

class App extends DOM {
  constructor() {
    super({
      title: ".Title",
    });

    this.print();
  }

  print() {
    DOM.createListener(this.selectors.title, "click", () => {
      console.log("clicked");
    });
  }
}

new App();
