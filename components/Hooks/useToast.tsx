import { useMemo, useState } from 'react'
import { ToastProps } from '../../interfaces/toastInterfaces'

export function useToast(duration : number){

    const [toast, setToast] = useState<ToastProps>({
        title: '',
        message: '',
        variant: 'info',
        extraClass: null,
        show: false
    })

    const showToast = (duration : number, {variant, title, message} : ToastProps) => {
        setToast({
            title,
            message,
            variant,
            extraClass: null,
            show: true
        })
        setTimeout(() => {
            setToast({
                title,
                message,
                variant,
                extraClass: null,
                show: false
            })
        }, duration)
    }

    return [toast, showToast] as const

}