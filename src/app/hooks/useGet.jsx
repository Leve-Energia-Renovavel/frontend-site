/* eslint-disable react-hooks/exhaustive-deps */
import { useState, useEffect } from 'react'
import axios from 'axios'

export function useGet(url) {

    const [data, setData] = useState(null)

    useEffect(() => {
        try {
            axios.get(url).then(response => { setData(response.data) })

        } catch (error) {
            console.error("Error: " + error)
        }
        console.log(JSON.stringify(data))

    }, [])

    return { data }

}
