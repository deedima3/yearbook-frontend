import { useState } from "react"

export function useProgressLoader(){
    const [progress, setProgress] = useState(0)
    const [isLoading, setLoading] = useState(false)

    return [progress, isLoading, setLoading, setProgress] as const
}