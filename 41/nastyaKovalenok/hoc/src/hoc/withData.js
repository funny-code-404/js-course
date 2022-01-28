export const withData = MyComponent => {
    const data = []
    const isNotEmpty = !!data?.length;
    return (props) => {
        return isNotEmpty ? (
                <MyComponent data={data} {...props} />)
            : (<p>No data to render..</p>)
    }
}