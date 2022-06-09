import { useState } from "react"

export function useLoader(){
    const [isLoading, setLoading] = useState(false)

    const handleClose = () => {
        setLoading(false)
    }

    const handleOpen = () => {
        setLoading(true)
    }

    return [isLoading, handleClose, handleOpen] as const
}