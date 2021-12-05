export function getCloneLi(item) {
    const li = item.target.cloneNode(true);
    // li.innerHTML = item.target.innerHTML;
    return li;
   }