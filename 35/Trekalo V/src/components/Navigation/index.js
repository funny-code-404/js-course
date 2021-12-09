export const APP_ROUTES = {
  news: "news",
  about: "about",
  data: "data",
};

class Nav {
  constructor(container) {
    return this.init(container);
  }
  init(container) {
    this.render(container);
  }

  render(container) {
    this.renderNavigation(container);
  }

  renderNavigation(container) {
    const nav = document.createElement("nav");
    nav.id = "nav";
    Object.keys(APP_ROUTES).forEach((route) => {
      const a = document.createElement("a");
      a.innerHTML = route.toUpperCase();
      a.href = "#";
      a.id = APP_ROUTES[route];
      nav.appendChild(a);
    });

    nav.addEventListener("click", (e) => {
      if (e.target.tagName === "A") {
        e.preventDefault();
        window.location.hash = e.target.id;
      } else {
        return;
      }
    });

    container.appendChild(nav);
  }
}

export default Nav;
