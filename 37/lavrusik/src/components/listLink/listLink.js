export const ListLink = (linksText) => {
    return <ul>
            {linksText.link.map(link => 
                <li>
                    <a href="#">{link}</a>
                </li>
            )}
        </ul>
    
}