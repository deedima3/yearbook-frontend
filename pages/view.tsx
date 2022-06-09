import type { NextPage } from 'next'
import NormalPageLayout from '../components/Layout/NormalPageLayout'
import CustomTitle from '../components/Title/CustomTitle'
import HeaderCard from '../components/Card/HeaderCard'
import Modal from '../components/Modals/Modal'
import ConfirmCard from '../components/Card/ModalsCard'
import { useModal } from '../hooks/useModal'
import ToastCard from '../components/Card/ToastCard'
import TextInput from '../components/Form/TextInput'
import PasswordInput from '../components/Form/PasswordInput'
import BirthdayTitle from '../components/Title/BirthdayTitle'
import Loader from '../components/Loader/Loader'
import { useState } from 'react'

const View = () => {
    const [modal, setModal, handleModalClose, handleModalOpen] = useModal();

    const [isLoading, setIsLoading] = useState(false);
  return (
    <NormalPageLayout> 
        <Loader isLoading={true} progress={0}/>
    </NormalPageLayout>
  )
}

export default View
