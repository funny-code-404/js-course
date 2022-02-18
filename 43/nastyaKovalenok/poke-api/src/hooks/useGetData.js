import {useState, useEffect, useCallback} from "react";

export const useGetData = (url) => {

    const [data, setData] = useState({});
    const [error, setError] = useState(null);
    const [loading, setLoading] = useState(false);

    const getFetchData = useCallback(async () => {
            try{
                setLoading(true)
                const res = await fetch(url);
                const dataResponse = await res.json()
                setData(dataResponse);
                setLoading(false)
            }catch (e){
                setError(error)
                setLoading(false)
            }
        },[url])

    useEffect(()=>{
        getFetchData()
    },[getFetchData])

    console.log(data, error, loading)
    return [data, error, loading]
}
