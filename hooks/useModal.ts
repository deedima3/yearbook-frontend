import { useState } from 'react'

export function useModal(){
    const [show, setShow] = useState(false)

    const handleClose = () => {
        setShow(false)
    }

    const handleOpen = () => {
        setShow(true)
    }

    return [show, setShow, handleClose, handleOpen] as const

}