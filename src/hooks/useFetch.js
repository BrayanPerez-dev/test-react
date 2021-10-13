import { useState, useEffect } from 'react'

export const useFetch = (search) => {
    const [data, setData] = useState([])
    const [error, setError] = useState('')
    useEffect(() => {
        const fetchData = async () => {
           await  fetch(`https://api.github.com/users/${search}/repos`)
                .then(res => res.json())
                .then(data => {
                    if(data.message){
                        setError(data.message)
                    }else{
                    setData(data)
                    }
                })
                .catch((e) => console.error(e))
        }

        const timer = setTimeout(() => {
            fetchData()
        }, 1000)
        return () => clearTimeout(timer)
    }, [search])
    return { data,error }
}

