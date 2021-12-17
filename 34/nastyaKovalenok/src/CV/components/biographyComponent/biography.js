import './biographyStyle.css'

export function createBiography() {
    const div = document.createElement('div')
    div.classList.add('biography')
    div.textContent = "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Amet commodi cumque deserunt dicta dolore doloribus esse et facere illum impedit, " +
        "in maiores, minima nihil nulla odio quisquam sapiente soluta suscipit temporibus vel veritatis voluptate voluptatum?" +
        " A culpa eligendi eveniet expedita, fugiat ipsam maiores minus molestiae nam nesciunt placeat, provident repellendus." +
        " A culpa eligendi eveniet expedita, fugiat ipsam maiores minus molestiae nam nesciunt placeat, provident repellendus." +
        "in maiores, minima nihil nulla odio quisquam sapiente soluta suscipit temporibus vel veritatis voluptate voluptatum?"
    return div;
}