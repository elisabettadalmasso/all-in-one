"use client"

import { useEffect, useState } from "react"

function useFetch(url : string) {
    const [data, setData] = useState<any[]>([])
    const [loading, setLoading] = useState(true)
    const [error, setError] = useState<Error | null>(null) 


    useEffect(() => {
        async function fetchData() {
            try {
                const res = await fetch(url)
                if (!res.ok) throw new Error(`HTTP error! status: ${res.status}`)
                const d = await res.json()
                setData(d)
            } catch (err) {
                setError(err as Error)
            } finally {
                setLoading(false)
            }
        }
        fetchData()
    }, [url])

    return {data, loading, error}
}

export default useFetch