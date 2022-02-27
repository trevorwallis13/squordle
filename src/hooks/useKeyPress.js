import { useEffect, useRef } from 'react'

const useKeyPress = (callBack) => {

    const handle = useRef(callBack)

    useEffect(() =>  {
        handle.current = callBack
    })

    useEffect(() => {

        const onKeyDown = (e) => {
            handle.current(e.key.toUpperCase())
         }

        document.addEventListener("keydown", onKeyDown)
        return () => document.removeEventListener("keydown", onKeyDown)
    }, [])
}

export default useKeyPress