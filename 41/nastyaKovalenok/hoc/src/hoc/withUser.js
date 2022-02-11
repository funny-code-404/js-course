export const withUser = MyComponent => {
    const user = {
        name: 'Pit',
        email: 'pit@email.com',
        password: '999'
    }
    const isNotEmpty = (Object.keys(user).length !== 0)

    return (props) => {
        return isNotEmpty ? (
                <MyComponent user={user} {...props}/>)
            : (<p>No data to render..</p>)
    }
}
