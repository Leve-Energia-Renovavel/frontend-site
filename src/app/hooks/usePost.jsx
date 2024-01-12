/* eslint-disable react-hooks/exhaustive-deps */
import { useState, useEffect } from 'react'
import axios from 'axios'

export function useFetch(url) {

    const [data, setData] = useState(null)

    useEffect(() => {
        try {
            axios.post(url).then(response => { setData(response.data) })

        } catch (error) {
            console.error("Error: " + error)
        }
        console.log(JSON.stringify(data))

    }, [])

    return { data }

}
