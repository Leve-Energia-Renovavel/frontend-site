/* eslint-disable react-hooks/exhaustive-deps */
import { useState, useEffect } from 'react'
import axios from 'axios'

export function usePost(url) {

    const [data, setData] = useState(null)

    useEffect(() => {
        try {
            axios.post(url).then(response => { setData(response.data) })

        } catch (error) {
            console.error("Error: " + error)
        }
    }, [])

    return { data }

}
