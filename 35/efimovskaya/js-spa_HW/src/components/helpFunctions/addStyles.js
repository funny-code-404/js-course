export function addStyles(el, nameEl) {
    el.style.cssText = `
    width: ${nameEl.width};
    height: ${nameEl.height};
    background-color: ${nameEl["background-color"]}; 
    border-radius: ${nameEl["border-radius"]};
  `;
  }