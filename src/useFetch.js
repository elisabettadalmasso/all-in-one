import { useEffect, useState } from "react"

function useFetch(url) {

    const [dati, setDati] = useState([])
    const [loading, setLoading] = useState(true)

    const [errore, setErrore] = useState(null)

    useEffect(() => {
        async function carica() {
            try {
                const res = await fetch(url)
                const d = await res.json()
                setDati(d)
            } catch (err) {
                setErrore(err)
            } finally{
                setLoading(false)
            }
        }
        carica()
    },[url])

    return { dati, loading, errore }
}

export default useFetch